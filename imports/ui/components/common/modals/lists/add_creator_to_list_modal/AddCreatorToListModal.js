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
import {useCreateListForm, useLists} from '../../../../../helpers/helpers'

function AddToListModal (props) {

	const hasSubmittedForm = () => {
		Meteor.call('lists.upsert', {title: inputs.newList, creators: []})
	}

	const [isAddingCreator, setIsAddingCreator] = useState(false)
	const addRemoveCreator = (list, type) => {
		setIsAddingCreator(list._id)
		let creator = {
			_id: props.user._id,
			images: props.user.images,
			username: props.user.username,
			full_name: props.user.full_name
		}
		if(type === 'remove') {
			Meteor.call('lists.removeCreator', list._id, creator, (err, res) => {
				setIsAddingCreator(false)
			})	
		} else {
			Meteor.call('lists.addCreator', list._id, creator, (err, res) => {
				setIsAddingCreator(false)
			})
		}

	}

	// Subscribe to lists pub
	const {lists, isLoadingLists} = useLists()
	// Use form hook
	const {inputs, handleInputChange, handleSubmit} = useCreateListForm(hasSubmittedForm);

	return (
		<BasicModal closeOnClickOutside={props.setIsModalVisible} isVisible={props.isModalVisible}>
			<AddToListModalWrapper>
				<AddToListModalContainer>
					<Header>
						<h1>Add to List</h1>
						<p>Create lists to organise prospective creators before initiating a collab.</p>
					</Header>
					{!isLoadingLists ?
						<React.Fragment>
							<List>
								{lists.map((list, index) => {
									return (
										<div onClick={list.creators.some(c => c.username === props.user.username) ? () => addRemoveCreator(list, 'remove') : () => addRemoveCreator(list, 'add')}>
											<ListIcon color={list.title.slice(0,1) === 'I' ? '#7fe5dd' : list.title.slice(0,1) === 'V' ? '#b8bafd' : list.title.slice(0,1) === 'N' ? '#ffc39a' : '#fdb8d0'}>
												<div>
													{isAddingCreator !== list._id ? 
														<>{list.title.slice(0,1)}</>
														:
														<LottieWrapper color='#fff'>
															<Lottie options={defaultOptions}
											              		height={30}
											              		width={30}
											              		isStopped={false}
											              		isPaused={false}
											              	/>
										            	</LottieWrapper> 
										            }
												</div>
											</ListIcon>
											<ListItemTextWrapper>
												<div>	
													<div>
														{list.title}
													</div>
													<span>{moment(list.timestamp).fromNow()}</span>
												</div>
												
												<ListCount>
													{list.creators.some(c => c.username === props.user.username) && <ProfilePicture><img src={props.user.images}/></ProfilePicture>}
													<div><div>{list.creators.length}</div></div>
												</ListCount>
											</ListItemTextWrapper>
										</div>
									)
								})}
							</List>
							{lists.length < 1 && <NoListFound>No lists found</NoListFound>}
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
							placeholder="Create new list" 
							required />
						<Button type="submit">
							Create New List
						</Button>
					</form>
				</AddToListModalContainer>
			</AddToListModalWrapper>
		</BasicModal>
	)
}

export default AddToListModal