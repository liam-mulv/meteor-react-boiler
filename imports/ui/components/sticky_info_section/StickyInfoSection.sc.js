import styled from 'styled-components'


export const StickyInfoSectionContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 0px;

 	// p {
  //       font-size: 1.2rem;
  //       margin: 0px 0px 15px;
 	// }
`

export const StickyTitle = styled.div`
    padding: ${props => props.titlePadding ? props.titlePadding : '0px'};
    position: sticky;
    z-index: 1;
    top: ${props => props.sticky && props.sticky};
    background-color: #fff;



    padding: ${props => props.padding ? props.padding : '0px'};

    h1 {
    	font-size: 2rem;
        width: 100%;
        margin: 0px;
        padding: 0px;
    }

    p {
        margin-top: 10px;
        width: 100%;
    }

    ${props => props.isNoTitle &&`
        overflow: scroll;
        height: calc(100vh - 62px);

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
    `}
`

export const ContentLeft = styled.div`
    width: 100%;
    min-width: ${props => props.contentLeftMinWidth && props.contentLeftMinWidth};
    max-width: ${props => props.contentLeftMaxWidth ? props.contentLeftMaxWidth : '33.333%'};
    flex: ${props => props.contentLeftFlex && props.contentLeftFlex};
`


export const ContentRight = styled.div`
    width: 100%;
    padding: ${props => props.padding ? props.padding : '0px'};
    border-left: ${props => props.border ? '1px solid #eee' : '0px'};

    h1, h2, h3, h4 {
    	font-weight: 800!important;
    }
`
