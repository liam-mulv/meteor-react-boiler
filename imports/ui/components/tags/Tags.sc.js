import styled from 'styled-components'

export const TagWrapper = styled.div`
	h1 {
		margin-bottom: 15px;
	}

	p {
        font-size: 1.1rem!important;
		margin-bottom: 20px;
	}
`

export const TagList = styled.div`
    opacity: 0.6;
    line-height: 1.5rem;
    font-size: 1.1rem;
    overflow: auto;
`

export const Tag = styled.div`
	opacity: 1;
    margin-right: 8px;
    padding: 4px 11px 3px;
    background-color: #eee;
    border-radius: 20px;
    overflow: hidden;
    font-size: 1rem;
    float: left;
    text-transform: lowercase;
    font-weight: 700;
`