import styled from 'styled-components'

export const ImageBannerWrapper = styled.div`
    h1 {
        margin-top: 0px;
        font-size: 2rem;
        margin-bottom: 17px;
    }
`

export const JigsawColumnLeft = styled.div`
    flex: 3.36 1 0%;
    margin-right: 8px !important;

    button:last-child {
        padding-top: 133.333%!important;
    }

    video {
        object-fit: cover!important;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
    }
`

export const JigsawContainer = styled.div`
	display: flex!important;
    button {
		width: 100% !important;
	    text-align: inherit !important;
	    cursor: pointer !important;
	    display: block !important;
	    margin-top: 0px !important;
	    margin-bottom: 0px !important;
	    border-width: initial !important;
	    border-style: none !important;
	    border-color: initial !important;
	    border-image: initial !important;
	    padding: 0px !important;
	    background-color: #000 !important;
	    padding-top: 75%;
	    position: relative;
	}

    div:last-child {
        z-index: 0!important;
        margin-right: 0px!important;
    }
`


export const ImageCoverWrapper = styled.div`
    -webkit-box-pack: center !important;
    -ms-flex-pack: center !important;
    -webkit-box-align: center !important;
    -ms-flex-align: center !important;
    position: absolute !important;
    top: 0px !important;
    bottom: 0px !important;
    left: 0px !important;
    right: 0px !important;
    display: -webkit-box !important;
    display: -moz-box !important;
    display: -ms-flexbox !important;
    display: -webkit-flex !important;
    display: flex !important;
    -webkit-align-items: center !important;
    align-items: center !important;
    -webkit-justify-content: center !important;
    justify-content: center !important;
`

export const ImageCover = styled.img`
	    top: 0px !important;
	    bottom: 0px !important;
	    left: 0px !important;
	    right: 0px !important;
	    height: 100% !important;
   		width: 100% !important;
    	position: static !important;
    	object-fit: cover;
`

export const ImageTint = styled.div`
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: #00000060;
    transition: 0.3s;
    z-index: 1;
    :hover {
        transition: 0.3s;
        cursor: pointer;
        background-color: #00000000;
    }
`

export const JigsawColumnLeftMiddle = styled.div`
	margin-right: 8px !important;
    flex: 3.94 1 0% !important;

    button {
    	padding-top: 75%!important;
    }


`

export const JigsawColumnRightMiddle = styled.div`
	flex: 2.11 1 0% !important;

	button {
    	padding-top: 75%!important;
    }

   	button:last-child {
    	padding-top: 133.333%!important;
    }
`

export const JigsawColumnRight = styled.div`
	margin-left: 8px !important;
    flex: 2.11 1 0% !important;

	button {
    	padding-top: 75%!important;
    }

   	button:last-child {
    	padding-top: 133.333%!important;
    }

`

export const PanelFiftyPercent = styled.div`
	width: calc(50% - 4px) !important;
    overflow: hidden !important;

    button {
    	padding-top: 75%!important;
    }
`

export const Spacer = styled.div`
	margin-top: 8px !important;
`

export const PanelFiftyPercentContainer = styled.div`
    display: flex !important;
    justify-content: space-between !important;
`