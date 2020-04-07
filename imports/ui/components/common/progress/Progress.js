import React from 'react'

import {ProgressWrapper, ProgressContainer, ProgressBar} from './Progress.sc'

function Progress(props) {
	return (
		<ProgressWrapper>
			<ProgressContainer borderRadius={props.borderRadius} height={props.height}>
				<ProgressBar progress={props.progress}/>
			</ProgressContainer>
		</ProgressWrapper>
	)
}

export default Progress