import styled from 'styled-components'

export const FeatureCardWrapper = styled.div`
	display: flex !important;
    // max-width: 50% !important;
    // min-width: 50% !important;
    min-height: 220px !important;
    padding: 8px 16px 8px 0px !important;
`

export const FeatureCardContainer = styled.div`
	display: flex !important;
    flex-direction: column !important;
    // width: 100% !important;
    white-space: pre-line !important;
    border: 1px solid rgba(0, 0, 0, 0.1)!important;
    border-radius: 4px !important;
    padding: 40px 28px !important;
`

export const CardIcon = styled.div`
	svg {
		width: ${props => props.iconWidth ? props.iconWidth : '30px'};
	    height: 30px;
	    fill: #000;
	    background-color: #eee;
	    padding: 12px;
	    border-radius: 4px;
	}
`

export const CardTitle = styled.div`
	font-size: 1.2rem;
	margin: 15px 0px 10px;
	font-weight: 800;
`

export const CardText = styled.p`
	font-size: 1.1rem!important;
	margin: 0px!important;
`

