import React, {useEffect, useState} from 'react'

// NPM
import moment from 'moment'

// Styled Components
import {ListHeader, LeftHeader, ListHeaderIcon} from './Header.sc'
import EllipsisIcon from '../../../icons/ellipsis'

function CollabHeader (props) {
	return (
		<>
			{props.collab ?
				<ListHeader sticky={props.sticky} stickyPosition={props.stickyPosition}>
		          	<LeftHeader>
			            <ListHeaderIcon color={props.collab.title.slice(0,1) === 'I' ? '#7fe5dd' : props.collab.title.slice(0,1) === 'V' ? '#b8bafd' : props.collab.title.slice(0,1) === 'N' ? '#ffc39a' : '#fdb8d0'}>
			              <div>{props.collab.title.slice(0,1)}</div>
			            </ListHeaderIcon>
			            <div>
			              <div>
			                <h1>{props.collab.title}<span> <small>({props.creators.length})</small></span></h1>
			                <span>Created: {moment(props.collab.timestamp).fromNow()}</span>
			              </div>
			            </div>
		          	</LeftHeader>
			        <div>
			          <div data-tip="Edit List">
			            <EllipsisIcon/>
			          </div>
			        </div>
			    </ListHeader>
			    :
		    	<p>Loading...</p>
			}
		</>
	)
}

export default CollabHeader