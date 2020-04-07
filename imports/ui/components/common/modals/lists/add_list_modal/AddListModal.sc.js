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

export const Header = styled.div`
	padding: 24px 16px 5px;

	h1 {
		margin-top: 0px;
	}
`


export const InputField = styled.input`
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  color: rgba(0,0,0,0.5);
  border: 2px solid #eee;

	:focus {
		background-color: #fff;
		border-color:#000;
	}

  ::placeholder {
    color: rgba(0,0,0,0.3);
  }
`


export const Button = styled.button`
    margin-top: 13px;
    text-align: center;
    padding: 12px 15px;
    background-color: #222;
    border-radius: 2px;
    border: 1px solid #222;
    font-size: 1rem;
    color: #fff;
    font-weight: 700;
`
