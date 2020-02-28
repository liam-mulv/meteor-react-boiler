import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Styled Components
import {
	InfluencerWrapper,
	InfluencerTile, 
	InfluencerTileInnerContainer,
	InfluencerImg, 
	DisplayPicture,
	TextBottom, 
	PriceText,
	MainText, 
	SubText, 
	Tags,
	Tag,
	BasicStats, 
	IconContainer, 
	FollowerText, 
	StyledBackgroundImage,
} from './Influencer.sc'

// Icons
import MessageIcon from '../../icons/message'
import PlusIcon from '../../icons/plus'
import UserIcon from '../../icons/users'
import HeartIcon from '../../icons/heart-solid'


function Influencer(props) {
  return (
  	<InfluencerWrapper simple={props.simple} list={props.list} className="influencerTile">
	  		<InfluencerTileInnerContainer>
				<InfluencerTile simple={props.simple} >
					

					{!props.simple &&
						<React.Fragment>
							<IconContainer className="message-icon">
								<MessageIcon/>
							</IconContainer>
							<IconContainer top="65px" className="message-icon" plus={true}>
								<PlusIcon/>
							</IconContainer>
						</React.Fragment>
					}

					<Link to={"/profile/"+props.data.instagram_handle}>
						<DisplayPicture>
							<StyledBackgroundImage 
							 	simple={props.simple} 
								width="100%" 
								height="100%" 
								lazyLoad 
								className="influencer-bg-img" 
								src={props.data.profile_pic}
							/>
						</DisplayPicture>
					</Link>

					<TextBottom simple={props.simple}>
						<Link to={"/profile/"+props.data.instagram_handle}>
							<MainText>{props.data.full_name}</MainText>
							<SubText simple={props.simple}>{props.data.instagram_handle}</SubText>
						</Link>
						<FollowerText>
							<b>{props.data.instagram_follow_count_formatted}</b> <br/> 
							<div>followers</div>
						</FollowerText>
					</TextBottom>
					{!props.simple &&
						<React.Fragment>
							<PriceText>
					            <HeartIcon/> <span><small>RATE</small> <b>$500</b></span>
					        </PriceText>
						</React.Fragment>
					}
				</InfluencerTile>
			</InfluencerTileInnerContainer>
	</InfluencerWrapper>
  )
}

export default Influencer;
