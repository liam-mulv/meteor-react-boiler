import React, { useState, useEffect } from 'react'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import {StyledSlider, SliderWrapper, NextArrow, PrevArrow} from './Carousel.sc'

// NPM
import EmblaCarouselReact from 'embla-carousel-react'
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


import data from '../../data/collab_data'
import data2 from '../../data/influencer_data'
import data3 from '../../data/instagram_post_data'




const EmblaCarouselComponent = (props) => {
  const [embla, setEmbla] = useState(null)

  useEffect(() => {
    if (embla) {
      embla.on('select', () => {
        console.log(`Current index is ${embla.selectedScrollSnap()}`)
      })
    }
  }, [embla])

  return (
    <SliderWrapper>
      <h1>{props.title}</h1>

        {props.type === "profiles" ?
            <React.Fragment>
              {!props.isLoading &&
                <StyledSlider
                  emblaRef={setEmbla}
                  options={{ loop: true, align: 'start' }}>
                  <div style={{ display: 'flex' }}>
                    {data2.top_influencers.map((item, index) => {
                      return (
                        <Influencer simple={props.simple}  data={item} carousel={true} />
                      )
                    })} 
                  </div>
                </StyledSlider>
              }
            </React.Fragment>
        : props.type === "instagram" ?
            <React.Fragment>
              {!props.isLoading && 
                <StyledSlider
                  emblaRef={setEmbla}
                  options={{ loop: true, align: 'start' }}>
                  <div style={{ display: 'flex' }}>
                    {data3.instagram_post_data.map((item, index) => {
                      return (
                        <CardPost simple={props.simple} data={item} carousel={true} />
                      )
                    })} 
                  </div>
                </StyledSlider>

              }
            </React.Fragment>
        : props.type === "collabs" ?
            <React.Fragment>
              {!props.isLoading &&
                <StyledSlider
                  emblaRef={setEmbla}
                  options={{ loop: true, align: 'start'}}>
                  <div style={{ display: 'flex' }}>
                    {data.collab_data.map((item, index) => {
                      return (
                        <Collab simple={props.simple}  data={item} carousel={true} />
                      )
                    })} 
                  </div>
                </StyledSlider>
                }
            </React.Fragment>

        : undefined}
      <PrevArrow onClick={() => embla.scrollPrev()}><ChevronLeftIcon/></PrevArrow>
      <NextArrow onClick={() => embla.scrollNext()}><ChevronRightIcon/></NextArrow>
    </SliderWrapper>
  )
}
export default EmblaCarouselComponent





  //  :
  // <StyledSlider
  //   emblaRef={setEmbla}
  //   options={{ loop: false, align: 'start' }}>
  //   <div style={{ display: 'flex' }}>
  //     {_.times(8, (i) =>{
  //         return (
  //           <SkeletonCardPost simple={props.simple}  list={true}/>
  //         )
  //     })}
  //   </div>
  // </StyledSlider>

// :
//                <StyledSlider
//                  emblaRef={setEmbla}
//                  options={{ loop: true, align: 'start' }}>
//                  <div style={{ display: 'flex' }}>
//                    {_.times(8, (i) =>{
//                        return (
//                          <SkeletonCollab simple={props.simple} />
//                        )
//                    })}
//                  </div>
//                </StyledSlider>

  //                :
  // <StyledSlider
  //   emblaRef={setEmbla}
  //   options={{ loop: false, align: 'start' }}>
  //   <div style={{ display: 'flex' }}>
  //     {_.times(8, (i) =>{
  //         return (
  //           <SkeletonInfluencer simple={props.simple} list={true}/>
  //         )
  //     })}
  //   </div>
  // </StyledSlider>