import React, { useState } from 'react'


import {StyledTabs, StyledTab} from './HorizontalTabs.sc'

function TabsComponent(props) {

	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
	    setValue(newValue);
	}

	return (
		<StyledTabs 
			value={value} 
			onChange={handleChange}
 			variant="scrollable"
          	scrollButtons="auto"
			>
          <StyledTab label="Location, Age & Gender" disableRipple />
          <StyledTab label="Languages" disableRipple />
          <StyledTab label="Interests & Brands" disableRipple />
        </StyledTabs>
	)
}

export default TabsComponent
