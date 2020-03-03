import styled from 'styled-components'
import { BackgroundImage } from "react-image-and-background-image-fade";






export const AveragesContainer = styled.div`
	padding: 20px 0px 0px;
	display: flex;
    justify-content: space-between;
    align-items: flex-start;
 
    span {
    	opacity: 0.5;
    }

    p {
	    font-size: 1.8rem;
	    font-weight: 700!important;
	    opacity: 1;
	    margin: 25px 0px 0px;
    }

	svg {
	    width: 18px;
	    margin-right: 5px;
	}
`

export const ProfilePictureNameContainer = styled.div`
    width: 100%;
    margin: 0px;
    display: flex;
    position: relative;
    height: 60px;
    margin-bottom: 30px;
`

export const TextContainer = styled.div`
	width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    align-items: center;
    display: flex;
    margin-left: 10px;

    h1 {
    	margin: 0px 0px 8px;
    }

    p {
    	margin: 0px;
    }
`

export const DisplayPictureWrapper = styled.div`
    min-width: 60px!important;
    max-width: 60px!important;
    height: 60px!important;
    display: inline-block;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
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
