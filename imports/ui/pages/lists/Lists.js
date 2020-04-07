import React, {useEffect, useState} from 'react'
import {Meteor} from 'meteor/meteor'
import { Link } from 'react-router-dom'

// Custom hooks
import {useCreateListForm, useLists} from '../../helpers/helpers'

// NPM
import moment from 'moment'

// Components
import AddListModal from '../../components/common/modals/lists/add_list_modal/AddListModal'
import EditListModal from '../../components/common/modals/lists/edit_list_modal/EditListModal'
import ListItem from '../../components/lists/ListItem'
import Button from '../../components/common/buttons/Buttons'

// Styled Components
import {List, Header, NoListFound, Loading} from '../../components/common/lists/Lists.sc'


function Lists () {

	// Subscribe to lists pub
	const {lists, isLoadingLists} = useLists()

	// Toggle Modals
	const [isAddListModalVisible, setIsAddListModalVisible] = useState(false)
	const [isEditListModalVisible, setIsEditListModalVisible] = useState(false)

	// Set List To Edit
	const [listToEditIndex, setListToEditIndex] = useState(0)
	const editList = (listIndex) => {
		setIsEditListModalVisible(true)
		setListToEditIndex(listIndex)
	}

	return (
		<>
			<React.Fragment>
				<List>
					<Header>
						<h1>Lists <span><small>{lists.length}</small></span></h1>

						<Button type="primary" value="New" onClick={() => setIsAddListModalVisible(true)}/>
					</Header>
					{!isLoadingLists ?
						<>
							{lists.map((list, index) => {
								return (
									<ListItem type="lists" list={list} editList={editList} index={index}/>
								)
							})}
							</>
					:
						<Loading><div>Loading...</div></Loading>
					}
					{!isLoadingLists && lists.length < 1 && 
						<NoListFound>No lists found</NoListFound>
					}
				</List>
			</React.Fragment>
			{isEditListModalVisible && <EditListModal list={lists[listToEditIndex]} isModalVisible={isEditListModalVisible} setIsModalVisible={setIsEditListModalVisible}/>}
			{isAddListModalVisible && <AddListModal isModalVisible={isAddListModalVisible} setIsModalVisible={setIsAddListModalVisible}/>}
		</>
	)
}

export default Lists