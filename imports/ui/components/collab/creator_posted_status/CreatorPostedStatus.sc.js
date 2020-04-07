import styled from 'styled-components'
import { BackgroundImage } from "react-image-and-background-image-fade";


export const CreatorPostedStatusWrapper = styled.div`
	padding: 0px 24px 24px;
    display: flex;

    > div {
	    flex: 1;
	    margin: 0px 16px;
	    background-color: #fff;
	    margin: 0px 0px 0px 16px
	}

	> div:last-child {
    	flex: 1.5;
	}

	> div > div {
		background-color: #f7f7f7;
		padding: 12px 12px 4px;
		border-radius: 4px;
	}

	small {
		opacity: 0.5;
	}

	h2 {
	    font-size: 1.1rem;
	    font-weight: 600;
	    margin: 4px 0px 12px;
	    padding: 0px 8px;
	}

`

export const CreatorList = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 4px;

	> p {
		padding: 0px 8px;
	}
`

export const AddNewCreatorWrapper = styled.div`
    padding: 20px;
    margin-bottom: 8px;
    border: 2px dashed rgba(0,0,0,0.1);
    text-align: center;
    border-radius: 2px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #2222226e;
`

export const Creator = styled.div`
	padding: 8px 12px 8px 8px;
    border-radius: 4px;
    margin-bottom: 8px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;

    > div {

    }
`

export const CreatorPictureAndTextWrapper = styled.div`
	display: flex;
	align-items: center;
	font-size: 1rem;
	font-weight: 600;
`
export const TextWrapper = styled.div`
	color: #222;
	display: flex;
	justify-content: space-between;
	flex: 1;

	> svg {
		width: 24px;
	}
`

export const Username = styled.div`
	font-size:1rem;
	font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content: center;


	svg {
	    width: 17px;
        margin-bottom: -4px;
        margin-left: 4px;
	    fill: #2196F3;
   	}
`

export const PostActivity = styled.div`
	font-weight: 400;
	opacity: 0.5;
	font-size:0.9rem;
`

export const ProfilePictureWrapper = styled.div`
	width: 45px;
	height: 45px;
	margin-right: 10px;
`

export const StyledBackgroundImage = styled(BackgroundImage)`
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border-radius: 4px;
`

export const CreatorBottom = styled.div`
    justify-content: space-between;
    display: flex;
    padding-right: 4px;
    align-items: center;

    > div:nth-child(2) {
    	display: flex;
    	align-items: center;
    }

    svg {
    	width: 25px;
    	margin-left: 16px;
	}
`

export const ThumbnailRow = styled.div`
	display: inline-flex;
	margin-left: 8px;
`

export const Thumbnail = styled.div`
	width: 35px;
	height: 35px;
	border: 2px solid #fff;
    border-radius: 4px;
    overflow:hidden;

	> div {
		overflow: initial!important;
	}

	img {
		width:100%;
	}
`

