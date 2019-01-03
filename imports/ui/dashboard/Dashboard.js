import React from 'react'

// Component
import Navbar from './navbar/Navbar'

// Styled Components
import { DashboardContainer } from './Dashboard.sc'

export default () => {
	return (
		<React.Fragment>
			<Navbar title="Dashboard"/>
			<DashboardContainer>
				Dashboard page content...
			</DashboardContainer>
		</React.Fragment>
	)
}