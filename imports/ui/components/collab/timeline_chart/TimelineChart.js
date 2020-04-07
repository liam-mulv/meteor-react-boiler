import React, {useState, useEffect, useRef} from 'react'

// NPM
import HRNumbers from 'human-readable-numbers'
import {
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Surface,
  Symbols
} from 'recharts'
import _ from "lodash"

// Styled Components
import {
	TimelineChartWrapper, 
	TimelineChartContainer, 
	ToolTipContent,
	Legend, 
	LegendItem, 
	BarIndicator,
	TimelineHeader
} from './TimelineChart.sc'
import {ComponentTitle} from '../../common/titles/Titles.sc'

// Common Component
import NoResults from '../../common/noresults/NoResults'
import ChartAreaIcon from '../../../icons/duotone/chart-area'

// Data
import {data} from './Data'


function TimelineChart(props) {
// followers: "rgb(127, 147, 229)",
	const [isHovered, setIsHovered] = useState(false)
	const formatter = (value) => `${HRNumbers.toHumanString(value)}`;
	const [followerChartIsVisible, setFollowerChartIsVisible] = useState(true)
	const [dataSets, setDataSets] = useState({followers: "#7fe5dd", engagement: "#fdb8d0", revenue: "#7fe5dd"})
	const [disabled, setDisabled] = useState([])

	mouseOver = (index) => {
		setIsHovered(index)
	}

	useEffect(() => {
		if(typeof props.timeseries.ts !== 'undefined' && props.timeseries.ts.length < 1) {
			setDisabled(['followers','engagement','revenue'])
		} else {
			setDisabled(['followers'])
		}
	}, [props.timeseries.ts])

	function CustomXAxisLabel (props) {

		// HANDLE SCROLL TO POST && SETTING aCTIVE POST STATE
		if(!props.isLoadingMedia && isHovered === props.payload.value && props.data[props.payload.index].image !== null) {
			let post = document.getElementById(`post-result-${props.payload.index}`)
			if(post) {
				post.scrollIntoView({behavior: "smooth"})
				props.setTimelinePostIsActive(props.payload.index)	
			}
		} else if (!props.isLoadingMedia && !isHovered) {
			props.setTimelinePostIsActive(null)
		}
		return (
		    <g transform={`translate(${props.x - 15.5},${props.y})`}>
			    <defs>
				    <rect id="rect"  x={0} y={0} fill="#fff" width="31px" height="31px" rx="4"/>
				    <clipPath id="clip">
				      <use xlinkHref="#rect"/>
				    </clipPath>
				</defs>
		  		<use xlinkHref="#rect" stroke-width="0.1" stroke="#fff"/>
		      	<image 
		      		onMouseEnter={() => mouseOver(props.payload.value)} 
		      		onMouseLeave={() => mouseOver(null)} 
		      		clip-path="url(#clip)" 
		      		x={0} y={0} 
		      		height="31px" 
		      		width="31px" 
		      		textAnchor="middle" 
		      		fill="#fff" 
		      		xlinkHref={props.data[props.payload.index].image} 
		      	/>
		      	{isHovered === props.payload.value && props.data[props.payload.index].image !== null &&
		      		<>
			      		<rect id="rect2"  x={0} y={0} width="2px" height="65px" rx="0 0 4 4"/>
			      		<text transform={`translate(${6},${50})`} style={{fontSize: '0.8rem'}}>sarahhashcroft</text>
			      		<text  x={6} y={65} style={{fontSize: '0.65rem', opacity: '0.6'}}>
		      				{props.payload.value}
		      			</text>
		      		</>
		      	}
		      	{props.data[props.payload.index].image === null &&
		      		<text  x={0} y={15} style={{fontSize: '0.75rem', opacity: '0.6'}}>
		      			{props.payload.value}
		      		</text>
		      	}
		    </g>
		)
	}

	const CustomTooltip = ({ active, payload, label }) => {
	  	if (active) {
		  	if(payload) {
			  	mouseOver(payload[0].payload.name)
			    return (
			      <ToolTipContent>
			        <span className="label"><b>Date:</b>{`${payload[0].payload.label}`}</span>
			        {payload.map((set, index) => {
			        	return (
			        		<p className="desc"><BarIndicator color={set.fill}/><b>{set.dataKey === 'revenue' && '$'}{HRNumbers.toHumanString(set.value)}</b> {set.dataKey}</p>
			        	)
			        })}
			      </ToolTipContent>
			    )
		  	}
	  	}
	  	mouseOver(null)
	  	return null
	}

	const handleClick = dataKey => {
	    if (_.includes(disabled, dataKey)) {
	      setDisabled(disabled.filter(obj => obj !== dataKey))
	    } else {
	    	setDisabled(disabled.concat(dataKey))
	    }
	}

  	return (
	    <TimelineChartWrapper>
	    	<TimelineHeader>
	    		<ComponentTitle padding="0 16">Timeline</ComponentTitle>
	    		<Legend>
			       {_.toPairs(dataSets).map(set => {
			          const active = _.includes(disabled, set[0]);
			          	return (
							<LegendItem isActive={!active} onClick={() => handleClick(set[0])}>
								<BarIndicator color={set[1]}/>{set[0]}
							</LegendItem>
		 				);
	        		})}
				</Legend>
	    	</TimelineHeader>
	    	<TimelineChartContainer>
	    		
	    		{disabled.length === 3 && <NoResults absolutePosition={true} svgMargin="-80px 0 10px 0" minHeight={200} iconSize={90} fontSize={1} icon={<ChartAreaIcon/>} message="No data to show yet"/>}

		    	<ResponsiveContainer width='100%' height="100%">
			      	<AreaChart
				        data={props.timeseries}
				        margin={{
				          top: 10, right: 30, left: 0, bottom: 60,
				        }}
				    >
				        <CartesianGrid strokeDasharray="3 3" />
				        <XAxis dataKey="name" interval={0} tick={<CustomXAxisLabel data={props.timeseries} isLoadingMedia={props.isLoadingMedia} setTimelinePostIsActive={props.setTimelinePostIsActive} />}/>
				        <YAxis tickFormatter={formatter} width={50}/>
				        <Tooltip
	            			labelStyle={{ color: "#fff" }}
	            			itemStyle={{ color: "#fff" }}
				         	content={<CustomTooltip/>} 
				        />

	            		{_.toPairs(dataSets)
		              		.filter(pair => !_.includes(disabled, pair[0]))
		              		.map((pair, index) => (
				        	<Area 
				        		isAnimationActive={false}
					        	fillOpacity="1" 
					        	type="monotone" 
					        	stackId={(index + 1).toString()} 
					        	key={pair[0]}
			                	dataKey={pair[0]}
			                	fill={pair[1]}
			                	stroke={pair[1]}
				        	/>
	              		))}
			      	</AreaChart>

			    </ResponsiveContainer>

		    </TimelineChartContainer>
	    </TimelineChartWrapper>
  	)
}

export default TimelineChart

