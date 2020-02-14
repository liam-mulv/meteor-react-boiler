import React from 'react'

// NPM
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


import {QuickNavShadow,QuickNavWrapper, QuickNavContainer, QuickNavItem, ActiveMarker} from './QuickNav.sc'

function QuickNav(props) {
	return (
		<React.Fragment>
			<QuickNavShadow/>
			<QuickNavWrapper marginBottom={props.marginBottom}>
				<QuickNavContainer>
					{props.navigation.map((item, index) => {
						return (
							<React.Fragment>
								<Link activeClass="active" className={item.id} to={item.id} spy={true} smooth={true} offset={-130} duration={() => props.getScrollDuration(item.ref)}>
									<QuickNavItem id={"quick-nav-item-"+index}>
										{item.name}
										<ActiveMarker className="active-marker"/>
									</QuickNavItem>
								</Link>
								{index < props.navigation.length - 1 && '•'} 
							</React.Fragment>
						)
					})}
				</QuickNavContainer>
			</QuickNavWrapper>
		</React.Fragment>
	)
}

export default QuickNav

// onClick={() => props.scrollToRef(item.ref)}