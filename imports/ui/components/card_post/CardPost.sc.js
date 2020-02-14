import styled from 'styled-components'
import { BackgroundImage } from "react-image-and-background-image-fade";

export const SkeletonCollabWrapper = styled.div`
    width: 20%;
    display: inline-block !important;
    vertical-align: top !important;
    white-space: normal !important;

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

export const PostWrapper = styled.div`
    display: inline-block !important;
    vertical-align: top !important;
    white-space: normal !important;
    width: 15%;
    

    ${props => props.simple ?
        `@media (max-width: 2400px) { 
            width: calc(100% / 10);
        }
        @media (max-width: 1880px) { 
            width: calc(100% / 9);
        }

        @media (max-width: 1440px) { 
            width: calc(100% / 8);
        }

        @media (max-width: 1128px) { 
            width: calc(100% / 7);
        }

        @media (max-width: 744px) { 
            width: calc(100% / 6);
        }`
    : 
        `@media (max-width: 2400px) { 
            width: calc(100% / 7);
        }
        @media (max-width: 1880px) { 
            width: calc(100% / 6);
        }

        @media (max-width: 1440px) { 
            width: calc(100% / 5);
        }

        @media (max-width: 1128px) { 
            width: calc(100% / 4);
        }

        @media (max-width: 744px) { 
            width: calc(100% / 3);
        }`

    };
`

export const PostTileInnerContainer = styled.div`
    padding: 8px;
`


export const PostTile = styled.div`

    overflow: hidden;
    position: relative;
    border-radius: 10px;
    height: 100%;

    svg {
        position: absolute;
        width: 35px;
        margin-left: calc(50% - 17.5px);
        fill: #fff;
        top: calc(50% - 17.5px);
        opacity: 0;
        z-index: 1;
    }


    ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        background: linear-gradient(rgba(33, 44, 62, 0) 33%,rgba(0, 0, 0, 0.43) 66%);
        z-index: 1;
    }

    :hover::before {
        background: linear-gradient(rgba(0, 0, 0, 0.5) 33%,rgba(0, 0, 0, 0.5) 66%);
    }

    .influencer-bg-img {
        transition: 0.5s;
    }

    :hover .influencer-bg-img {
        // transform: scale(1.1);
        // transition: 0.5s;
        cursor: pointer;
    }

    :hover {
        cursor: pointer;
    }

    :hover svg {
        opacity: 1;
    }
`


export const StyledBackgroundImage = styled(BackgroundImage)`
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    transition: 0.2s;
    padding-bottom: 100%;
`

export const TextBottom = styled.div`
    position: relative;
    width: 100%;
    padding: 15px 0px 8px;
    bottom: 0px;
    color: #000;
    text-align: center;
    z-index: 1;
    display: none;
` 

export const PostHostMainText = styled.div`
    margin-top: 5px;
    text-align: left;
    // padding-left: 60px;
    font-size: 80%;
    display: flex;
    width: 110px;
    // position: absolute;
    // right: 0px;
    margin: auto;
`


export const IconWrapper = styled.div`
    flex: 1;
    text-align: center;
    svg {
        width: 17px;
        margin-right: 5px;
        margin-bottom: -3px;
    }
`
