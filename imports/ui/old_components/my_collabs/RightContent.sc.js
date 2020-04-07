import styled from 'styled-components'

export const DragAndDropWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 35%;
    min-height: 255px;
    padding: 25px;
    border-bottom: 1px solid #eee;


    svg {
	   	flex: 1;
	    max-width: 90px;
	    margin: auto;
	    padding: 20px;
	    background-color: #eee;
	    border-radius: 10px;
	    opacity: 0.5;
	    margin-bottom: 18px;
    }
`

export const DragAndDropTextWrapper = styled.div`
    flex: 1;

	h4 {
		margin: 0px;
	}

	p {
		margin: 0px;
	}
`

export const ImageTextWrapper = styled.div`
	text-align: center;
	width: 100%;
`