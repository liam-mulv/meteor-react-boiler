import styled from 'styled-components'

export const BannerContainer = styled.div`
	
`

export const BannerWrapper = styled.div`
	display: flex;
	align-items: center;
	max-width: 1290px;
	margin: auto;

`

export const Dots = styled.div`
    width: 78px;
    margin: auto;
    display: flex;
    margin: 10px;
    margin: auto;
    display: flex;
    /* margin: 0px 20px; */
    z-index: 1111;
    position: relative;
`

export const Dot = styled.div`
	height: 10px;
    width: 10px;
    border-radius: 50%;
    margin: 0px 8px;
	background-color: ${props => props.active ? 'rgba(0,0,0, 1)' : 'rgba(0,0,0, 0.1)'};
`

export const RightBanner = styled.div`
    height: 200px;
    width: 130px;
    border-radius: 0px 4px 4px 0px;
    background-color: #fff;
    margin-left: 5px;
    box-shadow: 0px 4px 12px 7px rgba(0,0,0,0.04);
    border: 0px solid #000;
`

export const LeftBanner = styled.div`
    height: 200px;
    width: 130px;
    border-radius: 4px 0px 0px 4px;
    background-color: #fff;
    margin-right: 5px;
    box-shadow: 0px 4px 12px 7px rgba(0,0,0,0.04);
    border: 0px solid #000;
`

export const MainBanner = styled.div`
	background-color: #fff;
    width: calc(100% - 260px);
    max-width: 1025px;
    height: 240px;
    margin: 40px auto;
    color: #fff;
    border-radius: 4px;
    text-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    border: 0px solid #000;
    overflow: hidden;
    --stripe-height: 55px;
    --content-columns: 12;
    --gutter-columns: 4;
    top: 0;
    bottom: 0;
    z-index: -1;
    pointer-events: none;
    position: relative;
    box-shadow: 0px 4px 12px 7px rgba(0,0,0,0.04);
   `

export const TextWrapper = styled.div`
	position: absolute;
	text-align: center;
	width: 100%;
	color: #000;

	h1 {
	    font-weight: 200;
	    // font-family: 'Russo One',sans-serif;
	    font-size: 2rem;
	    margin-bottom: 5px;
	}

	p {
		opacity: 0.4;
		margin-top: 0px;
		font-size: 1.1rem;
	}

`

export const StripeContainer = styled.div`
	-webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    -ms-flex-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    -webkit-transform: skewY(-12deg);
    -webkit-transform: skewY(-12deg);
    -ms-transform: skewY(-12deg);
    -webkit-transform: skewY(-12deg);
    -ms-transform: skewY(-12deg);
    -webkit-transform: skewY(-12deg);
    -ms-transform: skewY(-12deg);
    transform: skewY(-30deg);
`

export const Grid = styled.div`
	--content-column-width: minmax(0,calc(1040px / var(--content-columns)));
    --gutter-column-width: 1fr;
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(auto-fill,var(--stripe-height));
    grid-template-columns: [viewport-start] 1fr [left-gutter-start] repeat(var(--gutter-columns),var(--gutter-column-width)) [left-gutter-end content-start] repeat(var(--content-columns),var(--content-column-width)) [content-end right-gutter-start] repeat(var(--gutter-columns),var(--gutter-column-width)) [right-gutter-end] 1fr [viewport-end];
    height: 350%;
    -ms-flex-line-pack: end;
    -webkit-align-content: end;
    -ms-flex-line-pack: end;
    margin-top: 293px;
    -webkit-align-content: end;
    -ms-flex-line-pack: end;
    align-content: end;

    div:nth-child(1) {
	    grid-row-start: -11;
	    background-color: #000;
	    grid-column: 8/span 1;
    }


    div:nth-child(2) {
	    grid-row-start: -13;
	    background-color: #000;
	    grid-column: 6/span 2;
    }


    div:nth-child(3) {
		grid-row-start: -15;
	    background-color: #000;
	    grid-column: 7/span 2;
    }


    div:nth-child(4) {
		grid-row-start: -8;
	    background-color: #000000;
	    grid-column: 10/span 1;
    }


    div:nth-child(5) {
		grid-row-start: -9;
	    background-color: #000;
	    grid-column: 14/span 2;
    }

    div:nth-child(6) {
		grid-row-start: -5;
	    background-color: #000000;
	    grid-column: 16/span 4;
    }


    div:nth-child(7) {
		grid-row-start: -3;
	    background-color: #000000;
	    grid-column: 17/span 2;
    }


    div:nth-child(8) {
		grid-row-start: -6;
	    background-color: #000000ad;
	    grid-column: 16/span 1;
    }


    div:nth-child(9) {
	    grid-row-start: -13;
	    background-color: #52525214;
	    grid-column: 9/span 1;
    }

    div:nth-child(10) {
	    grid-row-start: 9;
	    background-color: #000000;
	    grid-column: 15/span 3;
    }

    div:nth-child(11) {
		grid-row-start: 5;
	    background-color: #525252;
	    grid-column: 7/span 2;
    }


    div:nth-child(12) {
	    grid-row-start: 1;
	    background-color: #525252;
	    grid-column: 6/span 2;
    }


    div:nth-child(13) {
		grid-row-start: 14;
	    background-color: #525252;
	    grid-column: 15/span 2;
    }

    div:nth-child(14) {
	    grid-row-start: 11;
	    background-color: #f1f1f1;
	    grid-column: 15/span 1;
    }
    div:nth-child(15) {
	    grid-row-start: 13;
	    background-color: #f6f6f6;
	    grid-column: 17/span 1;
    }

    div:nth-child(16) {
		grid-row-start: 10;
	    background-color: #5252520d;
	    grid-column: 11/span 1;
    }
`

export const Stripe = styled.div`

`




