import React, { useState } from 'react'

// Styled Components
import {SkeletonPulseTwo, SkeletonText} from '../../common/Skeleton.sc'
import {
  InfluencerWrapper,
  InfluencerTile, 
  PriceText
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


//icons
import HeartIcon from '../../icons/heart-solid'


function SkeletonInfluencer(props) {
    return (
    	<SkeletonInfluencerWrapper simple={props.simple} list={props.list} className="influencerTile">
	        
        <SkeletonInfluencerTile>
          <InfluencerTile simple={props.simple}> 
	        	<SkeletonInfluencerTileInnerContainer simple={props.simple}>
	        		<SkeeltonInfluencerImage simple={props.simple}/>
              <SkeletonInfuencerName simple={props.simple}/>
              <SkeletonInfuencerFollowers simple={props.simple}/>
              <br/>
              <SkeletonInfuencerFollowers margin="0px auto 5px" simple={props.simple}/>
             {!props.simple && <SkeletonInfluencerTags/> }
	        	</SkeletonInfluencerTileInnerContainer>

            {!props.simple &&
              <React.Fragment>
                  <PriceText>
                      <HeartIcon/>
                        <SkeletonText margin="6px 0px" height="15px" width="40%" float="left"/>
                  </PriceText>
              </React.Fragment>
            }
  	        </InfluencerTile>
          </SkeletonInfluencerTile>
        </SkeletonInfluencerWrapper>
      )
}

export default SkeletonInfluencer
