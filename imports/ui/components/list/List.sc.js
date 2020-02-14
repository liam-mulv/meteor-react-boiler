import styled from 'styled-components'

export const RowWrapper = styled.div`
    position: relative;
    padding: 0px;
    display: grid !important;
    flex-wrap: wrap !important;
    background-color: #fff;


    ${props => props.tint && `
        ::before {
            content: '';
            position: fixed;
            /* padding-top: 25%; */
            top: 0px;
            left: 0;
            right: 0px;
            bottom: 0;
            z-index: -1;
            background-color: #000;
            z-index: 1;
            opacity: 0.3;
        }
    `};

`

export const ListHeaderWrapper = styled.div`
    position: ${props => !props.headerIsSticky ? 'initial' : 'sticky'};
    top: 60px;
    z-index: 2;
`

export const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0px 0px;
    z-index: 2;
    background-color: #fff;
    margin: 0px;
    position: relative;
    padding: ${props => !props.headerIsSticky ? '0px 0px 0px' : '10px 0px'};

    h1 {
        font-size: ${props => props.headerFontSize && props.headerFontSize};
        padding: 0px 0px 5px!important;
    }

    // @media (min-width: 1100px) { 
    //     padding: ${props => props.simple || props.similarList ? '0px 0px' : '9px 80px'};
    // }
`

export const StickyHeaderShadow = styled.div`
    width: calc(100% - 6px);
    box-shadow: 0px 1px 4px rgba(0,0,0,0.2);
    height: 2px;
    z-index: 1;
    position: -webkit-sticky;
    position: -webkit-sticky;
    position: sticky;
    top: 112px;
    margin: 0px auto -2px;
    display: ${props => !props.headerIsSticky ? 'none' : 'block'};

`


export const RowTitle = styled.h1`
    font-size: 2rem;
    font-weight: 800;
    margin: 0px;
    padding: 15px 0px!important;
    background-color: #fff;
    z-index: 1;

    span {
        font-size: 48%;
        text-align: right;
        float: right;
        margin-top: 8px;
        opacity: 0.4;
    }
`

export const FlexRow = styled.div`
    position: relative;
    display: flex;
    flex-flow: row wrap;
    ${props => props.counterPaddingWidth && `
        width: calc(100% + 16px);
        margin-left: -8px;
    `};
    ${props => !props.simple && 'margin-top: 10px'};

    @media (min-width: 1100px) { 
        padding: 0px;
    }
`