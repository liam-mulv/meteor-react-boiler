import React from 'react'

// NPM
import _ from 'lodash'

// Styled Components
import {SkeletonText} from '../../common/Skeleton.sc'
import {QuickNavShadow,QuickNavWrapper, QuickNavContainer, QuickNavItem, ActiveMarker} from './QuickNav.sc'

function SkeletonQuickNav(props) {
	console.log(props)
	return (
		<React.Fragment>
			<QuickNavWrapper stickyPosition={props.props.stickyPosition} marginBottom={props.props.marginBottom} notSticky={props.props.notSticky}>
				<QuickNavContainer topBorder={props.props.topBorder} padding={props.props.padding}>
					{_.times(props.length, (i) =>{
						return (
							<React.Fragment>
									<QuickNavItem id={"quick-nav-item-"+i}>
										<SkeletonText width="100px" float="none"/>
									</QuickNavItem>
							</React.Fragment>
						)
					})}
				</QuickNavContainer>
			</QuickNavWrapper>
		</React.Fragment>
	)
}

export default SkeletonQuickNav