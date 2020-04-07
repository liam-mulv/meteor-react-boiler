import React, {useEffect, useState} from 'react'
import {Meteor} from 'meteor/meteor'

// NPM
import moment from 'moment'
import Lottie from 'react-lottie';

// Lottie
import * as animationData from '../../../../../lottie/spinner.json'
const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: animationData,
  rendererSettings: {preserveAspectRatio: 'xMidYMid slice'}
}


// Component
import BasicModal from '../../basic_modal/BasicModal'

// Styled Components
import {
	AddToListModalWrapper,
	AddToListModalContainer,
	CloseModal,
	Header,
	List,
	ListCount,
	InputField,
	Button,
	NoListFound,
	ListIcon,
	ListItemTextWrapper,
	LottieWrapper,
	ProfilePicture
} from './AddCreatorToListModal.sc'

// Custom hooks
import {useCreateListForm, useCollabs} from '../../../../../helpers/helpers'

function AddToListModal (props) {

	const hasSubmittedForm = () => {
		Meteor.call('lists.upsert', {title: inputs.newList, creators: []})
	}

	const [isAddingCreator, setIsAddingCreator] = useState(false)
	const addRemoveCreator = (collab, type) => {
		console.log(props.user)
		let creator = {
			userId: Meteor.userId(),
			collabId: collab._id,
			username: props.user.username,
			full_name: props.user.full_name,
			description: props.user.description,
			images: props.user.images,
			profile_url: props.user.profile_url,
			website_url: props.user.website_url,
			engagement_rate: props.user.engagement_rate,
			avg_comments_per_post: props.user.avg_comments_per_post,
			avg_likes_per_post: props.user.avg_likes_per_post,
			comment_to_like_ratio: props.user.comment_to_like_ratio,
			follower_count: props.user.follower_count,
			following_count: props.user.following_count,
			media_count: props.user.media_count,
			updated_at: props.user.updated_at,
			post_frequency: props.user.post_frequency,
			has_posted: false,

		}

		Meteor.call('collabs_creators.upsert', creator, (err, res) => {
			if(!err) {
				console.log('Added creator to collab')
			} else {
				console.log(err)
			}
		})
	}

	// Subscribe to lists pub
	const {collabs, isLoadingCollabs} = useCollabs()
	// Use form hook
	const {inputs, handleInputChange, handleSubmit} = useCreateListForm(hasSubmittedForm);

	return (
		<BasicModal closeOnClickOutside={props.setIsModalVisible} isVisible={props.isModalVisible}>
			<AddToListModalWrapper>
				<AddToListModalContainer>
					<Header>
						<h1>Add to Collab</h1>
						<p>Create Collabs to track your creator posts, collab results and earnings.</p>
					</Header>
					{!isLoadingCollabs ?
						<React.Fragment>
							<List>
								{collabs.map((collab, index) => {
									return (
										<div onClick={() => addRemoveCreator(collab, 'add')}>
											<ListIcon color={collab.title.slice(0,1) === 'I' ? '#7fe5dd' : collab.title.slice(0,1) === 'V' ? '#b8bafd' : collab.title.slice(0,1) === 'N' ? '#ffc39a' : '#fdb8d0'}>
												<div>
													{collab.title.slice(0,1)}
												</div>
											</ListIcon>
											<ListItemTextWrapper>
												<div>	
													<div>
														{collab.title}
													</div>
													<span>{moment(collab.timestamp).fromNow()}</span>
												</div>
												
												<ListCount>
												??
												</ListCount>
											</ListItemTextWrapper>
										</div>
									)
								})}
							</List>
							{collabs.length < 1 && <NoListFound>No lists found</NoListFound>}
						</React.Fragment>
					:
						<div>
							<LottieWrapper color='#222'>
								<Lottie options={defaultOptions}
					              height={30}
					              width={30}
					              isStopped={false}
					              isPaused={false}/>
				            </LottieWrapper>
				        </div>
					}
					<form onSubmit={handleSubmit}>
						<InputField 
						 	onChange={handleInputChange} 
						 	value={inputs.newList}
							type="text" 
							name="newList" 
							placeholder="Create new collab" 
							required />
						<Button type="submit">
							Create New Collab
						</Button>
					</form>
				</AddToListModalContainer>
			</AddToListModalWrapper>
		</BasicModal>
	)
}

export default AddToListModal