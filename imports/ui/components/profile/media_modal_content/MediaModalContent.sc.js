import styled from 'styled-components'
import { BackgroundImage } from "react-image-and-background-image-fade";

export const MediaModalWrapper = styled.div`

`

export const MediaModalContainer = styled.div`
	display: flex;
	position: relative;
	height: 600px;
	border-radius: 5px;
	overflow: hidden;
	box-shadow: 0px 1px 2px rgba(0,0,0, 0.2);

    align-items: center;
    margin: auto;
    max-width: 950px;
    width: 100%;
`

export const MediaContainer = styled.div`
    height: 100%;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

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

export const MediaPaddingWrapper = styled.div`
    display: block;
    overflow: hidden;
    padding-bottom: 100%;
    padding-bottom: 62.7778%;
    flex-direction: column;
    display: flex;
    align-items: stretch;

    img {
        object-fit: cover;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        user-select: none;
        width: 100%;
    }
`

export const CloseModal = styled.div`
	position: absolute;
	top: -30px;
	right: -30px;

	svg {
		width: 20px;
		fill: #fff;
	}

	:hover{
		cursor: pointer;
	}
`

export const ArrowsWrapper = styled.div`
    height: 50px;
    top: calc(50% - 25px);
    position: fixed;
    z-index: 7;
    width: 100%;
    max-width: 1100px;
    left: 50%;
    transform: translateX(-50%);

    :hover {
        cursor: pointer;
    }
`

export const Arrows = styled.div`
    height: 50px;
    margin: 0 auto;
    max-width: 1100px;
    top: calc(50% - 25px);
    width: 100%;
    position: relative;

    :hover {
        cursor: pointer;
    }
`

export const Previous = styled.div`
    padding: 0px 10px;
    position: absolute;
    left: 0px;
    height: 100%;
    top: 0px;
    bottom: 0px;
    display: flex;
    align-items: center;

    svg {
    	width: 20px;
    	fill: #fff;
    }

    :hover {
    	cursor: pointer;
    }
`


export const Next = styled.div`
    padding: 0px 10px;
    position: absolute;
    right: 0px;
    height: 100%;
    top: 0px;
    bottom: 0px;
    display: flex;
    align-items: center;

    svg {
    	width: 20px;
    	fill: #fff;
    }

    :hover {
    	cursor: pointer;
    }
`



export const DescriptionContainer = styled.div`
    flex-direction: column;
    min-width: 335px;
    max-width: 335px;
    display: flex;
    height: 100%;
    background-color: #fff;
`

export const Header = styled.div`
    padding: 16px;
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 700;
    border-bottom: 1px solid #eee;


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
    padding: 16px;
    display: flex;
    align-items: center;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    svg {
	    width: 16px;
	    margin-right: 5px;
	}

	span {
		opacity: 0.5;
	}

	p {
		opacity: 1;
		font-size: 1.2rem;
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