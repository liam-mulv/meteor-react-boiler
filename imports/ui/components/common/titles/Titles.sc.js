import styled from 'styled-components'

export const ComponentTitle = styled.h2`
	font-size: 1.5rem;
    font-weight: 600;
    color: #222;
    margin: 16px 0px;
    padding: ${props => props.padding && props.padding+'px'};
`