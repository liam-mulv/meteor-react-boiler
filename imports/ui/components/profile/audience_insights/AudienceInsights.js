import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//NPM
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


// Styled Components
import {ProfileComponentWrapper} from '../ProfileComponentWrapper.sc'
import {TwoPannelFlexInnerPadding} from '../../../layout/FlexLayouts.sc'

// Components
import VerticalBarChartComponent from '../../common/charts/vertical_bar_chart/VerticalBarChartComponent'
import HorizontalTabs from '../../common/tabs/horizontal_tabs/HorizontalTabs'

function AudienceInsights(props) {
	return (
		<ProfileComponentWrapper>
			<h1>Posting Habits</h1>
			<TwoPannelFlexInnerPadding>
				<div>
					<VerticalBarChartComponent title="" data={props.data} user={props.user} color="#000"/>
				</div>
			</TwoPannelFlexInnerPadding>
		</ProfileComponentWrapper>
	)
}

export default AudienceInsights