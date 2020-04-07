import React, {useEffect, useState} from 'react'
import {Meteor} from 'meteor/meteor'

// NPM
import { useQueryParam, NumberParam, StringParam } from 'use-query-params';
import {useParams} from "react-router-dom"


// NEW COMPONENTS
import ProfileInfo from '../../components/profile/profile_info/ProfileInfo'
import OverviewStats from '../../components/profile/overview_stats/OverviewStats'
import AudienceInsights from '../../components/profile/audience_insights/AudienceInsights'
import WordCloud from '../../components/profile/word_cloud/WordCloud'
import AveragePerPost from '../../components/profile/average_per_post/AveragePerPost'
import MediaFeed from '../../components/profile/media_feed/MediaFeed'

// Modals
import BasicModal from '../../components/common/modals/basic_modal/BasicModal'
import MediaModalContent from '../../components/profile/media_modal_content/MediaModalContent'
import {ArrowsWrapper, Next, Previous} from '../../components/profile/media_modal_content/MediaModalContent.sc'
import AddCreatorToListModal from '../../components/common/modals/lists/add_creator_to_list_modal/AddCreatorToListModal'
import AddCreatorToCollabModal from '../../components/common/modals/collabs/add_creator_to_collab_modal/AddCreatorToCollabModal'

import EditListModal from '../../components/common/modals/lists/edit_list_modal/EditListModal'


// Styled Components
import {DashboardContainer} from '../home/Home.sc'
import {PageContainer } from '../../components/common_old/Common.sc'
import {CustomFlexLayout} from '../../layout/FlexLayouts.sc'
import {
	ProfileStatsWrapper, 
	MediaFeedWrapper, 
	ProfileInfoWrapper
} from './Profile.sc'

//Icons 
import ChevronRight from '../../icons/chevron-right'
import ChevronLeft from '../../icons/chevron-left'


// Helpers
import {useAccount, useInstagramUser, useInstagramMediaFeed, useWindowSize, useKeyPress} from '../../helpers/helpers'

// Render profile page
function ProfilePage(props) {
	
	 let {username} = useParams()

	// Search & update user if neccessary
	useEffect(() => {
		Meteor.call('ig_users.search', username)
	}, [])



	// Get logged in state and user
	const { isLoggedIn, user } = useAccount()
	// Subscribe to instagram user
	const {ig_user, isLoadingUser} = useInstagramUser(username)
	// Subscribe to media feed
	const {ig_media, isLoadingMedia} = useInstagramMediaFeed(username)
	
	// Control active modal media
	const [activeMediaIndex, setActiveMediaIndex] = useState(0)
	// Control modal visibility
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [isAddToListModalVisible, setIsAddToListModalVisible] = useState(false)
	const [isAddToCollabModalVisible, setIsAddToCollabModalVisible] = useState(false)

	const [isEditListModalVisible, setIsEditListModalVisible] = useState(false)
	const [listToEdit, setListToEdit] = useState(null)

	toggleListToEdit = (list) => {
		console.log('Toggling List')
		setListToEdit(list)
		setIsEditListModalVisible(true)
	}
	// Show Modal With Clicked Media
	openModalAndSetActiveMedia = (index) => {
		setActiveMediaIndex(index)
		setIsModalVisible(true)
	}

	// Navigate To Next Image
	nextSlide = (currentSlide) => {
		if(ig_media.length - 1 !== activeMediaIndex) {
			setActiveMediaIndex(currentSlide + 1)
		}
	}

	// Navigate To Previous Image
	prevSlide = (currentSlide) => {
		if(0 !== activeMediaIndex) {
			setActiveMediaIndex(currentSlide - 1)
		}
	}

	// KeyPress custom hook
	const leftKeyPress = useKeyPress('ArrowLeft')
	const rightKeyPress = useKeyPress('ArrowRight')
	const escapeKeyPress = useKeyPress('Escape')

	// Watch Title & Keypress state for side-effects
  	useEffect(() => {
    	if(leftKeyPress && isModalVisible) {
			prevSlide(activeMediaIndex)
    	}
    	if(rightKeyPress && isModalVisible) {
    		nextSlide(activeMediaIndex)
    	}
    	if(escapeKeyPress && isModalVisible) {
    		setIsModalVisible(false)
    	}
  	}, [isModalVisible, leftKeyPress, rightKeyPress, escapeKeyPress])


	// Scroll hook
	const [profileStatsIsScrolled, setProfileStatsIsScrolled] = useState(false)
	const [mediaIsScrolled, setMediaIsScrolled] = useState(false)

  	handleScroll = (e, element) => {
  		console.log(e, element)
	    if(element === 'profile') {
	    	if(e.target.scrollTop > 5 && profileStatsIsScrolled === false){
	    		setProfileStatsIsScrolled(true)
	    	} else if (e.target.scrollTop < 5 && profileStatsIsScrolled === true) {
	    		setProfileStatsIsScrolled(false)
	    	}
    	} else if(element === 'media') {
	    	if(e.target.scrollTop > 5 && mediaIsScrolled === false){
	    		setMediaIsScrolled(true)
	    	} else if (e.target.scrollTop < 5 && mediaIsScrolled === true) {
	    		setMediaIsScrolled(false)
	    	}
    	}


  	}
	return (
		<>
			{ig_user ?
				<DashboardContainer marginTop="0px">
					<PageContainer>
						<CustomFlexLayout>

							<ProfileInfoWrapper>
								<ProfileInfo user={ig_user} type="Influencer" isLoading={isLoadingUser} setIsAddToCollabModalVisible={setIsAddToCollabModalVisible} setIsAddToListModalVisible={setIsAddToListModalVisible} toggleListToEdit={toggleListToEdit}/>
							</ProfileInfoWrapper>

							<ProfileStatsWrapper onScroll={(e) => handleScroll(e, 'profile')} isOffSet={profileStatsIsScrolled}>
								<OverviewStats user={ig_user} isLoading={isLoadingUser}/>
								<AudienceInsights user={ig_user} data={ig_user.posting_habits} isLoading={isLoadingUser}/>
								<AveragePerPost user={ig_user} isLoading={isLoadingUser}/>
								<WordCloud user={ig_user} isLoading={isLoadingUser}/>
							</ProfileStatsWrapper>

							<MediaFeedWrapper onScroll={(e) => handleScroll(e, 'media')} isOffSet={mediaIsScrolled}>
								<MediaFeed ig_media={ig_media} isLoading={isLoadingMedia} setActiveMedia={openModalAndSetActiveMedia}/>
							</MediaFeedWrapper>

						</CustomFlexLayout>

						<BasicModal closeOnClickOutside={setIsModalVisible} isVisible={isModalVisible}>
							<MediaModalContent
								user={ig_user}
								lastSlide={ig_media.length - 1}
								prevSlide={prevSlide} 
								nextSlide={nextSlide} 
								currentSlide={activeMediaIndex}
								media={ig_media[activeMediaIndex]} 
								isLoading={isLoadingMedia}
								closeModal={setIsModalVisible}
							/>	
						</BasicModal>
						{isEditListModalVisible && <EditListModal list={listToEdit} isModalVisible={isEditListModalVisible} setIsModalVisible={setIsEditListModalVisible}/>}
						{isAddToListModalVisible && <AddCreatorToListModal user={ig_user} isModalVisible={isAddToListModalVisible} setIsModalVisible={setIsAddToListModalVisible}/>}
						{isAddToCollabModalVisible && <AddCreatorToCollabModal user={ig_user} isModalVisible={isAddToCollabModalVisible} setIsModalVisible={setIsAddToCollabModalVisible}/>}

					</PageContainer>
				</DashboardContainer>
			:
				<></>
			}
		</>
	)
}

export default ProfilePage