import styled from 'styled-components'
import {SkeletonPulseTwo} from '../../common/Skeleton.sc'

export const MoreCollabWrapper = styled.div`
    display: inline-block !important;
    vertical-align: top !important;
    white-space: normal !important;


    @media (max-width: 2400px) { 
        width: calc(100% / 6);
    }
    @media (max-width: 1880px) { 
        width: calc(100% / 5);
    }

    @media (max-width: 1440px) { 
        width: calc(100% / 4);
    }

    @media (max-width: 1128px) { 
        width: calc(100% / 3);
    }

    @media (max-width: 744px) { 
        width: calc(100% / 2);
    }
`

export const MoreCollabTile = styled.div`
    position: relative;
    border-radius: 5px;
    padding: 8px 8px 24px;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
        position: absolute;
        font-size: 0.8rem;
        margin: 0px;
        opacity: 0.5;
        z-index: 1;
    }
    
    :hover div {
        cursor: pointer;
        background-color: #dcdcdc;
    }

    :hover p {
        opacity: 0.75;
    }
`

export const MoreCollabImage = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
    border-radius: 5px;
    height: 100%;
    padding-bottom: 60%;
    background-color: #F0F0F0;
`