import React, { useState } from 'react'

import { 
	MoreInfluencerWrapper,
  MoreInfluencerTile,
  MoreInfluencerTileInnerContainer,
  MoreInfluencerImage,
} from './MoreInfluencer.sc'

function SkeletonInfluencer(props) {
    return (
    	<MoreInfluencerWrapper simple={props.simple} list={props.list} className="influencerTile">
	        <MoreInfluencerTile>
	        	<MoreInfluencerTileInnerContainer>
              <p>+4 more</p>
	        		<MoreInfluencerImage/>
	        	</MoreInfluencerTileInnerContainer>
	        </MoreInfluencerTile>
        </MoreInfluencerWrapper>
      )
}

export default SkeletonInfluencer
