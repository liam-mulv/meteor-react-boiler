import React, { useState } from 'react'

// Styled Components
import {
  PostTile, 
  PostHostMainText, 
  PostWrapper, 
  PostTileInnerContainer, 
  StyledBackgroundImage,
  TextBottom,
  IconWrapper
} from './CardPost.sc'

// Icons
import CommentIcon from '../../icons/comment'
import HeartIcon from '../../icons/heart'
import InstagramIcon from '../../icons/instagram'

function CardPost(props) {
  return (
    <PostWrapper list={props.list} className="collabWrapper">
      <PostTileInnerContainer>
        <PostTile>
          <InstagramIcon/>
          <StyledBackgroundImage 
            width="100%" 
            height="100%" 
            lazyLoad 
            className="influencer-bg-img" 
            src={props.data.banner_image}
          />
        </PostTile>
        <TextBottom>
            <PostHostMainText>
              <IconWrapper>
                <CommentIcon/>
                <span>24</span>
              </IconWrapper>
              <IconWrapper>
                <HeartIcon/>
                <span>1.3k</span>
              </IconWrapper>
            </PostHostMainText>
          </TextBottom>
      </PostTileInnerContainer>
    </PostWrapper>
  )
}

export default CardPost;