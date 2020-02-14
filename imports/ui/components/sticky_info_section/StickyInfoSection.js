import React from 'react'
import {StickyInfoSectionContainer, StickyTitle, ContentLeft, ContentRight} from './StickyInfoSection.sc'


function StickyInfoSection(props) {
	return (
		<StickyInfoSectionContainer>
			<ContentLeft 
				padding={props.contentLeftPadding} 
				contentLeftMaxWidth={props.contentLeftMaxWidth} 
				contentLeftMinWidth={props.contentLeftMinWidth} 
				contentLeftFlex={props.contentLeftFlex}>
				<StickyTitle isNoTitle={props.isNoTitle}  padding={props.contentLeftPadding} sticky={props.sticky} titlePadding={props.titlePadding}>
					<h1>{props.title}</h1>
					{props.contentLeft && props.contentLeft}
				</StickyTitle>
			</ContentLeft>
			<ContentRight threeColumnLayout={props.threeColumnLayout} border={props.border} padding={props.contentRightPadding}>
				{props.children}
			</ContentRight>
		</StickyInfoSectionContainer>
	)
}

export default StickyInfoSection