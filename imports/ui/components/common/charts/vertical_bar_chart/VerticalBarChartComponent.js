import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'

import {ChartCollectionWrapper, VerticalBarsWrapper, ChartFooter, Legend, LegendItem, BarIndicator} from './VerticalBarChart.sc'
import VerticalBarChart from './VerticalBarChart'


let postingHabits = [
	{label: '', count: 0, countBarPercent: '', engagements: [], engagement:0, engBarPercent: ''},
	{label: '', count: 0, countBarPercent: '', engagements: [], engagement:0, engBarPercent: '' },
	{label: '', count: 0, countBarPercent: '', engagements: [], engagement:0, engBarPercent: '' },
	{label: '', count: 0, countBarPercent: '', engagements: [], engagement:0, engBarPercent: '' },
	{label: '', count: 0, countBarPercent: '', engagements: [], engagement:0, engBarPercent: '' },
	{label: '', count: 0, countBarPercent: '', engagements: [], engagement:0, engBarPercent: '' },
	{label: '', count: 0, countBarPercent: '', engagements: [], engagement:0, engBarPercent: '' },
	{label: '', count: 0, countBarPercent: '', engagements: [], engagement:0, engBarPercent: '' },
	{label: '', count: 0, countBarPercent: '', engagements: [], engagement:0, engBarPercent: '' },
	{label: '', count: 0, countBarPercent: '', engagements: [], engagement:0, engBarPercent: '' },
	{label: '', count: 0, countBarPercent: '', engagements: [], engagement:0, engBarPercent: '' },
	{label: '', count: 0, countBarPercent: '', engagements: [], engagement:0, engBarPercent: '' },
	{label: '', count: 0, countBarPercent: '', engagements: [], engagement:0, engBarPercent: '' },
	{label: '', count: 0, countBarPercent: '', engagements: [], engagement:0, engBarPercent: '' },
]

function VerticalBarChartComponent(props) {

	// Set chart data state from props
	const [chartData, setChartData] = useState(postingHabits)
	useEffect(() => {
		if(typeof props.data !== 'undefined') {
			setChartData(props.data)
		}
	}, [props.data])

	// Manage the active chart data
	const [secondBarIsVisible, setSecondBarIsVisible] = useState(true)
	const [firstBarIsVisible, setFirstBarIsVisible] = useState(true)
	function toggleBar (index) {
		if(index === 1) {
			if(firstBarIsVisible === true && secondBarIsVisible === true) {
				setFirstBarIsVisible(false)
			} else if (firstBarIsVisible === true && secondBarIsVisible === false) {
				setSecondBarIsVisible(true)
			} else{
				setFirstBarIsVisible(true)
			}
		} else {
			if(secondBarIsVisible === true && firstBarIsVisible === true) {
				setSecondBarIsVisible(false)
			} else if (secondBarIsVisible === true && firstBarIsVisible === false) {
				setFirstBarIsVisible(true)
			} else{
				setSecondBarIsVisible(true)
			}
		}
	}

	return (
		<ChartCollectionWrapper>
			<VerticalBarsWrapper>
				{chartData.map((bar, index) => {
					return (
						<VerticalBarChart 
							firstBarIsVisible={firstBarIsVisible} 
							secondBarIsVisible={secondBarIsVisible} 
							bar={bar} 
							height={17.5} 
							color={props.color}
						/>
					)
				})}
			</VerticalBarsWrapper>
			<ChartFooter>
				<Legend>
					<LegendItem isActive={firstBarIsVisible} onClick={() => toggleBar(1)}><BarIndicator color='#000'/>Post count</LegendItem>
					<LegendItem isActive={secondBarIsVisible} onClick={() => toggleBar(2)}><BarIndicator color='#4fe0d5'/>Engagement</LegendItem>
				</Legend>
				<div><b>{props.user.post_frequency} posts</b> per week</div>
			</ChartFooter>

		</ChartCollectionWrapper>
	)
}

export default VerticalBarChartComponent