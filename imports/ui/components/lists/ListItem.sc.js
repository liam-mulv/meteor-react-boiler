import styled from 'styled-components'

export const ListItemWrapper = styled.div`
	display: flex;
	flex-direction: row!important;
    padding: 10px;
   	font-size: 0.9rem;
	display: flex;
	justify-content: space-between;
	border-radius: 4px;

	> a {
		flex: 1;
	}

	:hover {
		background-color: #fafafa;
	}
`

export const ListItemContentWrapper = styled.div`
    justify-content: space-between;
	display: flex;
	flex-direction: row!important;
	flex: 1;
`
export const ListItemTextWrapper = styled.div`
	display: flex;
	align-items: center;

	> div {
		display: flex;
    	flex-direction: column;
	}

	h4 {
		margin: 0px 0px 2px!important;
	}
`

export const LeftList = styled.div`
	display: flex;
	flex-direction: row!important;
`
export const RightList = styled.div`
	display: flex;
	flex-direction: row!important;
	>div:last-child {
		margin-left: 30px;
	}
`
export const ListIcon = styled.div`
	width: 45px;
	height: 45px;
    background-color: ${props => props.color ? props.color : '#fdb8d0'};
	border-radius: 5px;
	color: #fff;
	text-transform: uppercase;
	display: flex;
	align-items: center;
	flex-direction: row!important;
	text-align: center;
	font-size: 1.5rem;
	margin-right: 16px;

	> div {
		width: 100%;
	}
`

export const EditListButton = styled.div`
    width: 33px;
    display: flex;
    margin-left: 8px;
    justify-content: center;

    svg {
		width: 20px;
		fill: #000;
		opacity: 0.5;
		z-index: 111111;
		position: relative;
	}
`

export const CreatorImages = styled.div`
	display: inline-flex;
	flex-direction: row!important;
	align-items: center;

`

export const CreatorImage = styled.div`
	z-index: ${props => props.zIndex && props.zIndex};
	position: relative;
	margin-left: -12.5px;

	> a {
		display: flex;
    	align-items: center;
	}
	
	img {
		height: 38px;
		width: 38px;
	    border-radius: 50%;
	    border: 3px solid #fff;
	}

`

export const MoreCreators = styled.div`
	height: 38px;
	width: 38px;
	border-radius: 50%;
	margin-left: -12.5px;
	position: relative;
	background-color: #222;
	color: #fff;
	display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 600;
   	border: 3px solid #fff;
`