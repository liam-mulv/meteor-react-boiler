import React, { useState } from 'react'

import { Link, useHistory } from 'react-router-dom'

import {StyledTabs, StyledTab} from './HorizontalTabs.sc'

function TabsComponent(props) {

	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
	    setValue(newValue);
	}
  	let history = useHistory()

  	const changeRoute = (path) => {
  		history.push(path)
  	}

	return (
		<StyledTabs 
			value={value} 
			onChange={handleChange}
 			variant="scrollable"
          	scrollButtons="auto"
			>
			{props.tabs.map((tab, index) => {
				return (
          				<StyledTab onClick={() => changeRoute(tab.path)} label={tab.label} disableRipple />
          			// </Link>
				)
			})}
        </StyledTabs>
	)
}

export default TabsComponent
