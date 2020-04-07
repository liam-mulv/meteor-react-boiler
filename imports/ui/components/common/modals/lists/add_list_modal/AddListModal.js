import {Meteor} from 'meteor/meteor'
import React, {useEffect, useState} from 'react'

// NPM
import moment from 'moment'

// Component
import BasicModal from '../../basic_modal/BasicModal'

// Styled Components
import {
	AddToListModalWrapper,
	AddToListModalContainer,
	Header,
	List,
	InputField,
	Button,
} from './AddListModal.sc'

// Custom hooks
import {useCreateListForm, useLists} from '../../../../../helpers/helpers'

function AddToListModal (props) {

	const hasSubmittedForm = () => {
		Meteor.call('lists.upsert', {title: inputs.newList, creators: []}, () => {
			props.setIsModalVisible(false)
		})
	}
	// Use form hook
	const {inputs, handleInputChange, handleSubmit} = useCreateListForm(hasSubmittedForm);

	return (
		<BasicModal closeOnClickOutside={props.setIsModalVisible} isVisible={props.isModalVisible}>
			<AddToListModalWrapper>
				<AddToListModalContainer>
					<Header>
						<h1>New List</h1>
						<p>Create Lists to organise prospective creators before initiating a collab.</p>
					</Header>
					<form onSubmit={handleSubmit}>
						<InputField 
						 	onChange={handleInputChange} 
						 	value={inputs.newList}
							type="text" 
							name="newList" 
							placeholder="Name your list" 
							required />
						<Button type="submit">Create</Button>
					</form>
				</AddToListModalContainer>
			</AddToListModalWrapper>
		</BasicModal>
	)
}

export default AddToListModal