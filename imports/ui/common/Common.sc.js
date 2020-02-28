import styled from 'styled-components'
import { BackgroundImage } from "react-image-and-background-image-fade";
import { Element} from 'react-scroll'


export const ScrollElement = styled(Element)`
    padding-top: ${props => props.paddingTop ? props.paddingTop : '0px'};
`

export const PageContainer = styled.div`

    @media (min-width: 1100px) {
        // padding: 0px 90px;
    }
`

export const PageFlexContainer = styled.div`
    margin: auto;
    max-width: ${props => props.maxWidth && props.maxWidth};
    padding: ${props=> props.padding ? props.padding : '0px 35px'};
`

export const PageContent = styled.div`
    padding: 0px 0px;

    h1 {
        padding: 20px 0px 20px 0px;
        font-size: 2rem!important;
    }
    
    .block {
        margin: 40px 0px 0px 0px;
    }
    .block:first-child {
        margin: 0px 0px 0px 0px;
    }

    .block:nth-last-child(3) {
        margin: 10px 0px 0px 0px;
    }
`

export const Flex = styled.div`
    display: flex;
`


export const FlexSpacer = styled.div`
    display: flex;
    height: ${props => props.height && props.height};
`


export const LazyBackgroundImage = styled(BackgroundImage)`
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    z-index: 0!important;
`


export const PageTitleWrapper = styled.div`
    z-index: 2;
    position: relative;
    background-color: #fff;
    padding-top: 60px;
    ${props => props.flex && 'display: flex;'};


    h1 {
        font-size: ${props => props.fontSize ? props.fontSize : '3rem'};
        margin: 0px 0px 0px;
        font-weight: 900;
    }

    h4 {
        font-size: 1.1rem;
        font-weight: 600;
        margin: 10px 0px 0px;
        padding: 0px;
        background-color: #fff;
        z-index: 2;
        opacity: 1;
        // color: #808080;
    }

    @media (min-width: 1100px) { 
        padding: ${props => props.padding ? props.padding : "40px 76px 40px" };
    }

    svg {
        width: 22.5px;
        margin-bottom: -6px;
        fill: #2196F3;
    }
`
export const BreadCrumb = styled.p`
    margin: 40px 0px 20px;
    font-size: 1.1rem;
    opacity: 0.5;
`

export const InputField = styled.input`
	border: 1px solid #efefef;
	background-color: #fafafa;
    border-radius: 3px;
    color: #262626;
    font-size: 16px;
    height: 32px;
    margin-bottom: 15px;
    padding: 5px 15px;
    width: ${props => props.fullWidth && 'calc(100% - 30px)'};
`

export const DefaultBox = styled.div`
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    display: block
    text-align: ${props => props.centerText && 'center'};
    position: relative;
    padding: ${props => props.auth ? '20px 40px' : '20px'};
    max-width: ${props => props.auth && '400px'};
    margin: ${props => props.hCenter && 'auto'};
  	top: ${props => props.vCenter && '50%'};
  	transform: ${props => props.vCenter && 'perspective(1px) translateY(-50%)'}; 
`

export const PrimaryButton = styled.button`
	background-color: #3897f0;
    border: 1px solid #3897f0;
    border-radius: 4px;
    color: #fff;
    position: relative;
    display: block;
    font-weight: 600;
    padding: 10px 20px;
    text-align: center;
    font-size: 16px;
    margin-bottom: ${props => props.marginBottom && '15px'};
    width: ${props => props.fullWidth && '100%'};
`

export const ErrorMessage = styled.p`
    color: red;
`

export const Spacer = styled.div`
    margin: ${props => props.margin && props.margin};
`

export const Shine = styled.div`
    position: absolute;
    top: 0;
    left: -70px;
    height: 98px;
    width: 50px;
    background: rgba(255, 255, 255, 0.4);
    transition: all 0.8s linear;
    transform: skewX(20deg) translateX(0);
`

export const LazyLoadBackgroundImage = styled(BackgroundImage)`
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