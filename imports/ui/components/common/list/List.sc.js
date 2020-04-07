import styled from 'styled-components'

export const List = styled.div`
	height: calc(100vh - 66px);
	padding: 0px;
	overflow: scroll;
	background-color: #fafafa;
	h1 {
    	margin: 0px 0px 12px;
	    font-size: 2rem;
	    font-size: 1.7rem;
	    font-weight: 800;
	}

	h4 {
		margin: 5px 0px 5px;
		font-weight: 600;
		font-size: 1.1rem;
	}

	> div {
	    padding: 30px 0px 0px;
		border-bottom: 0px solid #eee;
	}

	span {
		opacity: 0.5;
	}
`

export const LeftHeader = styled.div`
	display: flex;
	flex-direction: row!important;

	> div {
		display: flex;
    	align-items: center;
	}
`

export const RightHeader = styled.div`
	svg {
		width: 35px;
	}
`

export const EditListButton = styled.div`

	:hover {
		background-color: #000;
		
		cursor: pointer;
	}
`

export const ListHeaderIcon = styled.div`
	width: 55px;
	height: 55px;
    background-color: ${props => props.color ? props.color : '#fdb8d0'};
	border-radius: 5px;
	color: #fff;
	text-transform: uppercase;
	display: flex;
	align-items: center;
	flex-direction: row!important;
	text-align: center;
	font-size: 1.9rem;
	margin-right: 16px;

	> div {
	    width: 100%;
	    margin-bottom: -5px;
	}
`

export const Header = styled.div`
	padding: 0px!important;
	display: flex!important;
	justify-content: space-between!important;
	// border-bottom: 1px solid #eee;
	align-items: center;

	> div > div > div > span {
		font-size: 1rem;
	}

`

export const NoListFound = styled.div`
	text-align: center;
	background-color: #fafafa;
	padding: 10px;
	border-radius: 4px;
	color: rgba(0,0,0, 0.5);
`

export const Loading = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	text-align: center;
    height: 100%;
    padding: 100px 0px;

    > div {
    	flex: 1;
    }
`
