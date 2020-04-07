import styled from 'styled-components'




export const EditListModalContainer = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
   	box-shadow: 0px 1px 2px rgba(0,0,0, 0.2);
   	border-radius: 5px;

   	form {
   		padding: 0px 16px 24px;
     	display: flex;
    	flex-direction: column;  		
   	}
`


export const Header = styled.div`
	padding: 16px;
	display: flex;
	flex-direction: row;
`

export const HeaderText= styled.div`
	display: flex;
	flex-direction: column;

	h1 {
		margin: 0px 0px 5px;
		font-size: 1.4rem;
		font-weight: 700!important;
		white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    max-width: 300px;
	    padding: 8px 0px;
	}

	> div {
	    position: relative;
	    width: max-content;
	}

	svg {
		width: 18px;
	    opacity: 0.4;
	    position: absolute;
	    top: 7px;
	    right: -25px;
	}

	svg:hover {
		cursor: pointer;
	}

	span {
		font-size: 1rem;
		opacity: 0.5;
	}

	input {
		font-weight: 700!important;
		font-size: 1.4rem;
		border: 0px;
    	border-top: 1px solid #fff;
    	margin: 0px 0px 6px;
    	background-color: #eee
    	font-family: Maisonneue!important;
	}
`

export const ListIcon = styled.div`
	width: 60px;
	height: 60px;
    background-color: ${props => props.color ? props.color : '#fdb8d0'};
	border-radius: 5px;
	color: #fff;
	text-transform: uppercase;
	display: flex;
	align-items: center;
	flex-direction: row;
	text-align: center;
	font-size: 2.2rem;
	margin-right: 16px;

	> div {
		width: 100%;
	}
`

export const List = styled.div`
	max-height: 300px;
	overflow: scroll;
	border-bottom: 1px solid #eee; 
	border-top: 1px solid #eee; 
	overflow-x: hidden;

	span {
		font-size: 80%;
		opacity: 0.5;
		font-weight: 400;
	}
`

export const CreatorListItem = styled.div`
	padding: 8px 16px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

export const ListItemLeft = styled.div`
	display: flex;
	align-items: center;

	> div {
		font-size: 1rem;
		font-weight: 600;
	}

	img {
		width: 45px;
		height: 45px;
		border-radius:4px;
		margin-right: 8px;
	}
`

export const ListItemRight = styled.div`
	display: flex;
	align-items: center;

	svg {
	    width: 15px;
	    opacity: 0.2;
	}

	svg:hover {
		cursor: pointer;
	}
`

export const Footer = styled.div`
	border-top: ${props => props.borderTop && '1px solid #eee'}; 

	padding: 16px;
	justify-content: space-between;
    display: flex;
`

export const Button = styled.button`
    text-align: center;
    padding: 12px 15px;
    background-color: ${props => props.primary ? '#222' : props.warning ? '#fff' : props.secondary ? '#fff' : '#222'};
    border-radius: 4px;
    border: 1px solid;
    border-color: ${props => props.primary ? '#222' : props.warning ? '#ff6878' : props.secondary ? '#222' : '#222'};
    font-size: 1rem;
    color: ${props => props.primary ? '#fff' : props.warning ? '#ff6878' : props.secondary ? '#222' : '#fff'};
    font-weight: 700;
    margin-left: 8px;
`