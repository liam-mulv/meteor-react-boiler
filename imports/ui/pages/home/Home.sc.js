import styled from 'styled-components'
import Scrollbar from 'react-scrollbars-custom'

export const StyledScrollbars = styled(Scrollbar)`
	.ScrollbarsCustom-Wrapper {
		right: 0px!important;
	}
	.ScrollbarsCustom-ThumbY {
		opacity: 0.2!important;
		background-color: #000!important;
	}

	.ScrollbarsCustom-TrackY {
		width: 6px!important;
		background-color: rgba(0,0,0,0)!important;
		position: absolute;
		height: calc(100% - 110px)!important;
    	top: 90px!important;
	}

	.ScrollbarsCustom-ThumbX {
		opacity: 0.1!important;
		background-color: #000!important;
	}

	.ScrollbarsCustom-TrackX {
		opacity: 0;
		height: 6px!important;
		background-color: #fff!important;
		position: absolute;
		bottom: 12px!important;
    	left: 30px!important;
    	width: calc(100% - 30px)!important;
	}
`

export const DashboardContainer = styled.div`
    margin-top: 62px;
    padding: 0px 0px 0px 0px;

    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
      background-color: rgba(0,0,0,0);
      opacity: 0;
  	} 

	::-webkit-scrollbar-thumb {
	    background-color: rgba(0,0,0,0);
	    border-radius: 5px;
	}

	:hover::-webkit-scrollbar-thumb {
	    background-color: rgba(0,0,0,0.2);
	} 
    
`

export const FlexContainer = styled.div`
	display: flex;
	width: calc(100% - 160px);
	padding: 0px 80px;

	h4 {
		display: inline-block;
	}
`

export const FlexLeft = styled.div`
	background-color: red;
`

export const FlexMiddle = styled.div`
	background-color: orange;
	flex: 1;
	display: inline-flex;
    overflow-y: hidden;
    overflow-x: scroll;

`


export const FlexRight = styled.div`
	background-color: yellow;
	margin-left: auto;
`

export const RightMiddleWrapper = styled.div`
    display: flex;
    flex: 1 1 0%;
    flex-direction: row-reverse;
`