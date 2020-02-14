import React from 'react'

// Components
import Tags from '../tags/Tags'

// NPM
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// Styled Components
import { 
	InfoDescription, 
	Tag, 
	CollabInfoLeft,
	CollabInfoRight,
	ButtonContainer,
	BudgetWrapper,
	BudgetContainer,
	BudgetProgress,
	BlackShine,
	LocationLink
} from './CollabHeader.sc'
import {Spacer, PageTitleWrapper} from '../../common/Common.sc'

import MapMarkerIcon from '../../icons/map-marker'

function CollabHeader(props) {
	return (
		<div>
			{!props.isLoading ?
					<PageTitleWrapper flex={true} padding="0px">
						<CollabInfoLeft>
							<h4>{props.type}</h4>
							<h1>{props.title}</h1>
							<Tags tags={props.tags}/>
							{/*<BudgetWrapper>
								Budget
								<BudgetContainer>
									<BudgetProgress/>
								</BudgetContainer>
								<span>65%</span>
								<h4>*Collab expires when budget has been spent</h4>
							</BudgetWrapper>*/}
						</CollabInfoLeft>
						<CollabInfoRight>
							<ButtonContainer>
								<h1>from $299 / <small>collab</small></h1>
								<button>{props.type === 'COLLAB' ? 'Apply Now' : 'Invite'}<BlackShine className="button-shine"/></button>
							</ButtonContainer>
							<Link className="map-section" to="map-section" spy={true} smooth={true} offset={-130} duration={() => props.getScrollDuration(props.mapRef)}>
								<LocationLink>Collingwood, VIC, Australia<MapMarkerIcon/></LocationLink>
							</Link>
						</CollabInfoRight>
					</PageTitleWrapper>
				:
				<p>Loading...</p>
			}
		</div>
	)
}

export default CollabHeader

