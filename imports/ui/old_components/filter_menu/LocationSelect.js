import React from 'react'

import {
	FilterButtonWrapper,
	FilterButton,
	FilterSelectWrapper, 
	FlexOverlayRow,
} from './FilterMenu.sc'

import GlobeIcon from '../../icons/globe-america'
import MapMarkerIcon from '../../icons/map-marker'

function LocationSelect (props) {
	return (
		<FilterButtonWrapper>
			<FilterSelectWrapper position="right">
				<h3>Location</h3>
				<FlexOverlayRow>
					<input type="radio" name="filter" value="" onClick={() => props.toggleLocation()} checked={props.location === 'near me'}/>
					<span className="radio" ></span>
					<div>
						<div>Near Me</div>
					</div>
				</FlexOverlayRow>
				<FlexOverlayRow>
					<input type="radio" name="filter" onClick={() => props.toggleLocation()} checked={props.location === 'global'}/> 
				  	<span className="radio" ></span>
					<div>
						<div>Global</div>
					</div>
				</FlexOverlayRow>
			</FilterSelectWrapper>
		</FilterButtonWrapper>
	)
}

export default LocationSelect