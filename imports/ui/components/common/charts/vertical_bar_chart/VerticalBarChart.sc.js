import styled from 'styled-components'

export const ChartCollectionWrapper = styled.div`
	padding: 0px;
	h4 {
	    margin: 0px 0px 10px;
    	font-weight: 600;
    	font-size: 1.2rem;	
	}

`


export const VerticalBarsWrapper = styled.div`
	display: flex;
	height: 150px;
	margin-bottom: 35px;
	padding: 30px 0px 0px;
    justify-content: space-between;

`



export const ChartWrapper = styled.div`
	padding: 0px 7.5px;
	height: 100%;
	max-width: 35px;
	width: 100%;
	text-align: center;
`

export const ChartContainer = styled.div`
	width: 100%;
	height: 100%;

`

export const MultiBarWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    height: 100%;

    :hover {
    	cursor: pointer;
    }
	:hover > div {
		background-color:#e6e6ea;
	}

    > div:first-child {
    	flex:1.5;
    	margin: 0px 1.5px;
    }

    > div:last-child {
    	flex: 1;
    	margin: 0px 1.5px;
    }

    > div:last-child > div {
    	background-color: #7fe5dd;
    }
`

export const ChartBar = styled.div`
	background-color: #f3f3f5;
	border-radius: 12px;
	overflow: hidden;
	height: 100%;
	display: flex;
	flex-direction: column;
    justify-content: space-between;
    flex: ${props => props.isVisible ? 1 : 0}!important;
    transition: 0.3s;

`

export const ToolTipContent = styled.div`
	text-align: left;

	div {
		align-items: center;
		display: inline-flex;
	}

	div:last-child {
		margin-left: 5px;
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
export const ChartFooter = styled.div`
	display: flex;
    justify-content: space-between;
	padding: 16px 8px 0px 0px;

	> div:last-child {
		font-size: 1rem;
	}
`

export const Legend = styled.div`
	display: flex;
`

export const LegendItem = styled.div`
	margin-right: 16px;
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

export const ChartProgress = styled.div`
	background-color: ${props => props.color ? props.color : '#55a5ae'};
	height: ${props => props.progress ? props.progress+'%' : '0%'};
	width: 100%;
	border-radius: 12px;
	transition: 0.35s;
`

export const ChartTextContainer = styled.div`
    font-size: ${props => props.bottom ? '0.75rem' : '16px'};
    margin-top: ${props => props.bottom && '10px'};
`