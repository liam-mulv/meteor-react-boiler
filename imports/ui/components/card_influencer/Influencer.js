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

					<Link to={"/profile/"+props.data.username}>
						<DisplayPicture>
							<StyledBackgroundImage 
							 	simple={props.simple} 
								width="100%" 
								height="100%" 
								lazyLoad 
								className="influencer-bg-img" 
								src={props.data.images ? props.data.images[0] : ''}
							/>
						</DisplayPicture>
					</Link>

					<TextBottom simple={props.simple}>
						<Link to={"/profile/"+props.data.username}>
							<MainText>{props.data.name}</MainText>
							<SubText simple={props.simple}>{props.data.username}</SubText>
						</Link>
						<FollowerText>
							<b>{props.data.follower_count_readable}</b> <br/> 
							<div>followers</div>
						</FollowerText>
					</TextBottom>
					{!props.simple &&
						<React.Fragment>
							<PriceText>
					            <HeartIcon/> <span><small>RATE</small> <b>{props.data.estimated_cost_range_per_post ? props.data.estimated_cost_range_per_post[0] : ''}</b></span>
					        </PriceText>
						</React.Fragment>
					}
				</InfluencerTile>
			</InfluencerTileInnerContainer>
	</InfluencerWrapper>
  )
}

export default Influencer;
