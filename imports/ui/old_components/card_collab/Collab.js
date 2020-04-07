import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Styled Components
import {
  CollabTile, 
  CollabImg, 
  CollabHostIcon, 
  CollabHostMainText, 
  CollabHostSubText, 
  CollabContentsWrapper,
  CollabTextWrapper, 
  CollabWrapper, 
  CollabTileInnerContainer,
  CollabTileHeader, 
  ApplyButton, 
  SpotsLeft, 
  Tags, 
  Tag,
  StyledBackgroundImage,
  TextBottom,
  PriceText,
  CollabHostTextWrapper,
  Rating,
  ReviewCount
} from './Collab.sc'

// Icons
import CheckSolid from '../../icons/check-solid'
import StarSolid from '../../icons/star-solid'
import InstagramIcon from '../../icons/instagram'
import HeartIcon from '../../icons/heart-solid'

function Collab(props) {
  return (
    <CollabWrapper simple={props.simple} list={props.list} className="collabWrapper">
      <CollabTileInnerContainer>
        <CollabContentsWrapper>

          <Link to={`/collab/${props.data.title}`}>
            <CollabTile>
{/*              {!props.simple &&
                <CollabTileHeader>
                  <SpotsLeft><b>{props.data.spots_left} spots</b> <span>left</span></SpotsLeft>
                  <ApplyButton className="apply-button"><div><CheckSolid/> apply now</div></ApplyButton>
                </CollabTileHeader>
              }*/}
              <StyledBackgroundImage 
                width="100%" 
                height="100%" 
                lazyLoad 
                className="influencer-bg-img" 
                src={props.data.banner_image}
              />
            </CollabTile>
          </Link>

          <TextBottom color={props.data.color} isDark={props.data.color_is_dark}>
            <CollabHostTextWrapper>
              <CollabHostIcon image={props.data.profile_pic}/>
              <Link to={"/profile/"+props.data.instagram_handle}><CollabHostMainText>{props.data.instagram_handle}</CollabHostMainText></Link>
              <CollabHostSubText>{props.data.instagram_info}</CollabHostSubText>
            </CollabHostTextWrapper>
            <Rating>
              <StarSolid/> <strong>9.6</strong> <span>(22)</span>
            </Rating>
          </TextBottom>
          <CollabTextWrapper>
{/*            <h3>{props.data.title}</h3>
*/}            <InstagramIcon/>
            <p>{props.data.description}</p>
           
            <Tags>
              {props.data.tags.length > 0 && props.data.tags.map((tag, index) => {
                return (
                  <Tag>#{tag}</Tag>
                )
              })}
            </Tags>
          </CollabTextWrapper>
          <PriceText>
            <HeartIcon/><span><small>STARTING AT</small> <b>${props.data.price}</b></span>
          </PriceText>
        </CollabContentsWrapper>
      </CollabTileInnerContainer>
    </CollabWrapper>
  )
}

export default Collab;
