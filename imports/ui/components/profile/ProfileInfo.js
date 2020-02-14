import React from 'react'


import SkeletonProfileInfo from './SkeletonProfileContent'
import InstagramInfo from './InstagramInfo'
import ProfileStats from './ProfileStats'
import Tags from '../../components/tags/Tags'


// NPM
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


// Styled Components
import { 
	BudgetWrapper,
	BudgetContainer,
	BudgetProgress,
	ButtonContainer
} from '../collab/CollabHeader.sc'


// Styled Components
import { 
	ProfilePriceAndButtonWrapper,
	PriceAndButtonsContainer,
	ProfilePictureContainer, 
	ProfilePicture, 
	Username, 
	UserInfo,
	ProfileInfoFlex, 
	InfoBlock, 
	InfoTitle, 
	InfoDescription, 
	Tag, 
	ProfileButtonContainer,
	Shine,
	ProfileLeftAbsolute,
	ProfileRight,
	InstagramFeed,
	ProfileInfoRow
} from './ProfileInfo.sc'
import {Spacer, PageTitleWrapper} from '../../common/Common.sc'


// Icons
import MessageIcon from '../../icons/message'
import PlusIcon from '../../icons/plus'
import InstagramIcon from '../../icons/instagram'
import TagIcon from '../../icons/tag'
import MapMarkerIcon from '../../icons/map-marker'
import CheckIcon from '../../icons/check-circle'
import StarIcon from '../../icons/star'
import StarSolidIcon from '../../icons/star-solid'
import BadgeCheckIcon from '../../icons/badge-check-solid'

// Data
const tags = [
	{text: 'fashion', prefix:'#'},
	{text: 'influencer', prefix:'#'},
	{text: 'lifestyle', prefix:'#'},
]

function PriceAndButtons() {
	return (
		<PriceAndButtonsContainer>
			<ProfileButtonContainer>
				<button><MessageIcon/><Shine className="button-shine"/></button><button><PlusIcon/></button>
			</ProfileButtonContainer>
		</PriceAndButtonsContainer>
	)
}

function ProfileInfo(props) {
	return (
		<div>
			{!props.isLoading ?
				<ProfilePriceAndButtonWrapper padding="0px">
{/*					{!props.isCollab && PriceAndButtons()}
*/}					<InstagramInfo />
					<Tags tags={tags}/>

					<ProfileStats/>

				</ProfilePriceAndButtonWrapper>
			:
				<SkeletonProfileInfo/>
			}
		</div>
	)
}

export default ProfileInfo

