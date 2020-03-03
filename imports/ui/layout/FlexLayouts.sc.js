import styled from 'styled-components'

export const CustomFlexLayout = styled.div`
	display: flex;

	> div:first-child {
		flex:1.2;
		border-right: 1px solid #eee;
	}

	> div:nth-child(2) {
		height: calc(100vh - 81px);
		overflow: scroll;
		position: sticky;
		top: 81px;
		padding: 0px 30px;
		flex: 2;
		border-right: 1px solid #eee;
	}

	> div:last-child {
		height: calc(100vh - 81px);
		overflow: scroll;
		position: sticky;
		top: 81p
		flex: 1.8;
	}
`

export const TwoPannelFlexInnerPadding = styled.div`
	display: flex;

	> div:first-child {
		flex:1;
		padding: 0px 15px 0px 0px;
	}

	> div:last-child {
		flex:1;
		padding: 0px 0px 0px 15px;
	}
`