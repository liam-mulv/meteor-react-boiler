import React, {useEffect, useState} from 'react'

// Styled Components
import {CollabHeaderWrapper, CollabHeaderTitle, MessageWindowIcon, CollabHeaderRightNavigation, NavigationItem, ActiveIndicator} from './Header.sc'
import {LazyLoadBackgroundImage} from '../../common/Common.sc'

function CollabHeader(props) {
	return (
		<CollabHeaderWrapper>
			<CollabHeaderTitle>
				<MessageWindowIcon dimensions="40px">
					<LazyLoadBackgroundImage 
		                width="100%" 
		                height="100%" 
		                lazyLoad 
		                src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/092015/beats_logo.png?itok=7RvjIJ-Y"
		            />
	            </MessageWindowIcon>	
	            <span>Beats - By Dre</span>
			</CollabHeaderTitle>
			<CollabHeaderRightNavigation>
	            <NavigationItem onClick={() => props.toggleLeftContent(true)}>
	            	<span>view collab</span>
	            	{props.submitPostIsActive && <ActiveIndicator/>}
	            </NavigationItem>
	            <NavigationItem isActive={props.submitPostIsActive} onClick={() => props.toggleLeftContent(false)}>
	            	<span>submit post</span>
	            	{!props.submitPostIsActive && <ActiveIndicator/> }
	            </NavigationItem>
            </CollabHeaderRightNavigation>
		</CollabHeaderWrapper>
	)
}

export default CollabHeader