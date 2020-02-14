import styled from 'styled-components'
import {SkeletonPulseTwo} from '../../common/Skeleton.sc'

export const SkeletonPostWrapper = styled.div`
    display: inline-block !important;
    vertical-align: top !important;
    white-space: normal !important;
    width: 15%;
    
    @media (max-width: 1880px) { 
        width: 15%;
    }

    @media (max-width: 1440px) { 
        width: 20%;
    }

    @media (max-width: 1128px) { 
        width: 33%;
    }

    @media (max-width: 744px) { 
        width: 50%;
    }
`

export const SkeletonPostTileInnerContainer = styled.div`
    padding: 8px 16px 0px 0px;
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


