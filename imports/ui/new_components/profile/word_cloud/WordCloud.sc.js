import styled from 'styled-components'

export const WordCloudComponents = styled.div`
	margin-bottom: 35px;
	padding-bottom: 35px;
	border-bottom: 1px solid #eee;

	h1 {
		font-size: 1.5rem;
		font-weight: 600;
	}

`

export const Tag = styled.span`
	opacity: ${props => props.opacity && props.opacity / 1.5};
	font-size: ${props => props.size && props.size+'px'};
    margin: 0px 3px;
    vertical-align: middle;
    display: inline-block;
    padding: 10px;
    font-weight: ${props => props.weight ? props.weight : '600'};
    color: #000;
`