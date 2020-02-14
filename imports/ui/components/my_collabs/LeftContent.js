import React, {useEffect, useState} from 'react'

import {LeftContentWrapper} from './MyCollabs.sc'
import {
	CollabListWrapper, 
	CollabList,
	CollabListHeader, 
	CollabListSubHeader, 
	CollabListItemWrapper,
	CollabListItemIconWrapper,
	CollabListItemIcon,
	StyledBackgroundImage,
	CollabListItemTextWrapper,
	CollabListItemTopText,
	CollabListItemBottomText,
	UnreadIndicator
} from './LeftContent.sc'


function renderMyCollabs(collab, index) {
	return (
		<CollabListItemWrapper active={index === 1}>
			<CollabListItemIconWrapper>
				<CollabListItemIcon>
					<StyledBackgroundImage 
		                width="100%" 
		                height="100%" 
		                lazyLoad 
		                className="influencer-bg-img" 
		                src={collab.profile_pic}
		            />
	            </CollabListItemIcon>
            </CollabListItemIconWrapper>
            <CollabListItemTextWrapper>
            	<CollabListItemTopText unread={index === 0 }>{collab.title}</CollabListItemTopText>
            	<CollabListItemBottomText unread={index === 0 }>
            		<span>
            			<span>Emily</span>: <span>Thanks emily! Your post has been has been approved, your funds will be</span>
            		</span>
            		<div> · </div>
            		<div>Sun</div>
            	</CollabListItemBottomText>

            	{index === 0 && <UnreadIndicator/>}

            </CollabListItemTextWrapper>

		</CollabListItemWrapper>
	)
}

function LeftContent(props) {

	const [activeListIsOpen, setActiveListIsOpen] = useState(true)
	const [completedListIsOpen, setCompletedListIsOpen] = useState(true)
	const [closedListIsOpen, setClosedListIsOpen] = useState(true)

	toggleList = (list) => {
		if(list === 'active') {
			setActiveListIsOpen(!activeListIsOpen)
		} else if (list === 'completed') {
			setCompletedListIsOpen(!completedListIsOpen)
		} else if (list === 'closed') {
			setClosedListIsOpen(!closedListIsOpen)
		}
	}

	return (
		<LeftContentWrapper>
			<CollabListHeader>
				<CollabListItemIcon dimensions="40px">
					<StyledBackgroundImage 
		                width="100%" 
		                height="100%" 
		                lazyLoad 
		                src="https://www.raconteur.net/wp-content/uploads/2019/03/shutterstock_1135973729.jpg"
		            />
	            </CollabListItemIcon>	
	            <span>My Collabs</span>
			</CollabListHeader>
			<CollabListWrapper>

				<CollabListSubHeader type="active" noBorder={true} onClick={() => toggleList('active')}>Active<span>2</span></CollabListSubHeader>
				<CollabList height={activeListIsOpen && 2 * 64 + 20}>
					{props.collabs.slice(0,2).map((collab, index) => {
						return (
							<React.Fragment>
								{renderMyCollabs(collab, index)}
							</React.Fragment>
						)
					})}
				</CollabList>
				<CollabListSubHeader type="completed" onClick={() => toggleList('completed')}>Complete<span>3</span></CollabListSubHeader>
				<CollabList height={completedListIsOpen && 4 * 64 + 20}>
					{props.collabs.slice(2,6).map((collab, index) => {
						return (
							<React.Fragment>
								{renderMyCollabs(collab)}
							</React.Fragment>
						)
					})}
				</CollabList>
				<CollabListSubHeader type="closed" onClick={() => toggleList('closed')}>Closed<span>1</span></CollabListSubHeader>
				<CollabList height={closedListIsOpen && 2 * 64 + 20}>
					{props.collabs.slice(6,9).map((collab, index) => {
						return (
							<React.Fragment>
								{renderMyCollabs(collab, 2 * 64 + 20)}
							</React.Fragment>
						)
					})}
				</CollabList>
			</CollabListWrapper>
		</LeftContentWrapper>
	)
}

export default LeftContent