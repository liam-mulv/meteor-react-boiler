import React, { useState } from 'react'

import { 
	SkeletonPostWrapper,
  SkeletonPostTileInnerContainer,
  SkeletonPostTile,
  SkeletonPostImage,
  SkeletonPostIcons,
} from './SkeletonCardPost.sc'

function SkeletonCardPost(props) {
  return (
    <SkeletonPostWrapper simple={props.simple} list={props.list} className="collabWrapper">
      <SkeletonPostTileInnerContainer>
        <SkeletonPostTile>
          <SkeletonPostImage/>
        </SkeletonPostTile>
{/*        <SkeletonPostIcons/>
*/}      </SkeletonPostTileInnerContainer>
    </SkeletonPostWrapper>
  )
}

export default SkeletonCardPost
