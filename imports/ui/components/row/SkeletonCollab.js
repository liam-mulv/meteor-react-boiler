import React, { useState } from 'react'

// Styled Components
import {
  CollabWrapper, 
} from './RowCollabs.sc'

import { 
  SkeletonCollabTile, 
  SkeletonCollabImage, 
  SkeletonCollabTitle, 
  SkeletonCollabDescription, 
  SkeletonCollabTags 
} from '../../common/Skeleton.sc'

function SkeletonCollab(props) {
    return (
        <CollabWrapper className="collabWrapper">
          <SkeletonCollabTile>
            <SkeletonCollabImage/>
            <SkeletonCollabTitle/>
            <SkeletonCollabDescription/>
            <SkeletonCollabTags/>
          </SkeletonCollabTile>
        </CollabWrapper>
      )
}

export default SkeletonCollab
