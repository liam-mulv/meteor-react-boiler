import styled from 'styled-components'

export const QuickNavShadowWrapper = styled.div`
`

export const QuickNavShadow = styled.div`
    width: calc(100% - 6px);
    box-shadow: 0px 1px 4px rgba(0,0,0,0.2);
    height: 2px;
    z-index: 2;
    position: -webkit-sticky;
    position: ${props => props.notSticky ? 'initial' : 'sticky'};
    top: 111px;
    margin: 0px auto -5px;
`


export const QuickNavWrapper = styled.div`
    position: ${props => props.notSticky ? 'initial' : 'sticky'};
    top: ${props => props.stickyPosition ? props.stickyPosition : '60px'};
    background-color: #fff;
    z-index: 11111;
    z-index: 3;
    height: 50px;
    
    margin-bottom: ${props => props.marginBottom && props.marginBottom};
`

export const QuickNavContainer = styled.div`
    padding: ${props => props.padding ? props.padding : '14px 35px 10px'};
    border-top:  ${props => props.topBorder ? '1px solid #eee' : '0px'};
    border-bottom: 1px solid #eee;
    height: 21px;
    font-weight: 600;

    #quick-nav-item-0 {
	    margin-left: 0px;
	}


    .active .active-marker:first-child {
        background-color: #000;
    }

    .active div {
        color: #000;
    }
    :hover {
        text-decoration: none!important;
    }
`

export const QuickNavItem = styled.div`
	display: inline-block;
    margin: 0px 12px;
    text-transform: capitalize;
    position: relative;
    font-size: 16px;
    color: #7a7d85;

    :hover {
        cursor: pointer;
        text-decoration: none;
    }
`

export const ActiveMarker = styled.div`
    width: 100%;
    height: 3px;
    background-color: rgba(0,0,0,0);
    position: absolute;
    bottom: -14px;
`