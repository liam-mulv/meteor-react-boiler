import styled from 'styled-components'
import { BackgroundImage } from "react-image-and-background-image-fade";

export const FeedWrapper = styled.div`

`

export const FeedColumn = styled.div`
	width: 100%;
	flex: 0 0 33%;



`

export const ColumnCard = styled.div`
	height: 180px;
	display: flex;
	padding: 16px;
	border-bottom: 1px solid #eee;
	opacity: ${props => props.isActive ? 1 : 0.5};
`

export const MediaWrapper = styled.div`
	height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 4px;

	img {
	    max-width: 100%;
	    max-height: 100%;
	    min-width: 100%;
	    min-height: 100%;
	    object-fit: cover;
	}

	video {
		height: 100%;
        max-width: 100%;
	}
`

export const PostContent = styled.div`
	flex: 2;
	height: 100%;
`




export const DescriptionContainer = styled.div`
    flex-direction: column;
    // min-width: 335px;
    // max-width: 335px;
    display: flex;
    height: 100%;
    background-color: #fff;
`

export const Header = styled.div`
    padding: 0px 16px 16px;
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 700;

   	svg {
	    width: 17px;
        margin-bottom: -2px;
        margin-left: 4px;
	    fill: #2196F3;
   	}
`

export const Caption = styled.div`
	padding: 16px;
	flex: 1;
`

export const Footer = styled.div`

`

export const Stats = styled.div`
	margin: 0px 16px;
    padding: 16px 0px;
    display: flex;
    align-items: center;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    svg {
	    width: 14px;
	    margin-right: 5px;
	}

	span {
		opacity: 0.5;
	}

	p {
		opacity: 1;
		font-size: 1.25em;
		font-weight: 600!important;
		margin: 10px 0px;
	}
`

export const MediaDate = styled.div`
    padding: 0px 16px 16px;
	opacity: 0.5;
	font-size: 0.85rem;
	text-transform: uppercase;
`

export const DisplayPictureWrapper = styled.div`
    min-width: 45px!important;
    max-width: 45px!important;
    height: 45px!important;
    display: inline-block;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    border: 2px solid #fff;
    box-shadow: 0px 0px 0px 0px #000;
    margin-right: 16px;
`


export const StyledBackgroundImage = styled(BackgroundImage)`
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    border-radius: 5px;

    div {
        border-radius: 5px;
    	overflow:hidden;	
    }
`

