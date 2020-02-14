import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Styled Components
import {
	InfluencerWrapper,
	InfluencerTile, 
	InfluencerTileInnerContainer,
	InfluencerImg, 
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
						<StyledBackgroundImage 
						 	simple={props.simple} 
							width="100%" 
							height="100%" 
							lazyLoad 
							className="influencer-bg-img" 
							src={props.data.profile_pic}
						/>
					</Link>

					<TextBottom simple={props.simple}>
						<Link to={"/profile/"+props.data.instagram_handle}>
							<MainText simple={props.simple}>{props.data.instagram_handle}</MainText>
						</Link>
						<FollowerText><b>{props.data.instagram_follow_count_formatted}</b> {!props.simple && 'followers'}</FollowerText>
						{!props.simple &&
							<React.Fragment>
								<PriceText>
						            <span><b>$3,000</b> / collab</span>
						        </PriceText>
								{/*<Tags>

									{props.data.categories.length > 0 && props.data.categories.map((category, index) => {
										return (
											<Tag>#{category} </Tag>
										)
									})}
								</Tags>*/}
							</React.Fragment>
						}
					</TextBottom>
				</InfluencerTile>
			</InfluencerTileInnerContainer>
	</InfluencerWrapper>
  )
}

export default Influencer;
