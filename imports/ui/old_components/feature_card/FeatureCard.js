import React from 'react'

import {FeatureCardWrapper, FeatureCardContainer, CardTitle, CardText, CardIcon} from './FeatureCard.sc'

function FeatureCard(props) {
	return (
		<FeatureCardWrapper>
			<FeatureCardContainer>
				<CardIcon iconWidth={props.iconWidth}>{props.icon}</CardIcon>
				<CardTitle>{props.tite}</CardTitle>
				<CardText>{props.text}</CardText>
			</FeatureCardContainer>
		</FeatureCardWrapper>
	)
}

export default FeatureCard