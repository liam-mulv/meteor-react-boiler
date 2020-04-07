import React, { useState } from 'react'

import { 
	MorePostWrapper,
  MorePostTileInnerContainer,
  MorePostTile,
  MorePostImage,
} from './MoreCardPost.sc'

function MorePost(props) {
  return (
    <MorePostWrapper simple={props.simple} list={props.list} className="collabWrapper">
      <MorePostTileInnerContainer>
        <MorePostTile>
          <p>+5 more posts</p>
          <MorePostImage/>
        </MorePostTile>
      </MorePostTileInnerContainer>
    </MorePostWrapper>
  )
}

export default MorePost
