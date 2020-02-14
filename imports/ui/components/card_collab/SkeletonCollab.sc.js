import styled from 'styled-components'
import {SkeletonPulseTwo} from '../../common/Skeleton.sc'

export const SkeletonCollabWrapper = styled.div`
    display: inline-block !important;
    vertical-align: top !important;
    white-space: normal !important;


    ${props => props.simple ?
        `@media (max-width: 2400px) { 
            width: calc(100% / 5);
        }
        @media (max-width: 1880px) { 
            width: calc(100% / 4);
        }

        @media (max-width: 1440px) { 
            width: calc(100% / 3);
        }

        @media (max-width: 1128px) { 
            width: calc(100% / 2);
        }

        @media (max-width: 744px) { 
            width: calc(100% / 1);
        }`
    : 
        `@media (max-width: 2400px) { 
            width: calc(100% / 5);
        }
        @media (max-width: 1880px) { 
            width: calc(100% / 4);
        }

        @media (max-width: 1440px) { 
            width: calc(100% / 3);
        }

        @media (max-width: 1128px) { 
            width: calc(100% / 2);
        }

        @media (max-width: 744px) { 
            width: calc(100% / 1);
        }`
    }
`

export const SkeletonCollabContentsWrapper = styled.div`
    border: 1px solid #F0F0F0;
    border-radius: 5px;
`
export const SkeletonCollabTile = styled.div`
    position: relative;
    border-radius: 5px;
    padding: 8px 8px 30px;
`

export const SkeletonCollabImage = styled(SkeletonPulseTwo)`
    width: 100%;
    overflow: hidden;
    position: relative;
    height: 100%;
    padding-bottom: 55%;
`

export const SkeletonCollabHostMainText = styled.div`
    margin-bottom: 0px;
    text-align: left;
    font-size: 0.9rem;
    font-weight: 800;
    height: 30px;
    line-height: 30px
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
    // justify-content: center;
`


export const SkeletonCollabTitle = styled(SkeletonPulseTwo)`
    width: 50%;
    height: 20px;
   	margin: 0px;

`

export const SkeletonCollabDescription = styled(SkeletonPulseTwo)`
    width: 100%;
    height: 12px;
    margin: 7px 0px 10px;
`

export const SkeletonCollabTags = styled(SkeletonPulseTwo)`
    width: 20%;
    height: 15px;
    margin: 0px 5px 0px 0px;
    float: left;
    border-radius: 15px;
`