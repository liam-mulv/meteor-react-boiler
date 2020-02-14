import styled from 'styled-components'

export const Tag = styled.div`
    opacity: 1;
    margin-right: 5px;
    padding: 3px 10px 2px;
    background-color: #eee;
    border-radius: 20px;
    overflow: hidden;
    font-size: 1rem;
    float: left;
    text-transform: lowercase;
    font-weight: 700;

    :hover {
        cursor: pointer;
        background-color: #ddd;
    }
`

export const InfoDescription = styled.div`
    opacity: 0.6;
    line-height: 1.5rem;
    font-size: 1.1rem;
    overflow: auto;

    svg {
        margin-bottom: 0px;
    }
`

export const CollabInfoRight = styled.div`
    position: absolute;
    right: 0px;
    bottom: 0px;
    text-align: right;

    h1 {
        font-size: 1.5rem;
        margin: 10px 0px;
    }



    h4:last-child {
        margin-top: 20px;
        font-weight: 700;
    }



    svg {
        FONT-WEIGHT: 200;
        width: 12px;
        margin-left: 10px;
        fill: #000;
        opacity: 0.5;
        margin-bottom: -3px;
    }
`

export const CollabInfoLeft = styled.div`
    align-items: center;
    width: 50%;

    h1 {
        font-weight: 900;
        margin: 10px 0px 20px;
    }

    h4:last-child {
        opacity: 0.5;
        font-weight: 700;
        margin-top: 20px;
    }

`

export const BudgetWrapper = styled.div`
    margin: 25px 0px 0px;
    max-width: 300px;
    position: relative;
    font-weight: 800;
    font-size: 1.1rem;

    span {
        position: absolute;
        right: -40px;
        margin-top: -14px;
        font-weight: 600;
    }

    h4 {
        margin-top: 16px!important;
        font-size: 0.9rem;
    }
`

export const BudgetContainer = styled.div`
    width: 100%;
    height: 6px;
    background-color: #eee;
    border-radius: 27px;
    overflow: hidden;
    margin-top: 10px;
`

export const BudgetProgress = styled.div`
    width: 65%;
    height: 100%;
    background-color: #000;
    border-radius: 14px;
`

export const ButtonContainer = styled.div`
    margin: 20px 0px;
    overflow: auto;
    display: flex;

    h1 {margin-right: 10px;}

    button {
        padding: 16px;
        background-color: #fff;
        font-size: 1.1rem;
        border-radius: 3px;
        font-weight: 700;
        position: relative;
        overflow: hidden;
        border-color: #000;
        color: #000;
        margin-right: 0px;
        float: right;
    }

    button:nth-child(1) {
        background-color: #000;
        border-color: #000;
        color: #fff;
        padding: 10px 35px;
    }

    button:hover .button-shine {
        transform: skewX(20deg) translateX(300px);
    }

    button svg {
        width: 20px;
        left: 13px;
        fill: #000;
        margin-bottom: -3px;
    }

    button:nth-child(1) svg {
        width: 20px;

    }

    button:nth-child(3) svg {
        width: 18px;
        margin-bottom: -4px;

    }
`


export const BlackShine = styled.div`
    position: absolute;
    top: 0;
    left: -70px;
    height: 98px;
    width: 50px;
    background: rgba(0, 0, 0, 0.05);
    transition: all 0.4s linear;
    transform: skewX(20deg) translateX(0);
`

export const LocationLink = styled.div`
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0px;
    padding: 0px;
    background-color: #fff;
    z-index: 2;
    opacity: 1;
    color: #808080;
`


