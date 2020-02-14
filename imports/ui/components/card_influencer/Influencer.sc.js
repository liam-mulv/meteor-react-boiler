import styled from 'styled-components'
import { BackgroundImage } from "react-image-and-background-image-fade";

export const InfluencerWrapper = styled.div`

    overflow: hidden;
    position: relative;
    border-radius: 5px;
    width: 10%;
    display: inline-block;

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
            width: calc(100% / 6);
        }

        @media (max-width: 744px) { 
            width: calc(100% / 5);
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

export const InfluencerTile = styled.div`
    overflow: hidden;
    position: relative;
    border-radius: 5px;

    a > div {
        border-radius: ${props => props.simple ? '50%' : '5px'};
    }

    :hover .influencer-bg-img {
    	opacity: 1;
    	transition: 0.2s;
        transform: scale(1.05);
    }

    .influencer-bg-img {
        border-radius: ${props => props.simple ? '50%' : '5px'};
        overflow: hidden!important;
    }

    :hover .message-icon {
    	opacity: 1;
    	transition: 0.2s;
    }
    :hover {
        // box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.1);
        cursor: pointer;
    }
`

export const InfluencerTileInnerContainer = styled.div`
    padding: 8px;
`

export const StyledBackgroundImage = styled(BackgroundImage)`
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    transition: 0.2s;
    overflow: hidden;

    padding-bottom:  ${props => props.simple ? '100%' : '160%'};

    background-color: #00000000;

    ::before {
        font-weight: 800;
        text-align: center;
        content:  ${props => props.simple ? ' ' : 'View Profile'};
        position: absolute;
        padding-top: 70%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1111;
        color: #fff;
        z-index: 1;
        opacity: 0;
    }

    :hover::before {
        opacity: 1;
        background-color: #00000050;
    }

`


export const IconContainer = styled.div`
    width: ${props => props.plus ? '20px' : '22px'};
    height: ${props => props.plus ? '20px' : '22px'};
    position: absolute;
    background-color: #fff;
    padding: 8px;
    border-radius: 50%;
    margin: 5px;
    top: ${props => props.plus ? '5px' : '50px'};
    right: 5px;
    z-index: 1;
    opacity: 0;
    transition: 0.2s;

    svg {
        width: ${props => props.plus ? '65%' : '85%'};
        padding: ${props => props.plus ? '2px 3px' : '1px 2px'};
    }

    :hover {
        transform: scale(1.05);
        transition: 0.2s;
    }
`

export const TextBottom = styled.div`
    width: 100%;
    padding: 10px 0px 10px;
    bottom: 0px;
    color: #000;
    text-align: ${props => props.simple ? 'center' : 'left'};
    z-index: 1;
` 

export const MainText = styled.div`
    border-radius: 0px!important;
    margin-bottom: 2px;
    font-size: 0.9rem;
    font-size: ${props => props.simple ? '0.85rem' : '1rem'};

    font-weight: 800;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
` 

export const FollowerText = styled.div`
    color: #000;
    padding: 0px;
    font-size: 0.85rem;
    opacity: 0.4;
`
export const PriceText = styled.p`
    font-size: 0.8rem;
    right: 15px;
    z-index: 11;
    margin: 7px 0px 0px;

    small {
        opacity: 0.7;
    }
`

export const BasicStats = styled.div`
    font-size: 70%;
    margin-top: 5px;
    display: none;
`


export const Tags = styled.p`
    opacity: 0.5!important;
    line-height: 1.4rem!important;
    margin: 7px 0px;
`

export const Tag = styled.div`
    opacity: 1;
    margin-right: 5px;
    padding: 1px 7px;
    background-color: #eee;
    border-radius: 3px;
    overflow: hidden;
    font-size: 0.8rem;
    display: inline-block;

    :hover {
        cursor: pointer;
        background-color: #ddd;
    }
`

