import React from 'react'

// NPM
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import SkeletonQuickNav from './SkeletonQuickNav'

// Styled Components
import {QuickNavShadow,QuickNavWrapper, QuickNavContainer, QuickNavItem, ActiveMarker} from './QuickNav.sc'

function QuickNav(props) {
	return (
		<React.Fragment>
		{!props.isLoading ?
			<QuickNavWrapper stickyPosition={props.stickyPosition} marginBottom={props.marginBottom} notSticky={props.notSticky}>
				<QuickNavContainer topBorder={props.topBorder} padding={props.padding}>
					{props.navigation.map((item, index) => {
						return (
							<React.Fragment>
								<Link activeClass="active" className={item.id} to={item.id} spy={true} smooth={true} offset={-150} duration={() => props.getScrollDuration(item.ref)}>
									<QuickNavItem id={"quick-nav-item-"+index}>
										{item.name}
										<ActiveMarker className="active-marker"/>
									</QuickNavItem>
								</Link>
							</React.Fragment>
						)
					})}
				</QuickNavContainer>
			</QuickNavWrapper>
			: 
			<SkeletonQuickNav props={props} length={5}/>
		}
		</React.Fragment>
	)
}

export default QuickNav

// onClick={() => props.scrollToRef(item.ref)}