import React from 'react'

// Styled Compnents
import {NoResultsWrapper} from './NoResults.sc'

function NoResults(props) {
	return (
		<NoResultsWrapper absolutePosition={props.absolutePosition} svgMargin={props.svgMargin} minHeight={props.minHeight} iconSize={props.iconSize} fontSize={props.fontSize}>
			<div>
				{props.icon}	
				<p>{props.message}</p>
			</div>
		</NoResultsWrapper>
	)
}

export default NoResults