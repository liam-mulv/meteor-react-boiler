import styled from 'styled-components'

export const ListItemWrapper = styled.div`
	display: flex;
	flex-direction: row!important;

	> a {
		flex: 1;
	}
`

export const ListItemContentWrapper = styled.div`
    justify-content: space-between;
	display: flex;
	flex-direction: row!important;
	flex: 1;
`

export const LeftList = styled.div`
	display: flex;
	flex-direction: row!important;

	> div {
	    align-items: center;
	    display: flex;
	}
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
	overflow: hidden;

	img {
		width: 100%;
	}

	> div {
		width: 100%;
	}
`

export const EditListButton = styled.div`
    width: 33px;
    display: flex;
    margin-left: 30px;

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
	
	img {
		height: 38px;
		width: 38px;
	    border-radius: 50%;
	    margin-left: -10px;
	    border: 3px solid #fff;
	}
`