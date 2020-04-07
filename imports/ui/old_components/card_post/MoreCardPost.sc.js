import styled from 'styled-components'

import {SkeletonPulseTwo} from '../../common/Skeleton.sc'

export const MorePostWrapper = styled.div`
    display: inline-block !important;
    vertical-align: top !important;
    white-space: normal !important;
    width: 15%;
    
    @media (max-width: 1880px) { 
        width: 10%;
    }

    @media (max-width: 1440px) { 
        width: 15%;
    }

    @media (max-width: 1128px) { 
        width: 20%;
    }

    @media (max-width: 744px) { 
        width: 33%;
    }
`

export const MorePostTileInnerContainer = styled.div`
    padding: 8px 16px 0px 0px;
`

export const MorePostTile = styled.div`
    overflow: hidden;
    position: relative;
    border-radius: 15px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        position: absolute;
        font-size: 0.8rem;
        margin: 0px;
        opacity: 0.5;
    }

    :hover div {
        cursor: pointer;
        background-color: #dcdcdc;
    }

    :hover p {
        opacity: 0.75;
    }

`
export const MorePostImage = styled.div`
    width: 100%;
    height: 100%;
    padding-bottom: 100%;
    background-color: #F0F0F0;
`

