import styled from 'styled-components'

export const QuickNavShadowWrapper = styled.div`
`

export const QuickNavShadow = styled.div`
    width: calc(100% - 6px);
    box-shadow: 0px 1px 4px rgba(0,0,0,0.2);
    height: 2px;
    z-index: 2;
    position: -webkit-sticky;
    position: sticky;
    top: 111px;
    margin: 0px auto -5px;
`


export const QuickNavWrapper = styled.div`
    position: sticky;
    top: 60px;
    background-color: #fff;
    z-index: 11111;
    z-index: 3;
    height: 54px;
    
    margin-bottom: ${props => props.marginBottom && props.marginBottom};
`

export const QuickNavContainer = styled.div`
    width: 100%;

    padding: 18px 0px 14px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    height: 21px;
    
    font-weight: 700;

    #quick-nav-item-0 {
	    margin-left: 0px;
	}


    .active .active-marker:first-child {
        background-color: #000;
    }
    :hover {
        text-decoration: none!important;
    }
`

export const QuickNavItem = styled.div`
	display: inline-block;
    margin: 0px 16px;
    text-transform: uppercase;
    position: relative;
    font-size: 0.9rem;

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
    bottom: -16px;
`