import React, {useEffect, useState} from 'react'

// NPM
import { ReactTagify } from "react-tagify";
import HRNumbers from 'human-readable-numbers'
import moment from 'moment'

// Styled Components
import {
	MediaModalWrapper, 
	MediaModalContainer, 
	MediaContainer, 
	DescriptionContainer, 
	DisplayPictureWrapper, 
	Header,
	Caption,
	Footer,
	Stats,
	MediaDate,
	StyledBackgroundImage,
	Previous,
	Next,
	CloseModal,
	ArrowsWrapper,
	Arrows
} from './MediaModalContent.sc'

// Icons
import BadgeCheckIcon from '../../../icons/badge-check-solid'
import HeartIcon from '../../../icons/heart-solid'
import CommentIcon from '../../../icons/comment-solid'
import ChevronRight from '../../../icons/chevron-right'
import ChevronLeft from '../../../icons/chevron-left'
import TimesIcon from '../../../icons/times'

const mentionStyle = {
    color: '#2196F3',
    opacity: 1,
    cursor: 'pointer'
}

const tagStyle = {
    color: '#2196F3',
    opacity: 1,
    cursor: 'pointer'
}


function MediaModal (props) {
	return (
		<React.Fragment>
			{!props.isLoading ?
				<>

					<MediaModalWrapper>
						<ArrowsWrapper>
							<Arrows>
								{props.currentSlide !== props.lastSlide &&
									<Next onClick={() => props.nextSlide(props.currentSlide)}>
										<ChevronRight/>
									</Next>
								}
								{props.currentSlide !== 0 &&
									<Previous onClick={() => props.prevSlide(props.currentSlide)}>
										<ChevronLeft/>
									</Previous>
								}
							</Arrows>
						</ArrowsWrapper>
						<MediaModalContainer>
							<MediaContainer>
								{props.media.media_type === 'VIDEO' ?
									<video key={props.media.media_url} class="_e2l2kr" controls autoplay="" crossorigin="anonymous" loop="true" preload="metadata">
										<source src={props.media.media_url} type="video/mp4"/>
									</video>
									:
									<img src={props.media.media_url}/>
								}
							</MediaContainer>
							<DescriptionContainer>
								<Header>
									<DisplayPictureWrapper>
										<StyledBackgroundImage
							                width="100%" 
							                height="100%" 
							                lazyLoad 
							                className="influencer-bg-img" 
							                src={props.user.images ? props.user.images : ''}
										/>
									</DisplayPictureWrapper>
									<div>{props.media.username}<BadgeCheckIcon/></div>
								</Header>

								<Caption>
									<ReactTagify
									detectLinks={false}
									tagStyle={tagStyle}
									mentionStyle={mentionStyle}>
										{props.media.caption}
									</ReactTagify>
								</Caption>
							
								<Footer>
									<Stats>
										<div>
											<span>Engagement</span>
											<p>
												{props.media.engagement_rate ? props.media.engagement_rate.toFixed(1) : ''}%
											</p>
										</div>
										<div>
											<span>Likes</span>
											<p>
												<HeartIcon/>
												{HRNumbers.toHumanString(props.media.like_count)}
											</p>
										</div>
										<div>
											<span>Comments</span>
											<p>
												<CommentIcon/>
												{HRNumbers.toHumanString(props.media.comments_count)}
											</p>
										</div>
									</Stats>
									<MediaDate>{moment(props.media.timestamp).fromNow()}</MediaDate>
								</Footer>
							</DescriptionContainer>
						</MediaModalContainer>
			
						<CloseModal onClick={() => props.closeModal(false)}>
							<TimesIcon/>
						</CloseModal>
					</MediaModalWrapper>
				</>
				:
				<div>Loading...</div>
			}
		</React.Fragment>
	)
}



export default MediaModal