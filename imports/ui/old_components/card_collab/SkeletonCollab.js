import React, { useState } from 'react'

import {SkeletonPulseTwo, SkeletonText} from '../../common/Skeleton.sc'

// Styled Components
import { 
  SkeletonCollabWrapper,
  SkeletonCollabContentsWrapper,
  SkeletonCollabTile, 
  SkeletonCollabImage, 
  SkeletonCollabTitle, 
  SkeletonCollabDescription, 
  SkeletonCollabTags,
  SkeletonCollabHostMainText,
} from './SkeletonCollab.sc'

import {
  TextBottom,
  CollabHostTextWrapper,
  CollabHostIcon,
  Rating,
  CollabContentsWrapper,
  CollabTextWrapper,
  PriceText
} from './Collab.sc'
import HeartIcon from '../../icons/heart-solid'

function SkeletonCollab(props) {
    return (
        <SkeletonCollabWrapper simple={props.simple} className="collabWrapper">
          <SkeletonCollabTile>
            <SkeletonCollabContentsWrapper>
             
              <SkeletonCollabImage/>
               <TextBottom>
                <CollabHostTextWrapper>
                  <CollabHostIcon>
                    <SkeletonPulseTwo/>
                  </CollabHostIcon>
                  <SkeletonText height="15px" width="40%" float="left"/>
                </CollabHostTextWrapper>
              </TextBottom>
              <CollabTextWrapper>
                <SkeletonText margin="5px 0px 0px" height="15px" width="100%" float="left"/>
                <SkeletonText margin="10px 0px 20px" height="15px" width="80%" float="left"/>
                <SkeletonCollabTags/><SkeletonCollabTags/>
              </CollabTextWrapper>
              <PriceText>
                  <HeartIcon/>
                    <SkeletonText margin="6px 0px" height="15px" width="40%" float="left"/>
              </PriceText>
            </SkeletonCollabContentsWrapper>
          </SkeletonCollabTile>

        </SkeletonCollabWrapper>
      )
}

export default SkeletonCollab
