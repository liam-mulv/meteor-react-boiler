import styled from 'styled-components'

export const ProfileSidebar = styled.div`

`

export const InstagramFeed = styled.div`

`

export const ProfilePriceAndButtonWrapper = styled.div`
    z-index: 111;
    position: relative;
    background-color: #fff;
    padding-top: 60px;

    top: 50px;
    margint-top: 20px;

    ${props => props.flex && 'display: flex;'};

    border: 1px solid #eee;
    padding: 25px 35px;
    border-radius: 4px;

    h1 {
        font-size: 2rem!important;
        margin: 0px 0px 0px;
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
        padding: ${props => props.padding ? props.padding : "35px 25px" };
    }

    svg {
        width: 22.5px;
        margin-bottom: -6px;
        fill: #2196F3;
    }
`


export const PriceAndButtonsContainer = styled.div`

    margin: 40px 0px 10px;

    h3 {
        margin: 5px 0px!important;
    }
`


export const ProfilePictureContainer = styled.div`
    position: relative;
	width: 140px;
    height: 140px;
    border-radius: 50%;
    margin-right: 20px;

    button {
	    position: absolute;
	    padding: 13px 0px;
	    background-color: #fff;
	    z-index: 11111111;
	    width: 70px;
	    height: 70px;
	    border: 4px solid #000;
	    border-radius: 50%;
	    right: -10px;
	    box-shadow: 0px 0px 0px 7px rgba(255,255,255);
	    bottom: 0px;
    }

    button svg {
	    margin-left: calc(50% - 30px);
	    top: calc(50% - 30px);
	    z-index: 1111;
	    fill: #000;
	    width: 36px;
	    position: relative;
	    opacity: 1;
    }

    svg {
    	position: absolute;
    	width: 60px;
    	margin-left: calc(50% - 30px);
    	fill: #fff;
    	top: calc(50% - 30px);
    	opacity: 0;
    	z-index: 1111;
    }

    :hover svg{
    	opacity: 1;
      	// transition: 0.3s;
    }

    :hover {
    	cursor: pointer;
    }

    div:last-child::after {
	    content: '';
	    position: absolute;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    z-index: -1;
	    background: linear-gradient(rgba(33, 44, 62, 0) 33%,rgba(0, 0, 0, 0) 66%);
	    z-index: 1;
        transition:1s;
    	border-radius: 50%;
    }

    :hover div:last-child::after {
        background: linear-gradient(rgba(33, 44, 62, 0.15) 33%,rgba(0, 0, 0, 0.3) 66%)!important;
    }
`

export const ProfilePicture = styled.div`
    background-image: url("https://cdn.shopify.com/s/files/1/2033/1473/files/IMG_1794-final_2b7c5931-97c3-42c7-b765-0b4d6041ed5e_1024x1024.jpg?v=1509677496");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    padding-bottom: 0px;
    border-radius: 50%;
`

export const UserInfo = styled.div`
	display: flex;
	margin-top: 20px;
`

export const ProfileLeftAbsolute = styled.div`
    position: absolute;
    right: 0px;
    bottom: 30px;
    text-align: right;

    h1 {
        font-size: 1.5rem;
        margin: 10px 0px;
    }
`

export const ProfileLeft = styled.div`
    padding: 0px 0px 60px;

    h4 {
        margin-top: 0px;
        font-weight: 600;
        font-size: 1.2rem;
        line-height: 1.8rem;
    }

    p {
        max-width: 800px;
        margin: 0px!important;
        padding-top: 20px;
        font-size: 1.1rem!important;
    }

    svg {
        fill: #000;
    }
`
 
export const ProfileRight = styled.div`
    align-items: center;
    width: 33.333%;

    h1 {
        margin: 20px 0px;
    }
`


export const Username = styled.div`
    font-size: 1.1rem;
    margin: 20px 0px 0px;
   	font-weight: 800;
   	margin: auto;
    text-transform: lowercase!important;

   	span {
	    opacity: 0.4;
	    font-size: 1rem;
	    font-weight: 600;
   	}

   	svg {
   		width: 13px;
    	margin: 0px 3px -4px 0px;
   	}

`

export const ProfileStats = styled.div`
	margin: 20px 0px;
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

export const ProfileInfoFlex = styled.div`
    display: flex;
    width: 100%;
    margin: 0px 0px 0px;
    padding: 30px 0px 0px;

    > div:first-child {
         padding: 0px 8px 0px 0px;
    }   

    > div:last-child {
     	padding: 0px 0px 0px 8px;
    }   
`

export const ProfileInfoRow = styled.div`
    display: inline-flex;
    flex: 1;
    padding: 0px 8px;
`

export const InfoBlock = styled.div`
    margin: 0px;
    font-size: 1.1rem;
    flex: 1;
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 20px;

    svg {
        width: 15px;
        margin-right: 5px;
    }
`

export const ProfileButtonContainer = styled.div`
    display: flex;
    height: 45px;

	button {
        padding: 8px 20px 8px;
        background-color: #fff;
        font-size: 1.1rem;
        border-radius: 3px;
        font-weight: 700;
        position: relative;
        overflow: hidden;
        border-color: #000;
        color: #000;
        margin-right: 8px;
	}

	button:nth-child(1) {
        background-color: #000;
        border-color: #000;
        color: #fff;
        padding: 8px 25px 8px;
	}

	button:hover .button-shine {
		transform: skewX(20deg) translateX(300px);
	}

	button svg {
		width: 20px;
	    left: 13px;
        fill: #fff;
        margin-bottom: -3px;
	}

	button:nth-child(1) svg {
        width: 28px;

	}

    button:nth-child(3) svg {
        width: 18px;
        margin-bottom: -4px;

    }

    h3 {
        font-weight: 700;
        font-size: 1.1rem;
        margin: 13px 0px 0px 10px!important;
    }
`
export const InviteButtonContainer = styled.div`
    display: flex;
    margin-top: 30px;


    button {
        position: relative;
        border: 0px;
        border-radius: 3px;
        color: #fff;
        padding: 15px 10px;
        background-color: #222;
        flex: 1;
        font-size: 1.1rem;
        font-weight: 700;
        text-align: center;
    }


    button:hover {
        cursor: pointer;
    }


    button div {
        width: 40%;
        left: -40%;
        opacity: 0.65;
        transition: all 0.5s linear;
    }

    button:hover div {
        transform: skewX(20deg) translateX(600px);
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



export const InfoTitle = styled.div`
	font-weight: 800;
    margin: 0px 0px 12px;
	font-size: 1.2rem;

	svg {
	    height: 17px;
	    width: 17px;
	    margin-right: 5px;
	    margin-bottom: -2px;
	}
`

export const InfoDescription = styled.div`
	opacity: 0.6;
	line-height: 1.5rem;
	font-size: 1.1rem;
	overflow: auto;

    svg {
        margin-bottom: 0px;
        width: 14px;
        fill: #000;
        margin-right: 5px;
    }
`

export const Tag = styled.div`
    opacity: 1;
    margin-right: 5px;
	padding: 3px 10px 2px;
    background-color: #eee;
    border-radius: 20px;
    overflow: hidden;
    font-size: 1rem;
    float: left;
    text-transform: lowercase;
    font-weight: 700;

    :hover {
        cursor: pointer;
        background-color: #ddd;
    }
`

