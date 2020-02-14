import React, { useState } from 'react'

// Styled Components
import {
  InfluencerWrapper,
  InfluencerTile, 
} from './Influencer.sc'


import { 
	SkeletonInfluencerWrapper,
  SkeletonInfluencerTile,
  SkeletonInfluencerTileInnerContainer,
  SkeeltonInfluencerImage,
  SkeletonInfuencerName,
  SkeletonInfuencerFollowers,
  SkeletonInfluencerTags,
} from './SkeletonInfluencer.sc'

function SkeletonInfluencer(props) {
    return (
    	<InfluencerWrapper simple={props.simple} list={props.list} className="influencerTile">
	        <InfluencerTile simple={props.simple}> 
	        	<SkeletonInfluencerTileInnerContainer simple={props.simple}>
	        		<SkeeltonInfluencerImage simple={props.simple}/>
              <SkeletonInfuencerName simple={props.simple}/>
              <SkeletonInfuencerFollowers simple={props.simple}/>
             {!props.simple && <SkeletonInfluencerTags/> }
	        	</SkeletonInfluencerTileInnerContainer>
	        </InfluencerTile>
        </InfluencerWrapper>
      )
}

export default SkeletonInfluencer
