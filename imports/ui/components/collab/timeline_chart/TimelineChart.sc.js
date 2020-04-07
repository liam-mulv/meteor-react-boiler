import styled from 'styled-components'


export const TimelineHeader = styled.div`
	display:flex;
	justify-content: space-between;
	align-items: center;
`

export const Legend = styled.div`
	display: flex;
    z-index: 1;
    margin-top: -10px;
    padding: 0px 30px;
    position: relative;
`

export const LegendItem = styled.div`
	margin-left: 16px;
	display: flex;
	align-items: center;
	opacity: ${props => props.isActive ? 1 : 0.5};
    padding: 2px 8px;

	:hover {
	    cursor: pointer;
	    background-color: #f3f3f5;
	    border-radius: 4px;
	}
`
export const BarIndicator = styled.div`
	margin-right: 8px;
	width: 11px;
	height: 11px;
	border-radius: 50%;
	background-color: ${props => props.color && props.color};
	margin-top: -2px;
`

export const TimelineChartWrapper = styled.div`
	padding: 0px 0px 0px 20px;
	background-color: #fff;
`

export const TimelineChartContainer = styled.div`
    height: 275px;
    position: relative;

    img {
    	width: 10px;
    }

    .recharts-wrapper .recharts-cartesian-grid-horizontal line {
	      stroke-opacity: 0;
	}

	.recharts-wrapper .recharts-cartesian-grid-vertical line  {
	      stroke-opacity: 0;
	}

	line.recharts-cartesian-axis-tick-line {
	    display: none;
	}

	line.recharts-cartesian-axis-line {
	    opacity: 0;
	}
	.recharts-tooltip-wrapper .recharts-default-tooltip {
		background-color: rgba(0,0,0,0.9)!important;
		border: 0px!important;
		border-radius: 4px;
	}

	.recharts-legend-wrapper {
		padding-right: 35px!important;
	    bottom: 20px!important;
	}

	.legend-item {
		margin-right: 16px;
	    opacity: 1;
	    padding: 2px 8px;
	    font-size: 14px;

	    svg {
	    	margin-right: 8px;
	    }
	}
`

export const ToolTipContent = styled.div`
	padding: 8px;
	color: #fff;
	background-color: #000!important;
	border-radius: 4px;
	width: 150px;

	span {
		opacity: 0.8;
		margin-bottom: 10px!important;
	}

	P {
		margin: 0px;
		margin-top: 5px!important;
		opacity: 1;
		display: inline-flex;
		align-items: center;
	}

	b {
		margin-right: 5px;
	}
`

