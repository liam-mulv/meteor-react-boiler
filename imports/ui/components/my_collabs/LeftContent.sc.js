import styled from 'styled-components'
import { BackgroundImage } from "react-image-and-background-image-fade";


export const CollabListWrapper = styled.div`
   overflow: scroll;
    height: calc(100vh - 122px);

    ::-webkit-scrollbar {
        opacity: 0;
        position: fixed;
        width: 4px;
        height: 4px;
        background-color: rgba(0,0,0,0)!important;
        overflow: auto!important;
    } 

    ::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0, 0)!important;
        border-radius: 5px;
    }

    ::-webkit-scrollbar-track {
        background-color: rgba(0,0,0,0)!important;
    }

    &:hover::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0, 0.35)!important;
    }


	li:last-child {
		margin-bottom: 20px;
	}
`

export const CollabList = styled.ul`
	margin: 0px;
	padding: 0px 6px 0px 10px;
	height: ${props => props.height ? props.height + 'px' : '0px' };
	overflow: hidden;
	transition: 0.4s;
`

export const CollabListHeader = styled.h1`
	padding: 8px 10px!important;
	font-size: 1.4rem!important;
	font-weight: 800;
	position: sticky;
	top: 0px;
	background-color: #fff;
	z-index: 111;
	display: inline-flex;
	align-items: center;
	width: calc(100% - 20px)!important;

	> div {
		margin-left: 10px;
	}


	div {
		border: 0px!important;
	}

	span {
		margin-left: 12px;
	}

	::after {
	    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .10);
	    content: '';
	    height: 10px;
	    left: 0;
	    opacity: 1;
	    position: absolute;
	    top: 50px;
	    transition: opacity .25s ease-out;
	    width: 100%;
	}
`

export const CollabListSubHeader = styled.h4`
	margin: ${props => props.margin ? props.margin : '0px 0px 0px'};
    text-transform: uppercase;
    font-size: ${props => props.isCollapsed ? '0.75rem' :'0.9rem'};
    padding: ${props => props.isCollapsed ? '15px 10px 15px 12px' : '15px 20px'};
    color: #00000052;
	display: flex;
	font-weight: 800;
	text-align: ${props => props.isCollapsed && 'center'};

	${props => !props.noBorder &&  'border-top: 1px solid #eee'};

	:hover {
		cursor: pointer;
	}

    span {
    	// background-color: ${props => props.type === 'active' ? 'rgb(1,153,255)' : props.type === 'completed' ? 'rgb(137, 210, 53)' : 'rgb(229, 27, 56)'};
	    padding: 2px 6px 1px;
	    border-radius: 24px;
	    margin-top: 0px;
	    font-weight: 700;
	    margin-left: 5px;
	    // color: #fff;
	    height: 15px;
	    background-color: #f2f2f2;
    }
`

export const CollabListItemWrapper = styled.li`
    flex: 1;
    display: flex;
    flex: 1 1 auto;
    height: 64px;
    position: relative;
    padding: 0px 10px;
    border-radius: 5px;
    ${props => props.active && 'background-color: #f2f2f2'};
    ${props => props.active ? 'color: #000' : 'color: #000' };

`

export const StyledBackgroundImage = styled(BackgroundImage)`
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;

    div {
        border-radius: 50%;
    	overflow:hidden;	
    }
`

export const CollabListItemIconWrapper = styled.div`
    align-items: center;
    margin-right: 12px;
    display: flex;
`

export const CollabListItemIcon = styled.div`
	border: 1px solid #f2f2f2;
	border-radius: 50%;
	padding: 2px;
    width: ${props => props.dimensions ? props.dimensions : '45px'};
    height: ${props => props.dimensions ? props.dimensions : '45px'};
`

export const CollabListItemTextWrapper = styled.div`
    flex: 1 1 0px;
    justify-content: center;
    min-width: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
`

export const CollabListItemTopText = styled.div`
	justify-content: space-between;
	font-size: 16px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	font-weight: ${props => props.unread ? 800 : 600 };
`

export const CollabListItemBottomText = styled.div`
    align-items: baseline;
    justify-content: left;
    margin-right: 25px;
	display: flex;

	span {
		opacity: ${props => props.unread ? '1' : '0.8' };
		font-weight: ${props => props.unread ? 800 : 600 };

	}
	> span {
		flex: 0 1 auto;
	    min-width: 0;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: pre;
	}

	div:nth-child(2) {
		padding: 0px 5px;
	}

	font-size:14px;

`


export const UnreadIndicator = styled.div`
	width: 12px;
	height: 12px;
	background-color:#000;
	border-radius:50%;
	position: absolute;
	top: calc(50% - 6px);
	right: 10px;
`