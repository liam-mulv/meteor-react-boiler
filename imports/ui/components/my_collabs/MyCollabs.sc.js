import styled from 'styled-components'

export const MiddleContentWrapper = styled.div`
    flex: 2 0 0%;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
`

export const RightContentWrapper = styled.div`
    border-left: 1px solid rgba(0, 0, 0, .10);
    flex: 0 2 33.33%;
    max-width: 420px;
    min-width: 200px;
`

export const LeftContentWrapper = styled.div`
	max-width: ${props => props.isCollapsed && '90px'};
`