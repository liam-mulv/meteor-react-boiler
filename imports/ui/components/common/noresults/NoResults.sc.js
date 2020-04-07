import styled from 'styled-components'

export const NoResultsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.fontSize ? props.fontSize +'rem' : '1.2rem'};
    opacity: 0.5;
    height: 100%;
    flex: 1;
    min-height: ${props => props.minHeight ? props.minHeight+'px' : '100px' };

    ${props => props.absolutePosition &&` 
        position:absolute;
        width: 100%;
    `};

    > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    svg {

        width: ${props => props.iconSize ? props.iconSize + 'px' : '100px'};
        fill: #c3c3c3;
        margin-bottom: 30px;


        ${props => props.svgMargin &&` 
            margin: ${props.svgMargin};
        `};
    }

    p {
        margin: 0px;
    }
`