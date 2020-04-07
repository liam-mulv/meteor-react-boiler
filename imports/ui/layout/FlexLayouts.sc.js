import styled from 'styled-components'

export const CustomFlexLayout = styled.div`
	display: flex;

	> div {
		height: calc(100vh - 49px);
		overflow: scroll;
		position: sticky;
		top: 65px
	}


	> div::-webkit-scrollbar-thumb {
	    background-color: rgba(0,0,0,0)!important;
	    border-radius: 5px;
	}

	> div:hover::-webkit-scrollbar-thumb {
	    background-color: #ddd!important;
	}

	> div:first-child {
		overflow-x: hidden;
		flex: 0 0 290px;
		// border-right: 1px solid #eee;
	}

	> div:nth-child(2) {
		overflow-x: hidden;
		padding: 0px 20px;
		flex: 0 0 550px;
		// border-right: 1px solid #eee;
	}

	> div:last-child {
		overflow-x: hidden;
		flex: 1;
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
		padding: 0px 0px 0px 0px;
	}
`

export const CollabFlex = styled.div`
	display: flex;

	> div {
		height: calc(100vh - 49px);
	}

	> div:first-child {
		flex: 0 0 66.66%;
		padding: 0px;
		overflow: scroll;
		top: 65px
	}

	> div:last-child {
		flex: 0 0 calc(33.33% - 1px);
		padding: 0px;
		border-left: 1px solid #eee;
	}


	> div:last-child > div {
		height: calc(100%);
		overflow: scroll;
		:hover::-webkit-scrollbar-thumb {
		    background-color: #ddd!important;
		}
	}

`

export const FivePannelFlexInner = styled.div`
	display: flex;

	> div {
		flex:1;
		padding: 0px 20px;
	}
`