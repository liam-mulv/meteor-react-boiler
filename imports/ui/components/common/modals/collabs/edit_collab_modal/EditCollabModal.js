import {Meteor} from 'meteor/meteor'
import React, {useEffect, useState, useRef} from 'react'

// NPM
import moment from 'moment'
import ReactTooltip from 'react-tooltip'

// Component
import BasicModal from '../../basic_modal/BasicModal'

// Styled Componnets
import {
	EditListModalContainer, 
	Header, 
	HeaderText, 
	ListIcon, 
	List, 
	CreatorListItem,
	ListItemLeft,
	ListItemRight,
	Footer,
	Button
} from './EditCollabModal.sc'

// Icons
import TimesIcon from '../../../../../icons/times'
import PencilIcon from '../../../../../icons/pencil'

// Helper Hooks

import {useKeyPress} from '../../../../../helpers/helpers'

function EditListModal (props) {

	function creatorListItem (creator) {
		return (
			<CreatorListItem>
				<ListItemLeft>
					<img src={creator.images}/>
					<div>{creator.username}</div>
				</ListItemLeft>
				<ListItemRight>
					<div onClick={() => removeCreator(creator)}>
						<TimesIcon />
					</div>
				</ListItemRight>
			</CreatorListItem>
		)
	}

	// Remove creator on click from list
	const removeCreator = (creator) => {
		Meteor.call('collabs.removeCreator', props.list._id, creator )
	}

	// Delete List on button click
	const removeList = () => {
		Meteor.call('collabs.remove', props.list._id, (err, res) => {
			if(!err) {
				props.setIsModalVisible(false)
			}
		})
	}

	// List title input ref
  	const inputRef = useRef(null);
  	// List title state and setter
	const [title, setTitle] = useState()
	// List editing state and setter
	const [isEditingTitle, setIsEditingTitle] = useState(false)
	const editListTitle = (title) => {
		setTitle(title)
		setIsEditingTitle(true)
	}


	// List Input Title Setter
	const onTitleChange = (e) => {
		setTitle(e.target.value)
	}


	// On blur update List Title in DB
	const onTitleBlur = () => {
		setIsEditingTitle(false)
		Meteor.call('collabs.updateTitle', props.list._id, title)
	}


	// KeyPress custom hook
	const enterKeyPress= useKeyPress('Enter')
	// Watch Title & Keypress state for side-effects
  	useEffect(() => {
    	if (isEditingTitle) {
      		inputRef.current.focus();
    	}
    	if(enterKeyPress && isEditingTitle) {
			onTitleBlur()
    	}
  	}, [isEditingTitle, enterKeyPress])

	return (
		<BasicModal closeOnClickOutside={props.setIsModalVisible} isVisible={props.isModalVisible}>
			{props.list &&
				<EditListModalContainer>
					{props.list.title &&
						<Header>
							<ListIcon color={props.list.title.slice(0,1) === 'I' ? '#7fe5dd' : props.list.title.slice(0,1) === 'V' ? '#b8bafd' : props.list.title.slice(0,1) === 'N' ? '#ffc39a' : '#fdb8d0'}>
								<div>{props.list.title.slice(0,1)}</div>
							</ListIcon>
								<HeaderText>
									{!isEditingTitle ? 
										<div onClick={() => editListTitle(props.list.title)}>
											<h1>{props.list.title}</h1><PencilIcon />
										</div>
										 : 
										<input ref={inputRef} onBlur={() => onTitleBlur()} onChange={(e) => onTitleChange(e)} value={title}/>
									}
									<span>Created: {moment(props.list.timestamp).fromNow()}</span>
								</HeaderText>
							
						</Header>
					}
					{!props.noList &&
						<List>
							{props.list.creators !== undefined && props.list.creators.map((creator, index) => {
								return (
									<React.Fragment>
										{creatorListItem(creator)}
									</React.Fragment>
								)
							})}
						</List>
					}
					<Footer borderTop={props.noList}>
						<div></div><div><Button warning onClick={() => removeList()}>Delete List</Button></div>
					</Footer>
				</EditListModalContainer>
			}
		</BasicModal>
	)
}

export default EditListModal