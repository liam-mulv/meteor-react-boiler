import React, {useState, useEffect} from 'react'

// Styled Components
import {
	CreatorPostedStatusWrapper, 
	CreatorList,
	Creator,
	CreatorPictureAndTextWrapper,
	ProfilePictureWrapper,
	TextWrapper,
	Username,
	PostActivity,
	StyledBackgroundImage,
	CreatorBottom,
	ThumbnailRow,
	Thumbnail,
	AddNewCreatorWrapper
} from './CreatorPostedStatus.sc'
import {ComponentTitle} from '../../common/titles/Titles.sc'

// Icons
import BadgeCheckIcon from '../../../icons/badge-check-solid'
import EllipsisIcon from '../../../icons/ellipsis'
import PeoplePollIcon from '../../../icons/duotone/people-poll'

// Common Component
import NoResults from '../../common/noresults/NoResults'


function CreatorPostedStatus(props) {

	const renderCreatorTile = (creator) => {
		return (
			<Creator>
				<div>
					<CreatorPictureAndTextWrapper>
						<ProfilePictureWrapper>
							<StyledBackgroundImage
				                width="100%" 
				                height="100%" 
				                lazyLoad 
				                className="influencer-bg-img" 
				                src={creator.images}
							/>
						</ProfilePictureWrapper>
						<TextWrapper>
							<Username>
								<div>{creator.username}<BadgeCheckIcon/></div>
								{creator.has_posted &&
									<PostActivity>posted just now</PostActivity>
								}
							</Username>
							
							<CreatorBottom>
								{creator.has_posted &&
									<>
										<ThumbnailRow>
											<Thumbnail>
												<img src='https://scontent.xx.fbcdn.net/v/t51.2885-15/90958911_2235285896780235_5870769086061358313_n.jpg?_nc_cat=1&_nc_sid=8ae9d6&_nc_ohc=4dvpM-qI2L0AX_42yfF&_nc_ht=scontent.xx&oh=2e804ee48298ab09b0160dcd5d6112b1&oe=5EA5999D'/>
											</Thumbnail>
										</ThumbnailRow>
									</>
								}
								<EllipsisIcon/>
							</CreatorBottom>
						</TextWrapper>
					</CreatorPictureAndTextWrapper>
				</div>
			</Creator>
		)
	}

	const renderAddNewCreator = () => {
		return (
			<AddNewCreatorWrapper>
				Add Creator
			</AddNewCreatorWrapper>
		)
	}


	return (
		<CreatorPostedStatusWrapper>
			<div>
				<CreatorList>
					<ComponentTitle>Waiting For Post <small>({props.creators.length})</small></ComponentTitle>
					{props.creators.map((creator, index) => {
						return (
							<>
								{!creator.has_posted && renderCreatorTile(creator)}
							</>
						)
					})}	
					{props.creators.length === 0 &&
						<p>No creator yet</p>
					}
				</CreatorList>
			</div>
			<div>
				<CreatorList>
					<ComponentTitle>Posted <small>(4)</small></ComponentTitle>

					{props.creators.map((creator, index) => {
						return (
							<>
								{creator.has_posted && renderCreatorTile(creator)}
							</>
						)
					})}
					{props.creators.filter(function(c){return c.has_posted==true}).length === 0 &&
						<p>No posts yet</p>
					}
				</CreatorList>
			</div>
		</CreatorPostedStatusWrapper>
	)
}

export default CreatorPostedStatus