import styled from 'styled-components'
import { BackgroundImage } from "react-image-and-background-image-fade";


// Message Window
export const MessageWindow = styled.div`
	position: relative;
	height: calc(100vh - 179px);
	padding: 0 30px 0px 12px;
	overflow: scroll;

    ::-webkit-scrollbar {
        opacity: 0;
        position: fixed;
        width: 4px;
        height: 4px;
        background-color: rgba(0,0,0,0)!important;
        overflow: auto!important;
    } 

    ::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0, 0)!important;
        border-radius: 5px;
    }

    ::-webkit-scrollbar-track {
        background-color: rgba(0,0,0,0)!important;
    }

    &:hover::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0, 0.35)!important;
    }
`

export const MessageWindowHeader = styled.h1`
    padding: 8px 10px!important;
    font-size: 16px!important;
    font-weight: 800;
    position: sticky;
    top: 0px;
    background-color: #fff;
    z-index: 111;
    display: inline-flex;
    align-items: center;
    width: calc(100% - 20px)!important;
    margin: 0px;

    > div {
        margin-left: 10px;
    }


    div {
        border: 0px!important;
    }

    span {
        margin-left: 12px;
    }

    ::after {
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .10);
        content: '';
        height: 10px;
        left: 0;
        opacity: 1;
        position: absolute;
        top: 50px;
        transition: opacity .25s ease-out;
        width: 100%;
    }
`

export const MessageWindowIcon = styled.div`
    border: 1px solid #f2f2f2;
    border-radius: 50%;
    padding: 2px;
    width: ${props => props.dimensions ? props.dimensions : '45px'};
    height: ${props => props.dimensions ? props.dimensions : '45px'};
`

// Message

// Message Block
export const MessageBlockWrapper = styled.div`
	display: block;
`

export const MessageBlockContainer = styled.div`
    margin-bottom: 15px;
    position: relative;
`

// Message Block Display Picture

export const DisplayPictureWrapper = styled.div`
	display: block;
`

export const DisplayPictureInnerWrapper = styled.div`
	vertical-align: unset;
	display: inline-block;
`

export const DisplayPictureContainer = styled.div`
    height: 28px;
    width: 28px;
    bottom: 2px;
    position: absolute;
`

export const DisplayPicture  = styled(BackgroundImage)`
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

// Message Block Message

export const MessagesWrapper = styled.div`
	margin-left: 36px;

	:after {
	    clear: both;
	    content: '.';
	    display: block;
	    font-size: 0;
	    height: 0;
	    line-height: 0;
	    visibility: hidden;
	}
`

export const MessageSenderTitle = styled.h5`
    color: rgba(0, 0, 0, .40);
    font-size: 12px;
    font-weight: normal;
    line-height: 1.28;
    margin-bottom: 1px;
    overflow: hidden;
    padding-left: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const MessageWrapper = styled.div`
    position: relative;
    white-space: pre-wrap;
    text-align: left;
    direction: ltr;
    zoom: 1;
`

export const Message = styled.div`
    border-radius: 4px;
    clear: left;
    float: left;
    word-wrap: break-word;
    max-width: 55%;
    box-sizing: content-box;
    padding: 8px 12px;
    position: relative;
    background-color: #f1f0f0;
    color: rgba(0, 0, 0, 1);
    margin: 1px 0; 

      > span > span {
        margin-bottom: -3px;
        margin-right: 2px;
      }
    ${props => props.right &&`
       	clear: right;
    	float: right;
    	background-color: #0199ff; //#cacaca;
    	color: #fff;
    `}

    ${props => props.position === 'top' && !props.right &&`
    	border-top-left-radius: 1.3em;
    	border-top-right-radius: 1.3em;
    	border-bottom-right-radius: 1.3em;
    `}

    ${props => props.position === 'middle' && !props.right &&`
		border-bottom-right-radius: 1.3em;
	    border-top-right-radius: 1.3em;
    `}

    ${props => props.position === 'bottom' && !props.right && `
    	border-bottom-left-radius: 1.3em;
	    border-bottom-right-radius: 1.3em;
	    border-top-right-radius: 1.3em;
    `}

    ${props => props.position === 'solo' && !props.right &&`
    	border-top-left-radius: 1.3em;
    	border-top-right-radius: 1.3em;
    	border-bottom-right-radius: 1.3em;
    	border-bottom-left-radius: 1.3em;
    `}

    ${props => props.notification && `
        background-color: #f1f0f0!important;
        color: #000!important;
        font-weight: 700;
        margin: 1px auto;
        float: initial;
        text-align:center;
    `}




    ${props => props.position === 'top' && props.right &&`
    	border-top-right-radius: 1.3em;
    	border-top-left-radius: 1.3em;
    	border-bottom-left-radius: 1.3em;
    `}

    ${props => props.position === 'middle' && props.right &&`
		border-bottom-left-radius: 1.3em;
	    border-top-left-radius: 1.3em;
    `}

    ${props => props.position === 'bottom' && props.right && `
    	border-bottom-right-radius: 1.3em;
	    border-bottom-left-radius: 1.3em;
	    border-top-left-radius: 1.3em;
    `}

    ${props => props.position === 'solo' && props.right &&`
    	border-top-right-radius: 1.3em;
    	border-top-left-radius: 1.3em;
    	border-bottom-left-radius: 1.3em;
    	border-bottom-right-radius: 1.3em;
    `}
`
export const Time = styled.div`
    color: rgba(0, 0, 0, .40);
    font-size: 12px;
    margin: 15px 0;
    text-align: center;
	display: block;
    font-weight: 500;
    margin: 20px 0px!important;
    font-weight: 600!important;
    text-transform: uppercase;

`


// Chat Input
export const ChatInputWrapper = styled.div`
	border-top: none;
	bottom: 0px;
    position: relative;

    .emoji-mart-title-label {
        display: none;
    }
`

export const ChatInputContainer = styled.div`
	align-items: flex-end;
    background-color: rgba(255, 255, 255, 1);
    margin: 0;
    padding: 0 8px;
    display: flex;
    flex-direction: row;
    margin: 0 8px 0 12px;
    position: relative;
`

export const ChatInputIconsWrapper = styled.div`
	align-items: flex-end;
    display: flex;
    padding: 10px 0;
    height: 35px;
    a {
    	margin-right: 15px;
    	height: 35px;
    }

    svg {
    	vertical-align: middle;
    	height: 30px;
    	width: 30px;
    }


`

export const InputFieldContainer = styled.div`
	background-color: rgba(0, 0, 0, .05);
    border-radius: 18px;
    display: flex;
    flex: 1 1 auto;
    margin: 10px 10px 10px 0;
    min-width: 100px;
    padding: 0 8px 0 12px;
    position: relative;

    div {
        position: absolute;
        right: 0px;
        width: 36px;
        height: 34px;
        font-size: 1.6rem;
        padding: 2px 0px;
        display: flex;
        align-items: center;
    }

    div:hover {
        cursor: pointer;
    }

    input {
    	height: 35px;
	    font-size: 0.9rem;
	    background-color: rgba(0,0,0,0);
	    border: 0px;
	    line-height: 30px;
	}
`
