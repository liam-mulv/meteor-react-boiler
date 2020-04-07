import styled from 'styled-components'

export const ProgressWrapper = styled.div``

export const ProgressContainer = styled.div`
  background-color: #f2f2f2;
  height: ${props => props.height ? props.height + 'px' : '12.5px'};
  width: 100%;
  border-radius: ${props => props.borderRadius ? props.borderRadius : '0px'};
  overflow: hidden;
`
 
export const ProgressBar = styled.div`
  background-color: #222;
  height: 100%;
  width: ${props => props.progress ? props.progress+'%': 0};
  transition: 0.35s;
  border-radius: 0px 25px 25px 0px;
`