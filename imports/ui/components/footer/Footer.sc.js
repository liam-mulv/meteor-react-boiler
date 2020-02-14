import styled from 'styled-components'

export const FooterContainer = styled.div`
    margin-top: 50px;
`

export const FooterColumnContainer = styled.div`
    display: flex;
    margin: 0px 0px 0px;
    border-bottom: 0px solid #00000014;
    padding: 50px 30px 0px;
    border-top: 1px solid #eee;

    @media (min-width: 1100px) { 
        padding: 50px 0px;
    }
`


export const FooterColumn = styled.div`
	flex: 1;
`


export const FooterColumnHeader = styled.h4`
	font-size: 1rem;
	margin-bottom: 20px;
`


export const FooterList = styled.ul`
	padding: 0px;
	list-style: none;
`


export const FooterListItem = styled.li`
    margin-bottom: 20px;
	opacity: 0.4;
	font-size: 1rem;

	:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`


export const FooterBottomBar = styled.div`
    margin: 0px;
    display: flex;
    align-items: center;
    opacity: 0.4;
    border-top: 1px solid #eee;
    padding: 0px 25px;

    @media (min-width: 1100px) { 
        padding: 25px 0px 25px;
    }
`


export const FooterBottomBarBrand = styled.div`
    font-size: 1.7rem;
    margin: 7px 0px;
    font-weight: 900;
`


export const FooterBottomBarTrademark = styled.div`
	margin-left: 20px;
	font-size: 80%;
`

export const FooterBottomBarSocialsWrapper = styled.div`
	flex: 1;
`


export const FooterBottomBarSocials = styled.div`
	width: 127px;
    display: flex;
    float: right;
`

export const FooterBottomBarSocialIcon = styled.div`
    width: 35px;
    height: 35px;
    background-color: #000;
    border-radius: 50%;
    margin-right: 10px;
    transition: 0.2s;

    :hover {
    	cursor: pointer;
    	transform: scale(1.1);
    	transition: 0.2s;
    }

	svg {
	    width: 17px;
	    height: 17px;
	    fill: #fff;
	    padding: 9px 9px;
	}

`