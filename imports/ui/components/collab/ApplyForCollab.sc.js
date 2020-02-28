import styled from 'styled-components'

export const ApplyForCollabWrapper = styled.div`
	position: sticky;
	top: 50px;
	margint-top: 20px;
`

export const ApplyForCollabContainer = styled.div`
	border: 1px solid #eee;
	padding: 25px 35px;
	border-radius: 4px;

	h2 {
		font-size: 1.5rem;
	}
	h4 {
		font-size: 1.3rem;
		margin-bottom: 0px;
	}

	ul {
		padding: 0px 20px;
		margin: 5px 0px 20px;
		list-style: none;
	}

	li {
		padding: 5px 0px 5px 5px;
	    position: relative;
	    color: #7a7a7a;
	}


	li svg {
		left: -19px;
	    width: 14px;
	    position: absolute;
	    top: 8px;
	}


	p {
		text-align: center;
	}

	p:nth-child(2) {
		text-align: left;
	}
`


export const ApplyButtonContainer = styled.div`
	display: flex;



	button {
		position: relative;
		border: 0px;
		border-radius: 3px;
		color: #fff;
		padding: 15px 10px;
		background-color: #222;
		flex: 1;
		font-size: 1.1rem;
    	font-weight: 700;
    	text-align: center;
	}


    button:hover {
        cursor: pointer;
    }


    button div {
    	width: 40%;
    	left: -40%;
    	opacity: 0.65;
    	transition: all 0.5s linear;
    }

    button:hover div {
        transform: skewX(20deg) translateX(600px);
    }
`

export const ContactCollabHostContainer = styled.div`
	// background-color: #fafafa;
	// padding: 25px 35px;
	display: flex;
	margin-top: 25px;
	border-radius: 4px;

	button {
		border: 1px solid #eee;
		color: #000;
		border-radius: 3px;
		padding: 15px 10px;
		background-color: #fff;
		flex: 1;
		font-size: 1.1rem;
    	font-weight: 600;
    	text-align: center;
	}
`

