import React, {useState, useEffect} from 'react'

// NPM
import HRNumbers from 'human-readable-numbers'
import moment from 'moment'

// Styled Components
import {
	FeedWrapper,
	FeedColumn, 
	ColumnCard, 
	MediaWrapper, 
	PostContent, 
	DescriptionContainer, 
	Header, 
	Caption, 
	Footer, 
	Stats, 
	MediaDate, 
	DisplayPictureWrapper, 
	StyledBackgroundImage,
	NoResult
} from  './PostResults.sc'
import {ComponentTitle} from '../../common/titles/Titles.sc'
// Icons
import BadgeCheckIcon from '../../../icons/badge-check-solid'
import HeartIcon from '../../../icons/heart-solid'
import CommentIcon from '../../../icons/comment-solid'
import ChevronRight from '../../../icons/chevron-right'
import ChevronLeft from '../../../icons/chevron-left'
import TimesIcon from '../../../icons/times'
import ImagePolaroid from '../../../icons/duotone/image-polaroid'

// Common Component
import NoResults from '../../common/noresults/NoResults'


function PostResults(props) {
	return (
		<FeedWrapper>
{/*			<ComponentTitle padding="0 8">Creator Posts</ComponentTitle>
*/}			{!props.isLoading && props.ig_media.length > 0 ?
				<FeedColumn onScroll={(e) => props.handleScroll(e, 'right')} isOffSet={props.rightIsScrolled}>
					{props.ig_media.map((media, index) =>{
						return (
							<React.Fragment>
								{media.media_url &&
									<ColumnCard isActive={props.timelinePostIsActive === index ? true : props.timelinePostIsActive === null ? true : false} id={`post-result-${index}`} onClick={() => {this.scrollDiv.current.scrollIntoView({ behavior: 'smooth' })}}>
										<MediaWrapper>
											{media.media_type === 'VIDEO' ?
												<video class="_e2l2kr" autoplay="" crossorigin="anonymous" loop="true" playsinline="" muted preload="metadata">
													<source src={media.media_url} type="video/mp4"/>
												</video>
												:
												<img src={media.media_url}/>
											}
										</MediaWrapper>
										<PostContent>
											<DescriptionContainer>
												<Header>
													<DisplayPictureWrapper>
														<StyledBackgroundImage
											                width="100%" 
											                height="100%" 
											                lazyLoad 
											                className="influencer-bg-img" 
											                src={media.profile_picture ? media.profile_picture : ''}
														/>
													</DisplayPictureWrapper>
													<div>{media.username}<BadgeCheckIcon/></div>
												</Header>

												<Footer>
													<Stats>
														<div>
															<span>Reg Eng.</span>
															<p>
																{media.regular_engagement_rate ? media.regular_engagement_rate.toFixed(1) : 0}%
															</p>
														</div>
														<div>
															<span>Post Eng.</span>
															<p style={{color: media.engagement_rate > media.regular_engagement_rate ? 'green' : 'red'}}>
																{media.engagement_rate ? media.engagement_rate.toFixed(1) : ''}%
															</p>
														</div>
														<div>
															<span>Likes</span>
															<p>
																<HeartIcon/>
																{HRNumbers.toHumanString(media.like_count)}
															</p>
														</div>
													</Stats>
													<MediaDate>{moment(media.timestamp).fromNow()}</MediaDate>
												</Footer>
											</DescriptionContainer>
										</PostContent>
									</ColumnCard>
								}
							</React.Fragment>
						)
					})}
				</FeedColumn>
				: props.isLoading ?
				<FeedColumn>
					Loading...
				</FeedColumn>
				: 
				<FeedColumn>
					<NoResults iconSize={100} icon={<ImagePolaroid/>} message="No posts yet"/>
				</FeedColumn>
			}
		</FeedWrapper>
	)
}

export default PostResults