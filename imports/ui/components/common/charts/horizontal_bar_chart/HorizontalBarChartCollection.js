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
					<HorizontalBarChart name={chart.value} count={chart.count} progress={chart.percent} height={15} color="#222"/>
				)
			})}
		</ChartCollectionWrapper>
	)
}

export default HorizontalBarChartCollection