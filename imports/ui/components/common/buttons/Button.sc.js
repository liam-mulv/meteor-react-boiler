import styled from 'styled-components'

export const Btn = styled.button`
    display: flex;
    align-items: center;
    min-width: ${props => props.minWidth && props.minWidth + 'px'};
    position: relative;
    min-width: 70px;
	padding: 12.5px 15px;
    font-size: 1rem;
    border-radius: 4px;
    font-weight: 700;
	margin-right: ${props => props.marginRight && '8px'};
	margin-left: ${props => props.marginLeft && '8px'};
	
	${props => props.type === 'primary' &&`
		background-color: #222;
	    border: 1px solid #222;
	    color: #fff;

	   	:hover {
		    cursor: pointer;
		    background-color: #292929;
		    border-color: #292929;
		}
	`};

	${props => props.type === 'secondary' &&`
		background-color: #f7f7f7;
	    border: 1px solid #f7f7f7;
	    color: #222;

	    :hover {
		    cursor: pointer;
		    background-color: #f3f3f3;
		    border-color: #f3f3f3;
		}
	`};

	${props => props.type === 'primary-alt' &&`
		background-color: #fff;
	    border: 1px solid #222;
	    color: #222;
	`};

	${props => props.type === 'secondary-alt' &&`
		background-color: #fff;
		border: 1px solid #fff;
	    border-bottom: 1px solid #ddd;
	    color: #222;
	`};

	svg {
		width: 16px;
		height: 16px
		opacity: ${props => props.iconOpacity && props.iconOpacity};
		fill: ${props => props.iconTone === 'dark' ? '#222' : '#fff'};
		padding: ${props => props.iconRight ? '0px 0px 0px 10px' : '0px 10px 0px  0px'};
	}
`

export const LoadingWrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    width: calc(100% - 30px);

	svg path { 
		stroke: ${props => props.type === 'primary' ? '#fff' : props.type === 'secondary' ? '#222' : props.type === 'primary-alt' ? '#222' : props.type === 'secondary-alt' ? '#222' : '#222'};
	}

	svg {
		opacity: 1!important;
		padding: 0px!important;
	}

`