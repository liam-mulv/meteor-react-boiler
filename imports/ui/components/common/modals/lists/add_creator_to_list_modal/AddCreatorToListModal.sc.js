
import styled from 'styled-components'

export const AddToListModalWrapper = styled.div`

`

export const AddToListModalContainer = styled.div`
    width: 400px;
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

export const CloseModal = styled.div`

`

export const ProfilePicture = styled.div`
	margin-right: 8px;
    display: flex;
    align-items: center;
    
	img {
		width: 30px;
		border-radius: 4px;
	}
`

export const Header = styled.div`
	padding: 24px 16px 5px;

	h1 {
		margin-top: 0px;
	}
`

export const LottieWrapper = styled.div`
	svg path {
        stroke: ${props => props.color ? props.color : '#fff'};
    }
`

export const List = styled.div`
	max-height: 200px;
	overflow: scroll;
	// background-color: #fafafa;
	border-bottom: 1px solid #eee; 
	border-top: 1px solid #eee; 

	> div {
		padding: 10px 16px;
		font-size: 0.95rem;
		font-weight: 600;
		// border-bottom: 1px solid #eee; 
		display: flex;
    	justify-content: space-between;
	}
	> div:hover {
		cursor: pointer;
		background-color: #fafafa;
	}

	> div > div {
		display: flex;
		flex-direction: column;
	}

	span {
		font-size: 80%;
		opacity: 0.5;
		font-weight: 400;
	}
`

export const ListIcon = styled.div`
	min-width: 45px;
	max-width: 45px;
	max-height: 45px;
	min-height: 45px;
    background-color: ${props => props.color ? props.color : '#fdb8d0'};
	border-radius: 5px;
	color: #fff;
	text-transform: uppercase;
	display: flex;
	align-items: center;
	flex-direction: row!important;
	text-align: center;
	font-size: 1.5rem;
	margin-right: 16px;

	> div {
		width: 100%;
	}
`

export const ListItemTextWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row!important;
`


export const ListCount = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row!important;
    font-weight: 400;
    
	> div > div {
	    height: 20px;
	    align-items: center;
	    display: flex;
	    padding: 2px 7px 0px;
	    background-color: #eee;
	    border-radius: 15px;
	}
`


export const InputField = styled.input`
	padding: 10px;
	font-size: 0.9rem;
	border-radius: 2px;
	color: rgba(0,0,0, 0.5);
	background-color: #eee;
	border: 1px solid #eee;
	margin: 15px 0px 0px;

	:focus {
		background-color: #fff;
		border: 1px solid #000;
	}
`


export const Button = styled.button`
    margin-top: 13px;
    text-align: center;
    padding: 12px 10px;
    background-color: #222;
    border-radius: 2px;
    border: 1px solid #222;
    font-size: 1rem;
    color: #fff;
    font-weight: 700;
`

export const NoListFound = styled.div`
	text-align: center;
	background-color: #fafafa;
	padding: 10px;
	border-radius: 4px;
	color: rgba(0,0,0, 0.5);
`


