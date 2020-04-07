import styled from 'styled-components'
import EmblaCarouselReact from 'embla-carousel-react'

export const StyledCarouselBanner = styled(EmblaCarouselReact)`


	.is-draggable {
	  cursor: move;
	  cursor: grab;
	}


	.is-dragging {
	  cursor: grabbing;
	}

	.carousel__dots {
		position: absolute;
	    bottom: 30px;
	    left: 150px;
	}
`

export const Dots = styled.button`
	border-radius: 50%;
    height: 20px;
    width: 20px;
    border: 3px solid #fff;
    margin-right: 10px;
    background-color: ${props => props.selected ? '#fff' : '#fff0'};
`

export const BannerWrapper = styled.div`
	position: relative;
	height: 240px;
	flex: 0 0 80%;  
	padding: 10px;  
	display: flex;

	div {
		background-color: ${props => props.bgColor && props.bgColor};
		flex: 1;
    	border-radius: 5px;
    	padding: 25px;
    	background-image: url(${props => props.image && props.image});
	    background-size: 45%;
	    background-repeat: no-repeat;
	    background-position: right;
	}

	h1 {
	    font-size: 2.5rem;
	    margin: 20px 0px;
	    padding: 0px;
	    color: ${props => props.color ? props.color : '#fff'};
	    font-weight: 800;
	}
	p {
	    font-size: 1.3rem;
	    margin-top: 0px;
	    font-weight: 800;
	    color: ${props => props.color ? props.color : '#fff'};
	}
`