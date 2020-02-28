import styled from 'styled-components'
import {SkeletonPulseTwo} from '../../common/Skeleton.sc'

export const SkeletonPostWrapper = styled.div`
    display: inline-block !important;
    vertical-align: top !important;
    white-space: normal !important;
    position: relative;

    ${props => props.simple ?
        `@media (max-width: 2400px) { 
            flex: 0 0 17%;    
        }
        @media (max-width: 1880px) { 
            flex: 0 0 17%;    
        }

        @media (max-width: 1440px) { 
            flex: 0 0 17%;    
        }

        @media (max-width: 1128px) { 
            flex: 0 0 17%;    
        }

        @media (max-width: 744px) { 
            flex: 0 0 17%;    
        }`
    : 
        `@media (max-width: 2400px) { 
            flex: 0 0 17%;    
        }
        @media (max-width: 1880px) { 
            flex: 0 0 17%;    
        }

        @media (max-width: 1440px) { 
            flex: 0 0 17%;    
        }

        @media (max-width: 1128px) { 
            flex: 0 0 17%;    
        }

        @media (max-width: 744px) { 
            flex: 0 0 17%;    
        }`
    };
`

export const SkeletonPostTileInnerContainer = styled.div`
    padding: 8px;
`

export const SkeletonPostTile = styled.div`
    // overflow: hidden;
    // position: relative;
    // border-radius: 15px;
    // height: 100%;

`

export const SkeletonPostImage = styled(SkeletonPulseTwo)`
    width: 100%;
    height: 100%;
    padding-bottom: 100%;
    border-radius: 15px;
`

export const SkeletonPostIcons = styled(SkeletonPulseTwo)`
	display: block;
    width: 110px;
    margin: 6px auto 8px;
    height: 20px;
`


