import styled from 'styled-components'


export const DatePickerWrapper = styled.div`
	width: 100%;
	position: relative;

	.DayPickerInput {
	    width: 100%;
	}

	input {
		position: relative;
		z-index: 1;
	    background-color: #e6e6e654;
	    border: 2px solid #f7f7f7;
	    color: #222;
	    font-size: 1rem;
	    padding: 12.5px 15px;
	    border-radius: 3px;
	    display: flex;
	    flex: 1;
	    font-weight: 600;
		width: calc(100% - 30px);

		:hover {
		    cursor: unset;
		    background-color: #e6e6e687;
		    border: 2px solid #f2f2f2;
	    }

		:focus {
			background-color: #fff0;
			border-color: #eee;
		}

		::placeholder {
			opacity: 0.5;
		}
	}

	svg {
		width: 25px;
	    position: absolute;
	    right: 7px;
	    opacity: 0.3;
	    FONT-WEIGHT: 500;
	    top: 9px;	
		z-index: 0;
	}

	.DayPicker-Day {
		border-radius: 4px!important;
	}

	.DayPicker-Day--today {
		color: #000!important;
	}
	.DayPicker-Day:hover {
		background-color: #f7f7f7!important;
	}

	.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
		background-color: #222!important;
    	color: #fff!important;
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