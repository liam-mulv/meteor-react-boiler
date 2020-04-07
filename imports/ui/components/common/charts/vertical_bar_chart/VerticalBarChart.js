import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { renderToStaticMarkup } from 'react-dom/server'

// NPM
import ReactTooltip from 'react-tooltip'

// Styled Components
import {
	ChartWrapper, 
	ChartContainer, 
	ChartTextContainer, 
	ChartBar, 
	ChartProgress, 
	MultiBarWrapper,
	ToolTipContent,
	BarIndicator,
	Legend
} from './VerticalBarChart.sc'


function VerticalBarChart(props) { 
	return (
		<ChartWrapper data-html={true} data-delay-show='0' data-tip={renderToStaticMarkup(<ToolTipContent>
				<b>{props.bar.label + ', ' + props.bar.date}</b><br/>
				{props.firstBarIsVisible && <div><BarIndicator color='#000'/>{props.bar.count + ' posts'}<br/></div>}
				{props.secondBarIsVisible && <div><BarIndicator color='#4fe0d5'/>{props.bar.engagement.toFixed(2) + '% Eng.'}</div>}
			</ToolTipContent>
			)}>
			<ChartContainer>
				<MultiBarWrapper>
					<ChartBar isVisible={props.firstBarIsVisible}>
						<div></div>
						<ChartProgress progress={props.bar.countBarPercent} color={props.color}><ReactTooltip effect="solid" /></ChartProgress>
					</ChartBar>
					<ChartBar isVisible={props.secondBarIsVisible}>
						<div></div>
						<ChartProgress progress={props.bar.engBarPercent} color={props.color}><ReactTooltip effect="solid" /></ChartProgress>
					</ChartBar>
				</MultiBarWrapper>
				<ChartTextContainer bottom >{props.bar.label.slice(0,3)}</ChartTextContainer>
			</ChartContainer>
		</ChartWrapper>
	)
}

export default VerticalBarChart