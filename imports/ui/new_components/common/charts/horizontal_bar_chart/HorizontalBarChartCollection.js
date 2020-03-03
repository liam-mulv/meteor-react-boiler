import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {ChartCollectionWrapper} from './HorizontalBarChart.sc'
import HorizontalBarChart from './HorizontalBarChart'

function HorizontalBarChartCollection(props) {
	return (
		<ChartCollectionWrapper>
			<h4>{props.title}</h4>
			{props.charts.map((chart, index) => {
				return (
					<HorizontalBarChart name={chart.name} progress={chart.progress} height={17.5} color={props.color}/>
				)
			})}
		</ChartCollectionWrapper>
	)
}

export default HorizontalBarChartCollection