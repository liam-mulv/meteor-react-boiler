import React from 'react'

// NPM
import _ from 'lodash'

// Styled Component
import {SkeletonText} from '../../common/Skeleton.sc'
import {ParagraphWrapper} from './SkeletonParagraph.sc'


function SkeletonParagraph(props) {
	return (
		<ParagraphWrapper>
			{_.times(props.numberOfLines, (i) =>{
				return (
					<SkeletonText key={i} width={i !== props.numberOfLines -1 ? "100%" : "55%"} height={props.lineHeight+'px'} margin="0px 0px 12px"/>
				)
			})}
        </ParagraphWrapper>
	)
}

export default SkeletonParagraph