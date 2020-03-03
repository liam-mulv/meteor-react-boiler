import styled from 'styled-components'



export const AveragesContainer = styled.div`
	padding: 20px 0px 0px;
	display: flex;
    justify-content: space-between;
    align-items: flex-start;

    span {
    	opacity: 0.5;
    }

    p {
	    font-size: 1.5rem;
	    font-weight: 600!important;
	    opacity: 1;
	    margin-top: 12px;
    }

	svg {
	    width: 18px;
	    margin-right: 5px;
	}
`

export const CommentToLikeRatioContainer = styled.div`
	margin-top: 20px;
	display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-items: center;

    span > span {
    	opacity: 0.5;
    }

	div {
		border: 1px solid #000;
	    padding: 3px 7px 1px;
	    display: inline-block;
	    font-size: 1rem;
	    border-radius: 2px;
	    margin-right: 10px;
	    font-weight: 600;
	    opacity: 1!important;
	}

	span:last-child > span {
		font-weight: 700;
	}

	svg {
		width: 17px;
	    margin-left: 7px;
	    margin-bottom: -2px;
	}
`