import styled from 'styled-components'

export const FacebookLoginContainer = styled.div`
	display: flex;
    height: calc(100vh - 81px);
	text-align: center;
	align-items: center;



	> div {
		flex: 1;
	}

	h1 {
		font-size: 2.5rem;
   		margin-bottom: 45px;
	}

	button {
	    background-color: #1877f2;
	    color: #fff;
	    border: 0px;
	    border-radius: 4px;
	    padding: 15px 20px;
	    font-size: 1.4rem;
	    font-weight: 700;
	}

	button span {
		display: flex;
    	align-items: center;
	}

	button svg {
		width: 30px;
    	margin-right: 10px;
	}
`