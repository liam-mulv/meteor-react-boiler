import styled from 'styled-components'

export const InputFieldWrapper = styled.div`
	display: flex;
	flex: 1;
	position:relative;
	flex-direction: column;
`

export const InputFieldContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	flex: 1;
	position:relative;

  	> svg {
	    width: 24px;
	    position: absolute;
	    margin-left: 10px;
	    opacity: 0.4!important;
    }
`

export const InputField = styled.input`
	background-color: #f7f7f7;
	border: 2px solid #f7f7f7;
    color: #222;
    font-size: 1rem;
    padding: ${props => props.embeddedIconLeft !== undefined ? '12.5px 15px 12.5px 42px' : '12.5px 15px'};
    border-radius: 3px;
    display: flex;
    flex: 1;
    font-weight: 600;

	:hover {
	    cursor: unset;
	    background-color: #f3f3f3;
	    border-color: #f3f3f3;
    }

	:focus {
		background-color: #fff;
		border-color: #eee;
	}

	::placeholder {
		opacity: 0.5;
		font-weight: 400;
	}
`

export const ErrorMessage = styled.div`
    margin-top: 8px;
    border: 1px solid;
    padding: 8px 16px;
    border-radius: 4px;
    color: #fb5a80;
    font-weight: 600;
`

export const PressEnter = styled.div`
    position: absolute;
    right: 10px;
    background-color: #00000014;
    padding: 4px 8px;
    border-radius: 4px;
`

export const LoadingWrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    right: 10px;
    opacity: 0.4;
    
	svg path { 
		stroke: #222;
	}

	svg {
		opacity: 1!important;
		padding: 0px!important;
	}
`