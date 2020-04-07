import React, { useState } from 'react'
import { Link } from 'react-router-dom'


// Components
import SkeletonReviewList from './SkeletonReviewList'
import StarRating from './StarRating'

// NPM
import Sticky from 'react-sticky-el';

// Styled Components
import {LazyBackgroundImage} from '../../common/Common.sc'
import {
  ReviewWrapper,
  ReviewContentLeft,
  ReviewContentRight,
  ReviewContainer,
  ReviewListContainer,
  ReviewCard,
  ReviewInfoWrapper,
  ReviewerProfilePicture,
  ReviewerTextWrapper,
  ReviewerUsername,
  ReviewDate,
  ReviewContent,
  StaticHeader
} from './ReviewList.sc'


import ThumbUpIcon from '../../icons/thumb-up'
import StarSolidIcon from '../../icons/star-solid'


function ReviewList(props) {
  return (
    <React.Fragment>
      {!props.isLoading && props.reviews ?

        <ReviewWrapper>
          {props.showStaticHeader && 
            <StaticHeader>
              <h1>Reviews</h1>
              <StarRating/>
            </StaticHeader>
          }
          {props.reviews.length >= 1 && props.reviews.slice(0,4).map((data, index) =>{
            return (
                <ReviewCard key={index} className="review-card">
                  <ReviewInfoWrapper>
                    <ReviewerProfilePicture>
                        <LazyBackgroundImage 
                          width="100%" 
                          height="100%" 
                          lazyLoad 
                          src={data.profile_pic}
                        />
                    </ReviewerProfilePicture>
                    <ReviewerTextWrapper>
                      <ReviewerUsername><Link to={`/profile/${data.instagram_handle}`}>{data.instagram_handle}</Link> · <ReviewDate>January 2019</ReviewDate></ReviewerUsername>
                      <StarRating hideRatingNumber={true}/>
                    </ReviewerTextWrapper>
                  </ReviewInfoWrapper>
                    <ReviewContent>
                      {data.description}
                    </ReviewContent>
                </ReviewCard>
              )
            })
          }
        </ReviewWrapper>
      :
        <SkeletonReviewList/> 
      }
    </React.Fragment>
    )
}

export default ReviewList