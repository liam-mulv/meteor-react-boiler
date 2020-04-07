import React, {useEffect, useState} from 'react'
import {Meteor} from 'meteor/meteor'

// Custom hooks
import {useList} from '../../helpers/helpers'

// NPM
import moment from 'moment'
import {useTable} from 'react-table';
import {useParams, useHistory} from 'react-router-dom'

// Components
import ListItem from '../../components/list/CreatorListItem'
import ListTable from '../../components/react_tables/list_table/ListTable'
import NavigateBack from '../../components/common/navigation/NavigateBack'

// Modals
import EditListModal from '../../components/common/modals/lists/edit_list_modal/EditListModal'
import AddCreatorToListModal from '../../components/common/modals/lists/search_and_add_creator_to_list_modal/AddCreatorToListModal'

// Styled Components
import {DashboardContainer} from '../home/Home.sc'
import {PageContainer} from '../../components/common_old/Common.sc'
import {List, Header, NoListFound, LeftHeader, RightHeader, EditListButton, Loading} from '../../components/common/list/List.sc'

//Icons
import Ellipsis from '../../icons/ellipsis'


function ListComponent (props) {

	const {listId} = useParams()

	// let parts = props.location.pathname.split("/");
	// const listId = parts[parts.length - 1]
	
	// Subscribe to list pub
	const {list, creators, isLoadingList} = useList(listId)
	// Toggle Modals
	const [isEditListModalVisible, setIsEditListModalVisible] = useState(false)
	const [isAddToListModalVisible, setIsAddToListModalVisible] = useState(false)

	// Set List To Edit
	const [listToEditIndex, setListToEditIndex] = useState(0)
	
	// Add status to creator object
	const creatorsWithStatus = []
	if(list && creators) {
		list.creators.map((creatorRef, i ) => {
			creators.map((creator, i2) => {
				if(creatorRef.username === creator.username) {
					let c = creator
					c.listId = list._id
					c.status = creatorRef.status
					creatorsWithStatus.push(c)
				}
			})
		})
	}
	return (
		<PageContainer>
			{!isLoadingList && list.title ? 
				<React.Fragment>
					<List>
						<ListTable list={list} data={creatorsWithStatus} creatorsWithStatus={creatorsWithStatus} openAddCreatorToListModal={setIsAddToListModalVisible} setIsEditListModalVisible={setIsEditListModalVisible}/>
					</List>
				</React.Fragment>
			: 
				<Loading><div>Loading...</div></Loading> 
			}
			{isAddToListModalVisible && <AddCreatorToListModal list={list} isModalVisible={isAddToListModalVisible} setIsModalVisible={setIsAddToListModalVisible}/>}

			{isEditListModalVisible && <EditListModal noList={true} list={list} isModalVisible={isEditListModalVisible} setIsModalVisible={setIsEditListModalVisible}/>}
		</PageContainer>
	)
}

export default ListComponent