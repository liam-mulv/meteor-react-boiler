import styled from 'styled-components'

export const OverviewWrapper = styled.div`
	padding: 0px 15px 20px 25px;
` 

export const OverviewContainer = styled.div`
	display: flex;
	// border-bottom: 1px solid #eee;
`

export const OverviewItemWrapper = styled.div`
	padding: 16px;
	margin: 10px;
	flex: 1;
	background-color:#f7f7f7;
	border-radius: 4px;
`

export const OverviewItem = styled.div`
	text-align: left;
	padding: 8px 0px;
    height: calc(100% - 48px);
`

export const SmallTitle = styled.div`
	text-transform: ${props => props.lowercase ? 'lowercase' : 'uppercase'};
    opacity: 0.5;
    font-size: 0.85rem;

`

export const StatCount = styled.div`
    margin: 12px 0px;
    font-size: 1.8rem;
    font-weight: 700!important;
    opacity: 1;
`