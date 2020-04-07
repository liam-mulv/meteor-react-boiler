import styled from 'styled-components'

export const SuggestionsWrapper = styled.div`
    position: absolute;
    top: 44px;
    width: 100%;
    background-color: #fff;
	padding: 0px;
    border: 1px solid #eee;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.3);
    border-radius: 4px;
    z-index: 10;
`
export const Suggestions = styled.div`
    max-height: 180px;
    overflow: scroll;
`

export const Suggestion = styled.div`
	padding: 5px 16px;
	display: flex;
	align-items: center;
	background-color: ${props => props.active && '#f7f7f7'};


	img {
	    width: 35px;
	    height: 35px;
	    border-radius: 4px;
	    margin-right: 10px;
	}

	:hover {
		cursor: pointer;
		background-color: #fafafa;
	}
`

export const SuggestionFooter = styled.div`
	padding: 11px 16px;
	display: flex;
	align-items: center;
	background-color: #fafafa;
    display: flex;
    justify-content: space-between;

	button {
	    background-color: #222;
	    padding: 10px 16px;
	    border: 0px;
	    color: #fff;
	    border-radius: 4px;
	    font-size: 1rem;
	    font-weight: 700;
	}

	:hover {
		cursor: pointer;
		background-color: #fafafa;
	}

	button svg path{
        stroke :#fff;
    }
`