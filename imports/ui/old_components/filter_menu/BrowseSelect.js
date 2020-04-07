import React, {useEffect} from 'react'

import {
	FilterButtonWrapper,
	FilterButton,
	FilterSelectWrapper, 
	FlexOverlayRow,
} from './FilterMenu.sc'



function BrowseSelect (props){

  	useEffect(() => {
  		console.log('Added Event Listener Mouse Down')
    	document.addEventListener('mousedown', this.handleClickOutside);
  		return () => {
  			console.log('Removed Event Listener Mouse Down')
    		document.removeEventListener('mousedown', this.handleClickOutside);
  		}
  	}, [])

	return (
		<FilterButtonWrapper>

				<FilterSelectWrapper position="left">
					<h3>Browse</h3>
					<FlexOverlayRow>
						<input type="radio" name="filter-browse" onClick={() => props.toggleDataSet()} checked={props.type === 'collabs'}/>
						<span className="radio" ></span>
						<div>
							<div>Collabs</div>
						</div>
					</FlexOverlayRow>
					<FlexOverlayRow>
						<input type="radio" name="filter-browse" onClick={() => props.toggleDataSet()} checked={props.type === 'influencers'}/> 
					  	<span className="radio" ></span>
						<div>
							<div>Influencers</div>
						</div>
					</FlexOverlayRow>
				</FilterSelectWrapper>

		</FilterButtonWrapper>
	)
}

export default BrowseSelect