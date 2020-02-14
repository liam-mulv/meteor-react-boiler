import styled from 'styled-components'


export const StickyInviteFooter = styled.div`
	position: fixed;
    bottom: 0px;
    left: 0px;
    display: flex;
    right: 0px;
    background-color: #000;
    z-index: 1111;
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    padding: 10px 80px;
    color: #fff;
    transform: ${props => props.isStuck ? 'translateY(0px)' : 'translateY(78px)'};
    transition: 0.3s;
    p {
    	font-size: 1rem;
    	font-weight: 800;
    } 

    span {
    	font-weight: 600;
    }

    svg {
    	width: 15px;
	    fill: #fff;
	    margin-left: 5px;
    }
`

export const StickyInviteFooterLeft = styled.div`
    display: flex;
    align-items: center;
    font-weight: 800;

    button {
    	padding: 10px 30px;
	    background-color: #fff;
	    border: 1px solid #fff;
	    margin-left: 10px;
	    border-radius: 2px;
	    font-size: 1rem;
	    font-weight: 700;
        position: relative;
        overflow: hidden;
    }

    button:hover .button-shine {
        transform: skewX(20deg) translateX(300px);
    }

`


export const StickyInviteFooterRight  = styled.div`
    display: flex;
`
export const ProfilePicture = styled.div`
    width: 45px;
    height: 45px;
    background-image: url('${props => props.image && props.image}');
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    margin: 5px 10px 0px 0px;
    background-color: #fff;
    ${props => props.size && 'background-size:'+props.size};

    ${props => props.noRepeat && 'background-repeat: no-repeat'};
`
