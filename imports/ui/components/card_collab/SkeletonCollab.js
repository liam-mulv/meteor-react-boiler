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
  CollabTextWrapper
} from './Collab.sc'

function SkeletonCollab(props) {
    return (
        <SkeletonCollabWrapper simple={props.simple} className="collabWrapper">
          <SkeletonCollabTile>
            <SkeletonCollabContentsWrapper>
              <TextBottom>
                <CollabHostTextWrapper>
                  <CollabHostIcon><SkeletonPulseTwo/></CollabHostIcon>
                  <SkeletonCollabHostMainText>
                    <SkeletonText height="15px" width="40%" float="left"/>
                  </SkeletonCollabHostMainText>
                </CollabHostTextWrapper>
              </TextBottom>
              <SkeletonCollabImage/>
              <CollabTextWrapper>
                <SkeletonCollabTitle/>
                <SkeletonCollabDescription/>
                <SkeletonCollabTags/><SkeletonCollabTags/>
              </CollabTextWrapper>
            </SkeletonCollabContentsWrapper>
          </SkeletonCollabTile>
        </SkeletonCollabWrapper>
      )
}

export default SkeletonCollab
