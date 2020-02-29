import styled from 'styled-components'
import { BackgroundImage } from "react-image-and-background-image-fade";

export const InfluencerWrapper = styled.div`

    overflow: hidden;
    position: relative;
    border-radius: 5px;
    position: relative;

    ${props => props.simple ?
        `@media (max-width: 2400px) { 
            flex: 0 0 10%;    
        }
        @media (max-width: 1880px) { 
            flex: 0 0 14.2%;    
        }

        @media (max-width: 1640px) { 
            flex: 0 0 18%;    
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
            flex: 0 0 18%;    
        }

        @media (max-width: 1128px) { 
            flex: 0 0 20%;    
        }

        @media (max-width: 744px) { 
            flex: 0 0 30%;    
        }`
    };

`

export const InfluencerTile = styled.div`
    overflow: hidden;
    position: relative;
    border-radius: 5px;
    background-color: #fff;
    border: 1px solid #eee;

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

export const DisplayPicture = styled.div`
    width: 70%;
    border-radius: 50%!important;
    margin: 20px auto 10px;
    overflow: hidden;
`

export const StyledBackgroundImage = styled(BackgroundImage)`
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    padding-bottom: 100%;
    transition: 0.2s;
    overflow: hidden;

    // padding-bottom:  ${props => props.simple ? '100%' : '160%'};

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
    padding: 10px 0px 20px;
    bottom: 0px;
    color: #000;
    text-align: center;
    z-index: 1;
` 

export const MainText = styled.div`
    border-radius: 0px!important;
    margin-bottom: 2px;
    font-size: 1rem;
    font-weight: 800;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 80%;
    text-align: center;
    margin: auto;
` 

export const SubText = styled.div`
    border-radius: 0px!important;
    margin-bottom: 2px;
    font-size: 0.85rem;
    opacity: 0.5;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 10px;
`

export const FollowerText = styled.div`
    color: #000;
    padding: 10px 0px;
    opacity: 1;
    font-size: 1.1rem;

    div {
        margin-top: -3px;
        opacity: 0.5;
        FONT-WEIGHT: 600;
        font-size: 0.85rem;
    }
    b {
        font-weight: 800;
    }
`
export const PriceText = styled.p`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #eee;
    text-align: right;
    opacity: 1!important;
    margin: 0px;
    padding: 10px;

    svg {
        width: 16px;
        fill: #a4a4a4;
        float: left;
        opacity: 0.5;
    }

    small {
        opacity: 0.7;
        font-size: 70%;
        margin-right: 5px;
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

