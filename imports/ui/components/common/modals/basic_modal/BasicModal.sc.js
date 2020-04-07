import styled from 'styled-components'



export const BasicModalWrapper = styled.div`
	position: fixed;
	top: 0px;
	bottom: 0px;
	right: 0px;
	left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4;
`

export const BasicModalTint = styled.div`
	background-color: rgba(0,0,0,.4);
	position: fixed;
	top: 0px;
	bottom: 0px;
	right: 0px;
	left: 0px;	
	z-index: 5;
`

export const BasicModalContainer = styled.div`
	background-color: #fff;
	border-radius: 5px;
	z-index: 6;
	position: relative;
	// overflow: hidden;
`

export const CloseModalWrapper = styled.div`
    position: absolute;
    right: -28px;
    top: -28px;

    svg {
    	fill: #fff;
    	opacity: 0.5;
    	width: 30px;
    	height: 30px;
    }

    :hover {
    	cursor: pointer;
    }
`