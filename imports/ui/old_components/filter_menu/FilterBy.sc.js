import styled from 'styled-components'

export const ReactTagsWrapper = styled.div`
    position: relative;
    width: 100%;
    display: inline-flex;
    display: flex;
    align-items: center;

    h4 {
        margin: 3px 0px;
        font-size: 1.2rem;
    }
`

export const ReactTags = styled.div`
    padding: 0px;
    border: 0px solid #D1D1D1;
    border-radius: 1px;
    font-size: 1em;
    line-height: 1.2;
    cursor: text;
    white-space: nowrap;
    margin-top: -2px;
    width: calc(100% - 110px);
    margin-left: 10px;

    button {
        border-radius: 27px!important;
        display: inline-block!important;
        margin-left: 10px!important;
        font-size: 0.85rem!important;
        margin: 0px 6px 0px 0px!important;
        font-weight: 600!important;
        height: 33px!important;
        letter-spacing: 0.5px!important;
        opacity: 1;
        border-color: #000;
        color: #fff;
        // border: 2px solid #2a2a2a;
        // background-color: #2a2a2a;  
        padding: 6px 10px;
        border: 2px solid #000;
        background-color: #000;  
    }


    button svg {
        width: 9px;
        fill: #fff;
        margin-bottom: -3px;
        margin-left: 5px;
        margin-right: 3px;
    }
`

export const TagButton = styled.button`
    background-color: #000;

    ::after {
      content: '\2715';
      color: #AAA;
      margin-left: 8px;
    }



`

export const ReactTagsSelectedWrapper = styled.div`
    display: inline-flex;
    padding-bottom: 4px;
    margin-bottom: -12px;
    max-width: calc(100% - 170px);
    position: relative;

    ::before {
        z-index: 11;
        content: '';
        width: 35px;
        background-image: linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 90%);
        position: absolute;
        bottom: -2px;
        left: 0px;
        top: 0px;
        transition: 0.3s;
        opacity: ${props => props.overflowLeft ? '1' : '0'};
    }

    ::after {
        z-index: 11;
        content: '';
        width: 35px;
        background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 90%);
        position: absolute;
        bottom: -2px;
        right: 0px;
        top: 0px;
        transition: 0.3s;
        opacity: ${props => props.overflowRight ? '1' : '0'};
    }
`

export const ReactTagsSelected = styled.div`
    display: inline-flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding-bottom: 4px;
    position: relative;

    ::-webkit-scrollbar {
        width: 4px;
        height: 4px;
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

export const SearchWrapper = styled.div`
    border: 0px!important;
    width: initial!important;
    z-index: 11111;

    svg {
        width: 15px;
        position: absolute;
        top: 10.5px;
        left: 15px;
    }
`


export const ReactTagsSearch = styled.div`
    position: relative;
    display: inline-flex;
    padding: 0px 0px;
    border-radius: 23px;
    text-align: center;
    font-size: 0.9rem;
    margin-top: 2px;
    
    > div:nth-child(1) {
        font-weight: 800;
        height: 35px;
        text-align: center;
        line-height: 2rem;
        border-color: #00000024;
        border: 2px dashed;
        position: relative;
        margin-left: ${props => props.isFiltering && '5px'};
    }

    :hover {
        border-color: #000;
        cursor: pointer;
        color: #000;
        opacity: 1;
        transition: 0.3s;
    }

    input {
        margin: 0px;
        padding: 0 8px 0px 37px;
        border: 0;
        outline: none;
        font-size: inherit;
        line-height: inherit;
        background-color: rgba(0,0,0, 0.05);
        border: 2px solid #f2f2f2;
        height: 32px;
        border-radius: 20px;
        width: 110px;
    }

    input:focus {
        border-color: #000;
        background-color: #fff;
    }

`

export const ReactTagsSuggestions = styled.div`
    position: absolute;
    width: 170px;
    margin-top: -8px;
    margin-left: ${props => props.isFiltering ? '0px' : '-5px'};
    left: 0px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: rgba(0,0,0,0.1) 0px 2px 15px 1px;
    padding: 0px;
    z-index: 11;


    ul{
        overflow: scroll;
        max-height: 250px;
        text-align: left;
        list-style:none;
        margin: 60px 0px 0px;
        padding: 0px;
    }

    li{
      padding: 10px;
      margin: 0px 5px;;
      border-radius: 2px;
    }

    li:hover {
        background-color: #eee;
        cursor: pointer;
    }

    p {
        margin-top: 0px;
    }
`