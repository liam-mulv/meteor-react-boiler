import styled from 'styled-components'
import { BackgroundImage } from "react-image-and-background-image-fade";

export const HostInfoWrapper = styled.div`
	margin-bottom: 32px;

	p {
		margin-top: 32px!important;
	}
`

export const StyledBackgroundImage = styled(BackgroundImage)`
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #eee;

    div {
    	padding: 2px;
        border-radius: 50%;
    	overflow:hidden;	
    }
`


export const DisplayPictureContainer = styled.div`
    width: 100px;
    height: 100px;
    transition: 0.2s;
    padding-bottom: 0px;
    position: relative; 

  	div:last-child {
  		padding: 2px;
  	}
`

export const InstagramIconWrapper = styled.div`
    width: 17px;
    height: 17px;
    position: absolute;
    bottom: -3px;
    right: -9px;
    z-index: 1;
    padding: 8px;
    background-color: #000;
    border-radius: 50%;
    border: 3px solid #fff;

    svg {
    	margin-top: -1px;
    	fill: #fff;
    }
`

export const TextWrapper = styled.div`
	margin-left: 45px;
`

export const HostName = styled.h1`
	font-weight: 800;
	margin: 5px 0px 5px;
	font-size: 1.2rem;
`

export const InstagramHandle = styled.h4`
	font-size: 1rem;
    font-weight: 800;
    margin: 0px 0px 22px;
    opacity: 1;
    color: #808080;

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
	margin: 0px 0px;
    font-size: 1.2rem;
    overflow: auto;

	div {
		float: left;
		margin-right: 20px;
	}

	span {
		font-weight: 800;

	}
`
