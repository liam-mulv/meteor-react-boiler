import styled from 'styled-components'
import Slider from 'rc-slider';

export const FilterMenu = styled.div`
	padding: 0px 0px 30px;
`

export const FilterWrapper = styled.div`
	width: 100%;
	max-width: calc(100vw - 162px);
    height: 35px;
    position: relative;

    h4 {
	    font-size: 1.2rem;
	    font-weight: 800;
    	margin: 0px 10px 0px 0px;	
	    letter-spacing: 0px;
	    height: 35px;
	    line-height: 35px;
    }
`

export const FilterLeftItemWrapper = styled.div`
	display: inline-flex;
	height: 100%;
	float: left;

`

export const FilterRightItemWrapper = styled.div`
	display: inline-flex;
	margin-left: auto;
	height: 100%;
	position: absolute;
    right: 0px;
`

export const FilterMiddleItemWrapper = styled.div`
	display: inline-flex;
	flex: 1;
	height: auto; 
	position: relative;
	height: 100%;
	float: left;
	max-width: ${props => props.width && props.width};

`

export const FilterButton = styled.button`	
    padding: 1px 10px 2px;
    border-radius: 27px;
    display: inline-block;
    margin-left: 10px;
    font-size: 0.85rem;
    margin: ${props => props.margin ? props.margin :'0px 0px 0px 10px'};
    font-weight: 600;
    height: 100%;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    ${props => props.active && `
        opacity: 1;
        border-color: #000;
    `}

    ${props => props.selected && `
        opacity: 1;
        border-color: #000;
        color: #fff;
        background-color: #000;
    `}

    color: ${props => props.addFilter ? '#0000006e' : '#000'};
    border: ${props => props.addFilter ? '2px dashed #eee' : '2px solid #eee'};
    background-color: ${props => props.addFilter ? '#fff' : '#eee'};

    svg {
    	width: 17px;
    	height: 20px;
    	margin-bottom: -5px;
    	margin-right: 5px;
    }

`
export const FarLeftItemWrapper = styled.div`
    display: flex;
`

export const FilterResultsBy = styled.div`
    padding: 12px 0px 12px 0px;
    display: flex;
    height: 40px;
    width: ${props => props.width && props.width};
    max-width: ${props => props.maxWidth && props.maxWidth};
    // overflow: hidden;

`

export const Space = styled.div`
    width: 10px;
    display: inline-block;
`

export const FilterItemLeft = styled.div`
    display: flex;
    width: 100%;
    // margin-left: ${props => props.marginLeft && props.marginLeft};
`

export const FilterButtonWrapper = styled.div`
	position: relative;
    padding: 20px 0px 12.5px;
    border-top: 1px solid rgba(0,0,0, 0.05);
`


export const FilterSelectOverlay = styled.div`
	position: absolute;
    width: 370px;
    margin-top: 11px;
    ${props => props.position === 'left' && 'left: 10px;' };
    ${props => props.position === 'right' && 'right: 0px;' };
    font-size: 1.1rem;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: rgba(0,0,0,0.1) 0px 2px 15px 1px;
    padding: 20px;
    z-index: 11;
`

export const FilterSelectWrapper = styled.div`
    width: 100%;
    ${props => props.position === 'left' && 'left: 10px;' };
    ${props => props.position === 'right' && 'right: 0px;' };
    font-size: 1.1rem;
    border-radius: 5px;
    background-color: #fff;
    padding: 0px;
    z-index: 11;

    h3 {
    	margin: 0px 0px 10px;
    	font-weight: 800;
    	font-size: 1.1rem;
    }

    p {
    	margin: -10px 0px 0px!important;
    	font-size: 0.9rem;
    }
`

export const FilterOverlayTint = styled.div`
    height: 100%;
    position: fixed;
    background-color: rgba(0,0,0, 0.15);
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 360px;
    z-index: 11;
`

export const FilterSelectOverlayWrapper = styled.div`

`

export const FlexOverlayRow = styled.div`
	display: flex;
    padding: 8px 0px;
	display: block;
	position: relative;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;


    > div {
    	padding-left: 40px;	
    } 

	> div > div {
	    font-weight: 600;
	    font-size: 1.1rem;
	    opacity: 0.8;
	}

	p {
	    margin: 0px;
	    font-size: 0.95rem;
	    margin-top: 0px;
	    line-height: 1.3rem;
	    opacity: 0.5;
	}

	input {
		position: absolute;
	    opacity: 0;
	    top: 0px;
	    cursor: pointer;
	    height: 100%;
	    width: 100%;
	    z-index: 1111;
	    margin: 0px;
	}

	/////////////////////////////////////////////
	/* Create a custom checkbox */
	.checkmark {
	    position: absolute;
	    top: 8px;
	    left: 0px;
	    height: 21px;
	    width: 21px;
	  	background-color: #eee;
	  	border-radius: 4px;
	}

	/* On mouse-over, add a grey background color */
	:hover input ~ .checkmark {
	  	background-color: #ccc;
	    border-radius: 4px;
	}

	/* When the checkbox is checked, add a blue background */
	input:checked ~ .checkmark {
	    background-color: #000000;
	    border-radius: 4px;
	}

	/* Create the checkmark/indicator (hidden when not checked) */
	.checkmark:after {
	  content: "";
	  position: absolute;
	  display: none;
	}

	/* Show the checkmark when checked */
	input:checked ~ .checkmark:after {
	  display: block;
	}

	/* Style the checkmark/indicator */
	.checkmark:after {
	    left: 7px;
	    top: 4px;
	    width: 4px;
	    height: 8px;
	    border: solid white;
	    border-width: 0 3px 3px 0;
	    -webkit-transform: rotate(45deg);
	    -ms-transform: rotate(45deg);
	    -webkit-transform: rotate(45deg);
	    -ms-transform: rotate(45deg);
	    transform: rotate(45deg);
	}


	/////////////////////////////////////////////
	/* Create a custom radio button */
	.radio {
	    position: absolute;
	    top: 8px;
	    left: 0px;
	    height: 21px;
	    width: 21px;
	    background-color: #eee;
	    border-radius: 50%;
	}

	/* On mouse-over, add a grey background color */
	:hover input ~ .radio {
	  background-color: #ccc;
	}

	/* When the radio button is checked, add a blue background */
	input:checked ~ .radio {
	  background-color: #2196F3;
	}

	/* Create the indicator (the dot/circle - hidden when not checked) */
	.radio:after {
	  content: "";
	  position: absolute;
	  display: none;
	}

	/* Show the indicator (dot/circle) when checked */
	input:checked ~ .radio:after {
	  display: block;
	}

	/* Style the indicator (dot/circle) */
	.radio:after {
		top: 0px;
	    left: 0px;
	    width: 9px;
	    height: 9px;
	    border-radius: 50%;
	    background: black;
	    border: 6px solid #fff;
	    box-shadow: 0px 0px 0px 1px;
	}
`

export const FilterSwitch = styled.button`
    border: 1px solid #000000;
    margin: 4px;
    border-radius: 27px;
    font-size: 0.9rem;
    margin-left: 10px;
    background-color: #ffffff;
    color: #000000;
    padding: 0px;
    display: inline-block;

    div {
        float: left;
        padding: 8px 10px;
        border-radius: 27px;
    }


	    div:nth-child(1){
	        padding: 8px 15px;
	    }

    ${props => props.dataSet === 'collabs' && `

	    div:nth-child(1){
	        background-color: #000;
	        color: #fff;
	    }
	`}

	 ${props => props.dataSet === 'influencers' && `

	    div:nth-child(2){
	        background-color: #000;
	        color: #fff;
	    }
	`}
`

export const SliderContainer = styled.div`
	padding: 0px 10px;

	.rc-slider {
		padding: 0px;
	}

	.rc-slider-rail {
    	height: 2px;
	}

	.rc-slider-track {
    	height: 2px;
    	background-color: #a3a3a3;
	}

	.rc-slider-handle {
		margin-top: -9px;
		border: solid 1px #999999;
		width: 20px;
    	height: 20px;
	}

	.rc-slider-handle:hover {
	    border-color: #999999;
	}

	.rc-slider-handle:active {
	    border-color: #999999;
	    box-shadow: none;
	    cursor: -webkit-grabbing;
	    cursor: grabbing;
	}

	.rc-slider-handle:focus {
	    border-color: #999999;
	}
`

export const BarChart = styled.div`
	display: flex;
	height: 70px;
	align-items: flex-end;
`

export const Bar = styled.div`
	flex: 1;
	border-radius: 3px 3px 0px 0px;
	background-color: #000;
	opacity: ${props => props.isInRange ? '0.4' : '0.1'};
	height: ${props => props.height && props.height};
	margin-right: 1px;
`

export const InputContainer = styled.div`
	display: flex;
	padding: 0px;
`

export const PriceInputWrapper = styled.div`
	position: relative;
    padding: 5px;
    border: 0px solid #0000002b;
    border-radius: 4px;
    width: 40%;
    margin: 0px 4%;

	label:first-child {
		margin-left: 4px;
	    margin-top: 10px;
	    font-size: 71%;
	    opacity: 0.4;
	}

	label:nth-child(2) {
	    position: absolute;
	    left: 13px;
	    top: 29px;
	    font-weight: 600;
	}

`

export const PriceInput = styled.input`
    border: 0px;
    font-size: 1.2rem;
    width: calc(100% - 20px);
    margin-left: 20px;
    font-weight: 600;
`
