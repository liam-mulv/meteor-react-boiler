import styled from 'styled-components'


export const MoreInfluencerWrapper = styled.div`
    overflow: hidden;
    position: relative;
    border-radius: 5px;
    display: inline-block;


    @media (max-width: 2400px) { 
        width: calc(100% / 9);
    }
    @media (max-width: 1880px) { 
        width: calc(100% / 8);
    }

    @media (max-width: 1440px) { 
        width: calc(100% / 7);
    }

    @media (max-width: 1128px) { 
        width: calc(100% / 5);
    }

    @media (max-width: 744px) { 
        width: calc(100% / 4);
    } 
`

export const MoreInfluencerTile = styled.div`
    overflow: hidden;
    position: relative;
    border-radius: 5px;
    margin-bottom: 25px;
`

export const MoreInfluencerTileInnerContainer = styled.div`
    padding: 8px 13px 15px 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    p {
        position: absolute;
        font-size: 0.8rem;
        margin: 0px;
        opacity: 0.5;
        z-index: 1;
    }
    
    :hover div {
        cursor: pointer;
        background-color: #dcdcdc;
    }

    :hover p {
        opacity: 0.75;
    }
`

export const MoreInfluencerImage = styled.div`
    width: 100%;
    height: 100%;
    transition: 0.2s;
    padding-bottom: 160%;
    overflow: hidden;
    border-radius: 5px;
    background-color: #F0F0F0;
`
