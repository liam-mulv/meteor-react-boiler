

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
	ListIcon,
	ListItemTextWrapper,
	RightList,
	EditListButton,
	CreatorImages,
	CreatorImage,
	MoreCreators
} from './ListItem.sc'

// Icons
import EllipsisIcon from '../../icons/ellipsis'

function ListItem (props) {
	if(props) {
		return (
			<ListItemWrapper>
				<Link to={`/${props.type}/${props.list._id}`}>
					<ListItemContentWrapper>
						<LeftList>
						{props.list.title !== null &&
							<ListIcon color={props.list.title.slice(0,1) === 'I' ? '#7fe5dd' : props.list.title.slice(0,1) === 'V' ? '#b8bafd' : props.list.title.slice(0,1) === 'N' ? '#ffc39a' : '#fdb8d0'}>
								<div>{props.list.title.slice(0,1)}</div>
							</ListIcon>
						}

							<ListItemTextWrapper>
								<div>
									<div>
										<h4>{props.list.title}</h4>
									</div>
									<span>Created: {moment(props.list.timestamp).fromNow()}</span>
								</div>
							</ListItemTextWrapper>
						</LeftList>

						<RightList>
							{props.list.creators !== undefined && props.list.creators.length > 0 &&
								<CreatorImages>

									{props.list.creators.slice(0,3).map((creator, index) => {
										return (
											<CreatorImage zIndex={props.list.creators.length - index}>
												<Link to={"/profile/" + creator.username} data-tip={creator.username}>
													<ReactTooltip effect="solid" />
													<img src={creator.images}/>
												</Link>
											</CreatorImage>
										)
									})}
									{props.list.creators.length > 1 && 
										<MoreCreators data-tip={'View ' + (props.list.creators.length - 1) + ' more'}>+{props.list.creators.length - 1}</MoreCreators>
									}	
								</CreatorImages>	
							}
		
						</RightList>
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

export default ListItem