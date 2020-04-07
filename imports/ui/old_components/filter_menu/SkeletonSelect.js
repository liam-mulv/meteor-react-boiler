import React from 'react'

import {
	FilterButtonWrapper,
	FilterButton,
	FilterSelectWrapper, 
	FlexOverlayRow,
} from './FilterMenu.sc'

import {SkeletonPulseTwo, SkeletonText, SkeletonSpan} from '../../common/Skeleton.sc'


function SkeletonSelect(props) {
	return (
		<FilterButtonWrapper>
			<FilterSelectWrapper position="left">
				<h3><SkeletonText height="18px" width="20%" float="none" margin="0px 0px -2px 0px"/></h3>
				{props.items.map((item, index) => {
					return (
						<FlexOverlayRow>
							<SkeletonSpan checkbox={props.isCheckBox}>
								<SkeletonPulseTwo/>
							</SkeletonSpan>
							<div>
								<div><SkeletonText height="16px" width="40%" float="none" margin="0px 0px -2px 0px"/></div>
							</div>
						</FlexOverlayRow>
					)
				})}
			</FilterSelectWrapper>
		</FilterButtonWrapper>
	)
}

export default SkeletonSelect