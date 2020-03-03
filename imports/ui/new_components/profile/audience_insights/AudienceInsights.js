import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//NPM
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


// Styled Components
import {ProfileComponentWrapper} from '../ProfileComponentWrapper.sc'
import {TwoPannelFlexInnerPadding} from '../../../layout/FlexLayouts.sc'

// Components
import HorizontalBarChartCollection from '../../common/charts/horizontal_bar_chart/HorizontalBarChartCollection'
import HorizontalTabs from '../../common/tabs/horizontal_tabs/HorizontalTabs'

const ages = [
	{progress: 45, name: "12-18"},
	{progress: 45, name: "18-20"},
	{progress: 45, name: "20-25"},
	{progress: 16, name: "25-30"},
	{progress: 25, name: "35-40"},
	{progress: 8, name: "40-50"},
	{progress: 8, name: "50-60"},
	{progress: 8, name: "60-100"},
]

const countries = [
	{progress: 25, name: "Australia"},
	{progress: 16, name: "Asia"},
	{progress: 8, name: "United Kingdom"},
	{progress: 45, name: "Unites States"},
]

const gender = [
	{progress: 25, name: "Male"},
	{progress: 16, name: "Female"},
	{progress: 8, name: "Other"},
]


function AudienceInsights(props) {

	return (
		<ProfileComponentWrapper>
			<h1>Audience Insights</h1>
			<HorizontalTabs/>
			<TwoPannelFlexInnerPadding>
				<div>
					<HorizontalBarChartCollection title="Countries" charts={countries} color="#f4c4c4"/>
					<HorizontalBarChartCollection title="Gender" charts={gender} color="#000"/>
				</div>
				<HorizontalBarChartCollection title="Age Range" charts={ages} color="#85ccde"/>
			</TwoPannelFlexInnerPadding>
		</ProfileComponentWrapper>
	)
}

export default AudienceInsights