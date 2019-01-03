import styled from 'styled-components'

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