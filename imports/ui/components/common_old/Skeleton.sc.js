import styled from 'styled-components'

const SkeletonPulse = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background-color: #F0F0F0;
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-color: #F0F0F0;
    }
    50% {
      background-color: #FBFBFB;
    }
    100% {
      background-color: #F0F0F0;
    }
  }
`;

export const SkeletonPulseTwo = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background-color: #F0F0F0;
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-color: #F0F0F0;
    }
    50% {
      background-color: #FBFBFB;
    }
    100% {
      background-color: #F0F0F0;
    }
  }
`;

export const SkeletonText = styled(SkeletonPulse)`
    display: inline-block;
    height: 16px;
    margin: ${props => props.margin ? props.margin : '0px 0px'};
    width: ${props => props.width ? props.width : '100%'};
    float: ${props => props.float !== 'none' ? 'left' : 'none'};
    clear: both;
    height: ${props => props.height && props.height};
    border-radius: ${props => props.borderRadius ? props.borderRadius : '0px'};

`

export const SkeletonSpan = styled.span`
    position: absolute;
    top: 8px;
    left: 0px;
    height: 21px;
    width: 21px;
    background-color: #eee;
    overflow: hidden;
    border-radius: ${props => props.checkbox === true ? '4px' : '50%'};
`