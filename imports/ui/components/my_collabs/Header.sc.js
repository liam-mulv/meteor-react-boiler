import styled from 'styled-components'

export const CollabHeaderWrapper = styled.div`
    display: flex;
    position: sticky;
    top: 0px;
    justify-content: space-between;
    // border-bottom: 1px solid rgba(0,0,0, 0.1);
    ::after {
        box-shadow: 0 1px 0px 0 rgba(0, 0, 0, .10);
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


export const CollabHeaderTitle = styled.h1`
    padding: 8px 10px!important;
    font-size: 16px!important;
    font-weight: 800;
    background-color: #fff;
    z-index: 111;
    display: inline-flex;
    align-items: center;
    margin: 0px;

    > div {
        margin-left: 10px;
    }


    div {
        border: 0px!important;
    }

    span {
        margin-left: 12px;
    }


`

export const MessageWindowIcon = styled.div`
    border: 1px solid #f2f2f2;
    border-radius: 50%;
    padding: 2px;
    width: ${props => props.dimensions ? props.dimensions : '45px'};
    height: ${props => props.dimensions ? props.dimensions : '45px'};
`

export const CollabHeaderRightNavigation = styled.div`
    display: flex;
    margin-right: 30px;
`


export const NavigationItem = styled.div`
    position: relative;
    text-align: center;
    align-items: center;
    display: flex;
    margin: 0px 8px;
    opacity: 0.5;

    :hover {
        cursor: pointer;
    }
`

export const ActiveIndicator = styled.div`
    height: 3px;
    border-radius: 4px;
    width: 100%;
    margin-top: 16px;
    background-color: #000;
    opacity: 1;
    position: absolute;
    bottom: 0px;
    left: 0px;
    margin: 0px!important;
`