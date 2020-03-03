import styled from 'styled-components'
import { BackgroundImage } from "react-image-and-background-image-fade";

export const HostInfoWrapper = styled.div`

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
export const DisplayPictureWrapper = styled.div`
    position: relative;
    width: 125px;
    margin: auto auto 30px;
`

export const DisplayPictureContainer = styled.div`
    width: 125px;
    height: 125px;
    position: relative; 
    border-radius: 5px;
    overflow: hidden;
`

export const InstagramIconWrapper = styled.div`
    width: 17px;
    height: 17px;
    position: absolute;
    bottom: -20px;
    right: -20px;
    padding: 8px;
    background-color: #000;
    border-radius: 50%;
    border: 3px solid #fff;
    transition: 0.3s;
    z-index: 2;

    :hover {
        transition: 0.3s;
        transform: scale(1.1);
    }

    svg {
        margin-top: -1px;
        fill: #fff;
        width: 17.5px;
        margin-bottom: 0px;
    }
`

export const TextWrapper = styled.div`
    text-align: center;
`

export const HostName = styled.div`
    font-size: 1.5rem!important;
    margin: 15px 0px 10px;
    font-weight: 600!important;
    width: initial!important;
`

export const InstagramHandle = styled.h4`
	font-size: 1rem;
    font-weight: 600!important;
    opacity: 0.4;
    color: #000;
    text-transform: lowercase!important;

   	span {
	    opacity: 0.4;
	    font-size: 1rem;
	    font-weight: 600;
   	}

   	svg {
	    width: 17px;
	    margin-bottom: -4px;
	    fill: #2196F3;
   	}
`

export const InstagramStats = styled.div`
    display: flex;
    text-align: center;
    font-size: 1.2rem;
    overflow: auto;
    display: flex;
    padding: 10px 0px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin: 30px 0px;

	div {
        flex: 1;
	}

	span {
		font-weight: 800;
	}

    small {
        width: 100%;
        clear: both;
        font-size: 70%!important;
        opacity: 0.5;
        margin-bottom: 5px;
        font-weight: 400;
    }

    p {
        opacity: 1;
        margin-bottom: 0px;
        margin-top: 10px;
    }

    p  small {
        opacity: 1;
    }

`
