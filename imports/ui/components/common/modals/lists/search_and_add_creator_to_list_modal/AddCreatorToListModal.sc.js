
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

export const Header = styled.div`
	padding: 24px 16px 5px;

	h1 {
		margin-top: 0px;
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
		background-color: #fff;
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

export const ListCount = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row!important;
    font-weight: 400;
    
	> div {
	    height: 20px;
	    align-items: center;
	    display: flex;
	    padding: 2px 7px 0px;
	    background-color: #eee;
	    border-radius: 15px;
	}
`


export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    span {    
    	position: absolute;
	    height: 100%;
	    align-items: center;
	    display: flex;
	    padding: 2px 12px;
	    font-size: 1.2rem;
	}
`

export const LottieWrapper = styled.div`
	opacity: 0.5;
	position: absolute; 
	right: 10px;
	top: 8px;
`


export const InputField = styled.input`
    padding: 12px 20px 12px 34px;
   	font-size: 1rem;
	border-radius: 2px;
	color: rgba(0,0,0, 0.5);
	background-color: #eee;
	border: 1px solid #eee;

	:focus {
		background-color: #fff;
		border: 1px solid #000;
	}
`

export const SuggestionsWrapper = styled.div`
    position: absolute;
    top: 44px;
    width: 100%;
    background-color: #fff;
	padding: 0px;
    border: 1px solid #eee;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.3);
    border-radius: 4px;
`

export const Suggestions = styled.div`
    max-height: 180px;
    overflow: scroll;
`

export const Suggestion = styled.div`
	padding: 5px 16px;
	display: flex;
	align-items: center;

	img {
	    width: 35px;
	    height: 35px;
	    border-radius: 4px;
	    margin-right: 10px;
	}

	:hover {
		cursor: pointer;
		background-color: #fafafa;
	}
`

export const AddSuggestionFromInstagram = styled.div`
	padding: 11px 16px;
	display: flex;
	align-items: center;
	background-color: #fafafa;
    display: flex;
    justify-content: space-between;

	button {
	    background-color: #222;
	    padding: 10px 16px;
	    border: 0px;
	    color: #fff;
	    border-radius: 4px;
	    font-size: 1rem;
	    font-weight: 700;
	}

	:hover {
		cursor: pointer;
		background-color: #fafafa;
	}

	button svg path{
        stroke :#fff;
    }
`

export const ErrorMessage = styled.div`
    background-color: #ff6878;
    border-radius: 4px;
    padding: 5px 10px;
    margin: 16px;
    color: #ffffff;
    text-align: center;
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


