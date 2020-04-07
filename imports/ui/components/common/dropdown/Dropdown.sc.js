import styled from 'styled-components'
import Select from 'react-select';



export const StyledSelect = styled(Select)`
	background: rgba(0,0,0,0)!important;

	> div:hover {
		border-color: #ddd!important;
		box-shadow: 0px 0px 0px 1px #ddd;
		cursor: pointer;
	}
	> span {
		display:none;
	}
	.css-1pahdxg-control {
		border-color: #ddd!important;
		box-shadow: 0px 0px 0px 1px #ddd;
	}

	> div:first-child {
		min-width: 115px;
		background-color: rgb(250, 250, 250);
    	border-color: #fafafa;
    	display: inline-flex;
    	width: initial;
	}
	> div:nth-child(2) {
		min-width: 115px;
		background-color: rgb(250, 250, 250);
    	border-color: #fafafa;
    	display: inline-flex;
    	width: initial;
	}
	> div > div:first-child {
		padding: 4px;
	}
	> div > div > div:first-child {

	    background-color: ${
	    	props => 
	    	props.value.label === 'none' ? '#ddd' : 
	    	props.value.label === 'contacted' ? '#6ed9ff' : 
	    	props.value.label === 'negotiation' ? '#b8bafd' : 
	    	props.value.label === 'accepted' ? '#64e0cb' : '#ff6878'
	    };
	    color: #222;
	    padding: 4px 12px 4px 10px;
	    border-radius: 4px;
	    display: inline-flex;
	    font-weight: 600;
	    opacity: 1;
	    width: initial;
	    font-size: 0.9rem;
	    top: initial;
	    transform: initial;
	    position: initial;
	}

	> div:nth-child(3) {
		box-shadow: none!important;
		border: 1px solid #eee;
	}

	> div:nth-child(3) > div > div {
		margin-top: 4px;
	    color: #fff;
	    padding: 6px 16px 5px 12px;
	    border-radius: 4px;
	    display: inline-flex;
	    font-weight: 600;
	    opacity: 1;
	    width: initial;
	    font-size: 0.9rem;
	    top: initial;
	    transform: initial;
	    position: initial;
	    :hover {
	    	cursor: pointer;
	    }
	}
	> div:nth-child(3) > div > div:first-child {
		background-color: #ff6878;
		color: #222;
	}

	> div:nth-child(3) > div > div:nth-child(2) {
		background-color: #ddd;
		color: #222;
	}
	> div:nth-child(3) > div > div:nth-child(3){
		background-color: #6ed9ff;
		color: #222;
	}
	> div:nth-child(3) > div > div:nth-child(4) {
		background-color: #b8bafd;
		color: #222;
	}
	> div:nth-child(3) > div > div:nth-child(5) {
		background-color: #64e0cb;
		color: #222;
	}
	
	ul {
		transition: none!important;
	}
`
