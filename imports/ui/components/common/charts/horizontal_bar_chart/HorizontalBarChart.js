import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {ChartWrapper, ChartContainer, ChartTextContainer, ChartBar, ChartProgress} from './HorizontalBarChart.sc'

function HorizontalBarChart(props) {
	return (
		<ChartWrapper>
			<ChartContainer>
				<ChartTextContainer><span>{props.name}</span> <span>{props.count}</span></ChartTextContainer>
				<ChartBar height={props.height}>
					<ChartProgress progress={props.progress} color={props.color}/>
				</ChartBar>
			</ChartContainer>
		</ChartWrapper>
	)
}

export default HorizontalBarChart