import styled from 'styled-components'
import EmblaCarouselReact from 'embla-carousel-react'




export const StyledSlider = styled(EmblaCarouselReact)`
  margin-left: -8px;
`

export const SliderWrapper = styled.div`
  position: relative;

  h1 {
    font-size: 2rem;
    margin: 0px;
    padding: 20px 0px;
  }
`

export const NextArrow = styled.div`
  position: absolute;
  right: -25px;
  top: calc(50% + 7.5px);

  :hover {
    cursor:pointer;
    opacity: 0.5;
  }

  svg {
    height: 25px;
  }
`

export const PrevArrow = styled.div`
  position: absolute;
  left: -25px;
  top: calc(50% + 7.5px);

  :hover {
    cursor:pointer;
    opacity: 0.5;
  }

  svg {
    height: 25px;
  }
`

