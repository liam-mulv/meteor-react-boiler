import styled from 'styled-components'
import { BackgroundImage } from "react-image-and-background-image-fade";


export const CollabWrapper = styled.div`

    position: relative;

    ${props => props.simple ?
        `@media (max-width: 2400px) { 
            flex: 0 0 20%;    
        }
        @media (max-width: 1880px) { 
            flex: 0 0 25%;    
        }

        @media (max-width: 1640px) { 
            flex: 0 0 25%;    
        }

        @media (max-width: 1128px) { 
            flex: 0 0 33.33%;    
        }

        @media (max-width: 744px) { 
            flex: 0 0 33.33%;    
        }`
    : 
        `@media (max-width: 2400px) { 
            flex: 0 0 20%;    
        }
        @media (max-width: 1880px) { 
            flex: 0 0 25%;    
        }

        @media (max-width: 1640px) { 
            flex: 0 0 25%;    
        }

        @media (max-width: 1128px) { 
            flex: 0 0 33.33%;    
        }

        @media (max-width: 744px) { 
            flex: 0 0 33.33%;    
        }`

    };
    



`
export const CollabContentsWrapper = styled.div`
    border: 1px solid #eee;
    // box-shadow: 0px 2px 0px #eee;
    border-radius: 2px;
`


export const CollabTileInnerContainer = styled.div`
    padding: 8px 12px 30px;
`

export const CollabTile = styled.div`

    overflow: hidden;
    position: relative;
    border-radius: 0px;
    height: 100%;
    position: relative;

    ::before {
        font-weight: 800;
        text-align: center;
	    // content: 'View Collab';
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
    padding: 0px 10px 10px;
    width: calc(100% - 20px);
    border-radius: 0px 0px 5px 5px;
    margin-top: 0px;
    z-index: 0;
    position: relative;
    overflow: auto;

    svg {
        width: 15px;
        position: absolute;
        top: 14px;
        right: 10px;
        opacity: 0.4;
        display: none;
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
        font-size: 1rem;
        color: #000000;
        z-index: 1;
        min-width: 0;
        opacity: 0.75;
        margin: 0px 0px 15px;
        line-height: 1.2rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
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
    overflow: auto;
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
    width: 25px;
    height: 25px;
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
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 120px;
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
    border-top: 1px solid #eee;
    text-align: right;
    opacity: 1!important;
    margin: 0px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    width: calc(100% - 20px);
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
    min-width: 0; /* this one right here does it!*/
    display: flex;
    align-items: center;

`

export const Rating = styled.div`
    text-align: right;
    font-size: 0.8rem;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;


    span {
        opacity: 0.5;
    }

    strong {
        margin-right: 4px;
    }

    svg {
        width: 12px;
        margin-right: 2px;
        margin-top: -4px;
    }
`

export const ReviewCount = styled.div`
    opacity: 0.5;
    font-size: 0.75rem;
    text-align: right;
    padding-bottom: 0px;
`
