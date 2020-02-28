import React from 'react'

// NPM
import _ from 'lodash'


// Styled Components
import {SkeletonListItemWrapper, SkeletonItemIcon} from './SkeletonListItem.sc'
import {SkeletonText} from '../../common/Skeleton.sc'

function SkeletonListItem (props) {

	return (
		<React.Fragment>
			{_.times(props.length, (i) =>{
				return (
					<li><SkeletonItemIcon/><SkeletonText width="25%" float="none" margin="0px"/></li>
				)
			})}
		</React.Fragment>
	)
}

export default SkeletonListItem