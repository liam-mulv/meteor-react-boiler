import React, { useState, useEffect, useCallback } from "react";

// Styled Componenets
import {StyledCarouselBanner, BannerWrapper, Dots} from './CarouselBanner.sc'
import {SliderWrapper, NextArrow, PrevArrow} from './Carousel.sc'

// NPM
import _ from 'lodash'

// Components
import CardPost from '../card_post/CardPost'
import Influencer from '../card_influencer/Influencer'
import Collab from '../card_collab/Collab'

// Skeleton Components
import SkeletonInfluencer from '../card_influencer/SkeletonInfluencer'
import SkeletonCollab from '../card_collab/SkeletonCollab'
import SkeletonCardPost from '../card_post/SkeletonCardPost'


// icons
import ChevronRightIcon from '../../icons/chevron-right'
import ChevronLeftIcon from '../../icons/chevron-left'


import data from '../../data/homepage_banner_data'


const CarouselBanner = (props) => {
  const [carousel, initCarousel] = useState(null);
  // Add selectedIndex state containing the selected index
  const [selectedIndex, setSelectedIndex] = useState(0);
    // Add scrollSnaps state containing all snap points
  const [scrollSnaps, setScrollSnaps] = useState([]);
// Add scrollTo
  const scrollTo = useCallback(index => carousel.scrollTo(index), [carousel]);
  
  useEffect(() => {
    // On every new snap point select, update selectedIndex
    const onSelect = () => {
      setSelectedIndex(carousel.selectedScrollSnap());
    };

    // When our carousel has mounted:
    if (carousel) {
      // Store snap points provided by the carousel
      setScrollSnaps(carousel.scrollSnapList());
      // Hook our onSelect function to the carousel select event
      carousel.on("select", onSelect);
      // Invoke onSelect
      onSelect();
    }
    // Destroy the carousel component on unmount
    return () => carousel && carousel.destroy();
  }, [carousel]);



  return (
    <SliderWrapper>
        <React.Fragment>
          {!props.isLoading &&
            <StyledCarouselBanner
              emblaRef={initCarousel}
              options={{ loop: true }}>
              <div style={{ display: 'flex' }}>
                {data.data.map((item, index) => {
                  return (
                    <BannerWrapper image={item.image} bgColor={item.bgColor} color={item.color}>
                    	<div>
	                    	<h1>{item.title}</h1>
	                    	<p>{item.subtitle}</p>
                    	</div>
                    </BannerWrapper>
                  )
                })} 
              </div>
               <div className="carousel__dots">
			      {scrollSnaps.map((snap, index) => (
			        <Dots
			          selected={index === selectedIndex}
			          onClick={() => scrollTo(index)}
			          key={index}
			        />
			      ))}
			    </div>

            </StyledCarouselBanner>
          }
        </React.Fragment>
    </SliderWrapper>
  )
}
export default CarouselBanner
