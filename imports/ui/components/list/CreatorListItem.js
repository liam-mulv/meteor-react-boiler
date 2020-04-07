import React, {useEffect, useState} from 'react'
import {Meteor} from 'meteor/meteor'
import { Link } from 'react-router-dom'

// NPM
import moment from 'moment'
import ReactTooltip from 'react-tooltip'

// Styled Components
import {
	ListItemWrapper,
	ListItemContentWrapper,
	LeftList,
	RightList,
	CreatorImages,
	ListIcon,
	EditListButton
} from './CreatorListItem.sc'

// Icons
import EllipsisIcon from '../../icons/ellipsis'

function CreatorListItem (props) {
	if(props) {
		return (
			<ListItemWrapper>
				<Link to="/">
					<ListItemContentWrapper>
						<LeftList>
							<ListIcon>
								<img src={props.creator.images}/>
							</ListIcon>
							<div>
								<h4>{props.creator.username}</h4>
							</div>
						</LeftList>
					</ListItemContentWrapper>
				</Link>
				<EditListButton onClick={() => props.editList(props.index)} data-tip="Edit List">
					<ReactTooltip effect="solid" />
					<EllipsisIcon/>
				</EditListButton>
			</ListItemWrapper>
		)
	} else {
		return (<div>Loading...</div>)
	}

}

export default CreatorListItem