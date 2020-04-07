import styled from 'styled-components'

export const ChartCollectionWrapper = styled.div`
	margin-top: 35px;

	h4 {
	    margin: 0px 0px 10px;
    	font-weight: 600;
    	font-size: 1.2rem;	
	}

`

export const ChartWrapper = styled.div`
	padding: 10px 0px;
`

export const ChartContainer = styled.div`
	width: 100%;
`

export const ChartBar = styled.div`
	background-color: #f3f3f5;
	border-radius: 20px;
	overflow: hidden;
	height: ${props => props.height && props.height+'px'};
`

export const ChartProgress = styled.div`
	background-color: ${props => props.color ? props.color : '#55a5ae'};
	width: ${props => props.progress && props.progress+'%'};
	height: 100%;
	border-radius: 20px;
`

export const ChartTextContainer = styled.div`
	display:flex;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 16px;
    padding-bottom: 5px;
`