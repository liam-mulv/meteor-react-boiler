import styled from 'styled-components'
import { BackgroundImage } from "react-image-and-background-image-fade";

export const HostInfoWrapper = styled.div`

`

export const InviteButtonContainer = styled.div`
    margin-top: 30px;


    button {
        position: relative;
        width: 100%;
        border-radius: 3px;
        background-color: #222;
        font-size: 1rem;
        border: 1px solid #222;
        color: #fff;
        padding: 15px 10px;
        margin-bottom: 12.5px;
        font-weight: 600;
    }

    button:nth-child(1) {
        background-color: #fff;
        border: 1px solid #222;
        color: #222;
    }
`


export const ProfilePriceAndButtonWrapper = styled.div`
    z-index: 111;
    position: relative;
    background-color: #fff;

    ${props => props.flex && 'display: flex;'};
    padding: 16px;
    border-radius: 4px;

    h1 {
        font-size: 2rem!important;
        margin: 20px 0px!important;
        font-weight: 900;
    }

    h4 {
        font-size: 1.1rem;
        font-weight: 800;
        margin: 0px;
        padding: 0px;
        background-color: #fff;
        z-index: 2;
        opacity: 1;
        color: #808080;
        text-transform: uppercase;
    }

    @media (min-width: 1100px) { 
        padding: ${props => props.padding ? props.padding : "16px 25px" };
    }

    svg {
        width: 22.5px;
        margin-bottom: -6px;
        fill: #2196F3;
    }


    > p {
        opacity: 0.6!important;
        font-size: 1rem!important;
        line-height: 1.5rem!important;
        font-weight: 400!important;
    }
`

export const Shine = styled.div`
    position: absolute;
    top: 0;
    left: -70px;
    height: 98px;
    width: 50px;
    background: rgba(255, 255, 255, 0.3);
    transition: all 0.4s linear;
    transform: skewX(20deg) translateX(0);
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
    width: 100px;
    margin: auto auto 30px;
`

export const DisplayPictureContainer = styled.div`
    width: 100px;
    height: 100px;
    position: relative; 
    border-radius: 5px;
    overflow: hidden;
    border: 3px solid #fff;
    // box-shadow: 0px 0px 0px 1px;
`

export const ListWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    // border-top: 1px solid #eee;
    padding-top: 8px;
`

export const ListIcon = styled.div`
    min-width: 40px;
    max-width: 40px;
    max-height: 40px;
    min-height: 40px;
    background-color: ${props => props.color ? props.color : '#fdb8d0'};
    border-radius: 5px;
    color: #fff;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    flex-direction: row!important;
    text-align: center;
    font-size: 1.3rem;
    margin: 4px;

    > div {
        width: 100%;
        margin-bottom: -2px;
    }

    :hover {
        cursor: pointer;
    }
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
    font-size: 1.3rem!important;
    margin: 15px 0px 10px;
    font-weight: 600!important;
    width: initial!important;
    text-transform: capitalize;
`

export const InstagramHandle = styled.h4`
	font-size: 1rem;
    font-weight: 600!important;
    opacity: 0.4;
    color: #000;
    text-transform: lowercase!important;
    margin-bottom: 16px!important;

   	span {
	    opacity: 0.4;
	    font-size: 1rem;
	    font-weight: 600;
   	}

   	svg {
	    width: 17px;
        margin-bottom: -2px;
        margin-left: 4px;
	    fill: #2196F3;
   	}
`

export const InstagramStats = styled.div`
    display: flex;
    text-align: left;
    font-size: 1.2rem;
    display: flex;
    padding: 10px 0px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin: 8px 0px;

	div {
        width: 100%;
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

export const ProfileLinks = styled.div`

    p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 1rem;
        padding: 5px 0px;
    }

    p:last-child {
        margin-bottom: 10px;
    }
    svg {
        fill: #000!important;
        margin-right: 5px;
        width: 17px;
        padding: 3px 0px;
    }

`

