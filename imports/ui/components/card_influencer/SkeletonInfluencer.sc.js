import styled from 'styled-components'
import {SkeletonPulseTwo} from '../../common/Skeleton.sc'


export const SkeletonInfluencerWrapper = styled.div`
    overflow: hidden;
    position: relative;
    display: inline-block;
    position: relative;

    
    ${props => props.simple ?
        `@media (max-width: 2400px) { 
            flex: 0 0 10%;    
        }
        @media (max-width: 1880px) { 
            flex: 0 0 14.2%;    
        }

        @media (max-width: 1640px) { 
            flex: 0 0 16.5%;    
        }

        @media (max-width: 1128px) { 
            flex: 0 0 20%;    
        }

        @media (max-width: 744px) { 
            flex: 0 0 30%;    
        }`
    : 
        `@media (max-width: 2400px) { 
            flex: 0 0 10%;    
        }
        @media (max-width: 1880px) { 
            flex: 0 0 14.2%;    
        }

        @media (max-width: 1640px) { 
            flex: 0 0 16.5%;    
        }

        @media (max-width: 1128px) { 
            flex: 0 0 20%;    
        }

        @media (max-width: 744px) { 
            flex: 0 0 30%;    
        }`
    };
`

export const SkeletonInfluencerTile = styled.div`
    padding: 8px;
`

export const SkeletonInfluencerTileInnerContainer = styled.div`
    padding: 0px 0px 20px;
`

export const SkeeltonInfluencerImage = styled(SkeletonPulseTwo)`
    width: 100%;
    height: 100%;
    transition: 0.2s;
    overflow: hidden;
    width: 100px;
    height: 100px;
    border-radius: 50%!important;
    margin: 20px auto 10px;
    overflow: hidden;
    display:block;

`
export const SkeletonInfuencerName = styled(SkeletonPulseTwo)`
    width: 68%;
    height: 15px;
    display: block;
    margin: 20px auto 5px;

`

export const SkeletonInfuencerFollowers = styled(SkeletonPulseTwo)`
    width: 43%;
    height: 12px;
    display: block;
    margin: ${props => props.margin ? props.margin : '0px auto'};
`

export const SkeletonInfluencerPrice = styled(SkeletonPulseTwo)`
    width: 34%;
    height: 14px;
    margin: 0px auto;

`

export const SkeletonInfluencerTags = styled(SkeletonPulseTwo)`
    width: 53%;
    height: 14px;
    margin: 0px auto;
    display: block;
`
