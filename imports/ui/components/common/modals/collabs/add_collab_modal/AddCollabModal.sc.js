import styled from 'styled-components'

export const CreateCollabWrapper = styled.div``

export const CreateCollabModalContainer = styled.div`
    width: 550px;
    display: flex;
    flex-direction: column;
   	box-shadow: 0px 1px 2px rgba(0,0,0, 0.2);
   	border-radius: 5px;
    // overflow: hidden;
   	form {
   		padding: 0px 16px 24px;
     	display: flex;
    	flex-direction: column;  		
   	}
`

export const ModalContent = styled.div`
  padding: 16px 16px 0px;

`

export const Footer = styled.div`
  display:flex;
  justify-content: space-between;
  padding: 16px 0px;
`

export const Form = styled.div`
  display: flex;
  padding: 24px 0px 0px;
  flex-direction: column;
`

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  > svg {
    width: 24px;
    position: absolute;
    margin-left: 10px;
    opacity: 0.4;
  }
`


