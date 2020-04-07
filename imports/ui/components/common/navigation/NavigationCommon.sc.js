import styled from 'styled-components'

export const NavigateBack = styled.div`
    display: inline-flex;
	align-items: center;
    padding: 12px 0px 10px;
    margin: 0px 16px;
    font-size: 1.3rem;
    margin: 0px;
    color: #222;

	svg {
		fill: #222;
	    width: 21px;
	    margin-top: -1px;
	}

	span {
	    opacity: 0.35;
	    font-size: 1.2rem;
	    transition: 0.35s;
	    font-weight: 600;
	}


	:hover {
		cursor: pointer;
		span {
			opacity: 1;
			transition:0.35s;
		}	
	}
`