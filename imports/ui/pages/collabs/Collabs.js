import React, {useEffect, useState} from 'react'
import {Meteor} from 'meteor/meteor'
import { Link } from 'react-router-dom'

// Custom hooks
import {useCreateListForm, useCollabs} from '../../helpers/helpers'

// NPM
import moment from 'moment'

// Components
import AddCollabModal from '../../components/common/modals/collabs/add_collab_modal/AddCollabModal'
import EditCollabModal from '../../components/common/modals/collabs/edit_collab_modal/EditCollabModal'
import ListItem from '../../components/lists/ListItem'
import Button from '../../components/common/buttons/Buttons'


// Styled Components
import {DashboardContainer} from '../home/Home.sc'
import {List, Header, NoListFound, Loading} from '../../components/common/lists/Lists.sc'

function MyCollabsPage() {

	// Subscribe to lists pub
	const {collabs, isLoadingCollabs} = useCollabs()

	console.log('Collabs', collabs)
	// Toggle Modals
	const [isAddCollabModalVisible, setIsAddCollabModalVisible] = useState(false)
	const [isEditCollabModalVisible, setIsEditCollabModalVisible] = useState(false)

	// Set List To Edit
	const [collabToEditIndex, setCollabToEditIndex] = useState(0)
	const editList = (listIndex) => {
		setIsEditCollabModalVisible(true)
		setCollabToEditIndex(listIndex)
	}

	return (
		<div>
			<React.Fragment>
				<List>
					<Header>
						<h1>Collabs <span><small>{collabs.length}</small></span></h1>
						<Button type="primary" value="New" onClick={() => setIsAddCollabModalVisible(true)}/>
					</Header>
					{!isLoadingCollabs ?
						<>
						{collabs.map((list, index) => {
							return (
								<ListItem type="collabs" list={list} editList={editList} index={index}/>
							)
						})}
						</>
					:
						<Loading><div>Loading...</div></Loading>
					}
					{!isLoadingCollabs && collabs.length < 1 && 
						<NoListFound>No collabs found</NoListFound>
					}
				</List>
			</React.Fragment>
			{isEditCollabModalVisible && <EditCollabModal list={collabs[collabToEditIndex]} isModalVisible={isEditCollabModalVisible} setIsModalVisible={setIsEditCollabModalVisible}/>}
			{isAddCollabModalVisible && <AddCollabModal isModalVisible={isAddCollabModalVisible} setIsModalVisible={setIsAddCollabModalVisible}/>}
		</div>
	)
}

export default MyCollabsPage