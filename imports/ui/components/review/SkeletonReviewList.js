import React, { useState } from 'react'

// NPM
import Sticky from 'react-sticky-el';

// Styled Components
import {
  TitleFilterWrapper,
  ReviewContainer,
  ReviewListContainer,
  ReviewCard,
  ReviewInfoWrapper,
  ReviewerTextWrapper,
  ReviewContent,
  ReviewContentLeft,
  ReviewContentRight
} from './ReviewList.sc'

// Skeleton Styled Components
import {SkeletonText} from '../../common/Skeleton.sc'
import {SkeletonHeader, SkeletonSubHeader, SkeletonReviewProfilePicture, SkeletonReviewerUsername, SkeletonReviewDate } from './SkeletonReviewList.sc'


function SkeletonReviewList() {
    return (
      <ReviewContainer>
        <ReviewContentRight>
          <ReviewListContainer>
            {[1,2,3].map((data, index) =>{
              return (
                  <ReviewCard key={index}>
                    <ReviewInfoWrapper>
                      <SkeletonReviewProfilePicture/>
                      <ReviewerTextWrapper>
                        <SkeletonReviewerUsername/>
                        <SkeletonReviewDate/>
                      </ReviewerTextWrapper>
                    </ReviewInfoWrapper>
                      <ReviewContent>
                        <SkeletonText width="100%" margin="0px 0px 10px"/>
                        <SkeletonText width="100%" margin="0px 0px 10px"/>
                        <SkeletonText width="45%" margin="0px 0px 10px"/>
                      </ReviewContent>
                  </ReviewCard>
                )
              })
            }
          </ReviewListContainer>
        </ReviewContentRight>
      </ReviewContainer>
    )
}

export default SkeletonReviewList