import styled from 'styled-components'
import { BackgroundImage } from "react-image-and-background-image-fade";

export const HostInfoWrapper = styled.div`
    padding: 55px 0px 0px;
`

export const StyledBackgroundImage = styled(BackgroundImage)`
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;

    div {
        border-radius: 50%;
    	overflow:hidden;	
    }
`
export const DisplayPictureWrapper = styled.div`
    position: relative;
    width: 90px;
    margin: auto;
`

export const DisplayPictureContainer = styled.div`
    width: 90px;
    height: 90px;
    position: relative; 
    border-radius: 50%;
    overflow: hidden;
`

export const InstagramIconWrapper = styled.div`
    width: 17px;
    height: 17px;
    position: absolute;
    bottom: 0px;
    right: -8px;
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
    margin: 15px 0px 5px!important;
    font-weight: 800!important;
    width: initial!important;
`

export const InstagramHandle = styled.h4`
	font-size: 1rem;
    font-weight: 700!important;
    opacity: 1;
    color: #808080;
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
    font-size: 1.2rem;
    overflow: auto;
    display: flex;
    padding: 20px 0px;
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
        text-transform: uppercase;
        font-size: 0.75rem;
        opacity: 0.5;
    }
`
