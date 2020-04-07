import styled from 'styled-components'
import { BackgroundImage } from "react-image-and-background-image-fade";


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


export const RowWrapper = styled.div`
	margin-top: 50px;
    position: relative;

    :hover .ScrollbarsCustom-TrackX {
        opacity: 1;
    }

    ::-webkit-scrollbar {
        height: 1px!important;
    }
`

export const RowTitle = styled.h1`
    font-family: 'Comfortaa',cursive;
    font-size: 1.25rem;
    font-weight: 900;
    margin: 0px;
    padding:18px 25px 18px 30px;
    background-color: #fff;
    z-index: 2;

    span {
        font-size: 48%;
        text-align: right;
        float: right;
        margin-top: 8px;
        opacity: 0.4;
    }
`

export const FlexRow = styled.div`
    position: relative;
    overflow: auto;
    white-space: nowrap;

    .collabWrapper:first-child {
        margin-left: 22px;
    }

    .influencerTile:first-child {
        margin-left: 30px;
    }


`


export const InfluencerTile = styled.div`
	flex-grow: 1;
    flex-basis: 0;
    margin: 0px 4px;
    overflow: hidden;
    position: relative;
    border-radius: 5px;
    width: 0;
    height: 320px;
    min-width: 180px;

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
        transition:0.3s;
    }

    :hover .influencer-bg-img {
    	opacity: 1;
    	transition: 0.2s;
        transform: scale(1.05);
    }

    :hover .message-icon {
    	opacity: 1;
    	transition: 0.2s;
    }

    :hover::before {
        background: linear-gradient(rgba(33, 44, 62, 0.1) 33%,rgba(0, 0, 0, 0.5) 66%)!important;
        transition:0.3s;
    }

    :hover {
    	cursor: pointer;
    }

    .influencer-bg-img {
            // background-image: url('${props => props.image && props.image}');

    }
`

export const StyledBackgroundImage = styled(BackgroundImage)`
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 100%;
        transition: 0.2s;
`

export const TextBottom = styled.div`
    position: absolute;
    width: 100%;
    padding: 15px 0px;
    bottom: 0px;
    color: #fff;
    text-align: center;
    z-index: 1;
` 

export const MainText = styled.div`
	margin-bottom: 4px;
    font-size: 0.9rem;
` 

export const SubText = styled.div`
	opacity: 0.7;
	font-size: 75%;
`

export const FollowerText = styled.div`
    opacity: 1;
    margin: auto;
    width: 46%;
    color: #fff;
    padding: 6px 0px 0px;
    margin-top: 6px;
    font-size: 0.7rem;
    border-top: 2px solid #ffffff2b;
`

export const BasicStats = styled.div`
    font-size: 70%;
    margin-top: 5px;
    display: none;
`
