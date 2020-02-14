import styled from 'styled-components'
import { BackgroundImage } from "react-image-and-background-image-fade";


export const CollabWrapper = styled.div`
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

    };
    



`
export const CollabContentsWrapper = styled.div`
    border: 1px solid #eee;
    // box-shadow: 0px 2px 0px #eee;
    border-radius: 5px;
`


export const CollabTileInnerContainer = styled.div`
    padding: 8px 8px 30px;
`

export const CollabTile = styled.div`

    overflow: hidden;
    position: relative;
    border-radius: 0px;
    height: 100%;

    ::before {
        font-weight: 800;
        text-align: center;
	    content: 'View Collab';
	    position: absolute;
        padding-top: 25%;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    z-index: -1;
        color: #fff;
	    z-index: 1;
        opacity: 0;
    }

    .influencer-bg-img {
        transition: 0.5s;
    }

    :hover .influencer-bg-img {
    	transform: scale(1.05);
    	transition: 0.5s;
    	cursor: pointer;
    }

    :hover {
    	cursor: pointer;
    }

    :hover .apply-button {
        transition: 0.3s;
        opacity: 1;
        width: 95px;
    }

    :hover::before {
        background-color: #00000080;
        opacity: 1;
    }
`


export const StyledBackgroundImage = styled(BackgroundImage)`
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 100%;
        padding-bottom: 55%;
        transform: scale(1.01);
`


export const CollabTileHeader = styled.div`
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    justify-content: space-between;
    z-index: 1;
    display: flex;
`

export const SpotsLeft = styled.div`
    margin: 13px;
    color: #fff;
    padding: 3px 10px;
    font-size: 0.85rem;
    background-color: #000;
    border-radius: 2px;
    span {
        opacity: 0.8;
    }
`

export const ApplyButton = styled.div`
    background-color: #fff;
    border-radius: 15px 0px 0px;
    color: #000;
    padding: 4px 8px 1px;
    margin: 28px 0px 0px;
    font-size: 0.8rem;
    overflow: hidden;
    width: 81px;
    transition: 0.3s;
    display: none;

    div {
        position: relative;
        width: 95px;
        padding-left: 22.5px;
    }

    svg {
        width: 15px;
        position: absolute;
        left: 0px;
        top: 1px;
    }
`

export const CollabImg = styled.div`
	background-image: url('${props => props.image && props.image}');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 240px;
    transition: 0.2s;
    position: absolute;

`



export const CollabTextWrapper = styled.div`
    background-color: #ffffff;
    padding: 10px;
    width: calc(100% - 20px);
    border-radius: 0px 0px 5px 5px;
    margin-top: 0px;
    z-index: 0;
    overflow: hidden;
    position: relative;

    svg {
        width: 15px;
        position: absolute;
        top: 14px;
        right: 10px;
        opacity: 0.4;
    }

    h3 {
        color: #000;
        margin: 0px;
        font-size: 1.1rem;
        font-weight: 800;
        letter-spacing: 0.25px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: calc(100% - 20px);
    }

    h3:hover {
        text-decoration: underline;
        background-color: white;
        cursor: pointer;
    }

    p {
        font-size: 0.85rem;
        color: #000000;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        z-index: 1;
        width: calc(100% - 1px);
        margin: 7px 0px 10px;
        opacity: 0.4;
        line-height: 1.2rem;
    }
`


export const TextBottom = styled.div`
    padding: 10px;
    width: calc(100% - 20px);
    border-radius: 5px 5px 0px 0px;
    overflow: hidden;
    text-align: center;
    z-index: 1;
    display: flex;
    background-color:#fff;

    // background-color: ${props => props.color ? props.color : '#fff'};
    // color: ${props => props.isDark ? "#fff" : '#000'}!important;

    // a {
    //     color: ${props => props.isDark ? "#fff" : '#000'}!important;
    // }

    // svg {
    //     fill: ${props => props.isDark ? "#fff" : '#000'}!important;
    // }

    color: #000;

    svg {
        fill: #000;
    }
` 


export const CollabHostIcon = styled.div`
    background-size: cover;
    background-position: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-image: url('${props => props.image && props.image}');
    float: left;
    margin-right: 10px;
    border: 0px solid #000;
    background-color: #fff;
    overflow: hidden;
`

export const CollabHostMainText = styled.div`
    margin-bottom: 0px;
    text-align: left;
    font-size: 0.9rem;
    font-weight: 800;
    height: 30px;
    line-height: 30px
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const CollabHostSubText = styled.div`
    opacity: 0.5;
    font-size: 0.75rem;
    text-align: left;
    padding-left: 35px;
    padding-bottom: 0px;
    display:none;

`

export const PriceText = styled.p`
    opacity: 1!important;

    small {
        opacity: 0.7;
    }
`

export const Tags = styled.div`
    opacity: 0.5!important;
    margin: 0px!important;
`

export const Tag = styled.div`
    opacity: 1;
    margin-right: 5px;
    padding: 1px 8px;
    background-color: #eee;
    border-radius: 20px;
    overflow: hidden;
    font-size: 0.85rem;
    display: inline-block;

    :hover {
        cursor: pointer;
        background-color: #ddd;
    }
`

export const CollabHostTextWrapper = styled.div`
    flex: 1;
`

export const Rating = styled.div`
    text-align: right;
    font-size: 0.8rem;
    font-weight: 700;
    height: 30px;
    line-height: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    span {
        opacity: 0.5;
    }

    svg {
        width: 10px;
    }
`

export const ReviewCount = styled.div`
    opacity: 0.5;
    font-size: 0.75rem;
    text-align: right;
    padding-bottom: 0px;
`
