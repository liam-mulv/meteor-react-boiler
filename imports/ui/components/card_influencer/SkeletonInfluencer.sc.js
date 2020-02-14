import styled from 'styled-components'
import {SkeletonPulseTwo} from '../../common/Skeleton.sc'


export const SkeletonInfluencerWrapper = styled.div`
    overflow: hidden;
    position: relative;
    border-radius: 5px;
    display: inline-block;

    ${props => props.simple ?
        `@media (max-width: 2400px) { 
            width: calc(100% / 11);
        }
        @media (max-width: 1880px) { 
            width: calc(100% / 10);
        }

        @media (max-width: 1440px) { 
            width: calc(100% / 9);
        }

        @media (max-width: 1128px) { 
            width: calc(100% / 7);
        }

        @media (max-width: 744px) { 
            width: calc(100% / 6);
        }`
    : 
        `@media (max-width: 2400px) { 
            width: calc(100% / 9);
        }
        @media (max-width: 1880px) { 
            width: calc(100% / 8);
        }

        @media (max-width: 1440px) { 
            width: calc(100% / 7);
        }

        @media (max-width: 1128px) { 
            width: calc(100% / 5);
        }

        @media (max-width: 744px) { 
            width: calc(100% / 4);
        }`

    };
`

export const SkeletonInfluencerTile = styled.div`
    overflow: hidden;
    position: relative;
    border-radius: 5px;
    margin-bottom: 25px;
`

export const SkeletonInfluencerTileInnerContainer = styled.div`
    padding: 8px 13px 15px 3px;
`

export const SkeeltonInfluencerImage = styled(SkeletonPulseTwo)`
    width: 100%;
    height: 100%;
    transition: 0.2s;
    padding-bottom:  ${props => props.simple ? '100%' : '160%'};
    overflow: hidden;
    border-radius: ${props => props.simple ? '50%' : '5px'};

`
export const SkeletonInfuencerName = styled(SkeletonPulseTwo)`
    width: 68%;
    height: 15px;
    display: block;
    ${props => !props.simple && 'float: left'};
    margin:  ${props => props.simple ? '5px auto' : '12px 0px 0px'};
`

export const SkeletonInfuencerFollowers = styled(SkeletonPulseTwo)`
    width: 43%;
    height: 12px;
    margin:  ${props => props.simple ? '5px auto' : '5px 0px 0px'};
    clear: both;
    display: block;
    ${props => !props.simple && 'float: left'};
`

export const SkeletonInfluencerPrice = styled(SkeletonPulseTwo)`
    width: 34%;
    height: 14px;
    margin:  ${props => props.simple ? '8px auto' : '8px 0px 0px'};
`

export const SkeletonInfluencerTags = styled(SkeletonPulseTwo)`
    width: 53%;
    height: 14px;
    margin:  ${props => props.simple ? '8px auto' : '8px 0px 0px'};
    float: left;
    clear: both;
`
