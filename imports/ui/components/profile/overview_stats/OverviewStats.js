import React, {useEffect, useState} from 'react'

// NPM
import AnimatedNumber from 'react-animated-number'
import HRNumbers from 'human-readable-numbers'
import { ReactTagify } from "react-tagify";

import {ProfileComponentWrapper} from '../ProfileComponentWrapper.sc'
import {AveragesContainer, ProfilePictureNameContainer, StyledBackgroundImage, DisplayPictureWrapper, TextContainer} from './OverviewStats.sc'

import HeartIcon from '../../../icons/heart-solid'
import CommentIcon from '../../../icons/comment-solid'
import VideoIcon from '../../../icons/video-solid'

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

function OverviewStats(props) {
	return (
		<React.Fragment>
			{!props.isLoading && props.user ?
				<ProfileComponentWrapper margin="16px 0px 40px">
					<ProfilePictureNameContainer>
						<DisplayPictureWrapper>
							<StyledBackgroundImage
				                width="100%" 
				                height="100%" 
				                lazyLoad 
				                className="influencer-bg-img" 
				                src={props.user.images ? props.user.images : ''}
							/>
						</DisplayPictureWrapper>
						<TextContainer>
							<span>
								<h1>{props.user.full_name ? props.user.full_name.trim().toLowerCase() : ''}</h1>
								<p>@{props.user.username ? props.user.username : ''}</p>
							</span>
						</TextContainer>

					</ProfilePictureNameContainer>
					<ReactTagify
						detectLinks={false}
						tagStyle={tagStyle}
						mentionStyle={mentionStyle}>
						<div>{props.user.description ? props.user.description : ''}</div>
					</ReactTagify>
					<AveragesContainer>
						<div>
							<span>Engagement</span>
							<p>
						        <AnimatedNumber component="text" value={props.user.engagement_rate ? props.user.engagement_rate : 0}
                 					style={{
                                        transition: '0.8s ease-out',
                                        transitionProperty:
                                            'background-color, color, opacity'
                                    }}
                                    frameStyle={perc => (
                                        perc === 100 ? {} : {backgroundColor: 'rgba(0,0,0,0)'}
                                    )}
                                    stepPrecision={0}
                                    duration={350}
                                    formatValue={n => n.toFixed(1)}

						        />
								<small>%</small>
							</p>
						</div>
						<div>
							<span>Followers</span>
							<p>
					        	<AnimatedNumber component="text" value={props.user.follower_count ? props.user.follower_count : 0}
                 					style={{
                                        transition: '0.8s ease-out',
                                        transitionProperty:
                                            'background-color, color, opacity'
                                    }}
                                    frameStyle={perc => (
                                        perc === 100 ? {} : {backgroundColor: 'rgba(0,0,0,0)'}
                                    )}
                                    stepPrecision={0}
                                    duration={350}
                                    formatValue={n => HRNumbers.toHumanString(n)}
						        />
							</p>
						</div>
						<div>
							<span>Posts</span>
							<p>
						        <AnimatedNumber component="text" value={props.user.media_count ? props.user.media_count : 0}
                 					style={{
                                        transition: '0.8s ease-out',
                                        transitionProperty:
                                            'background-color, color, opacity'
                                    }}
                                    frameStyle={perc => (
                                        perc === 100 ? {} : {backgroundColor: 'rgba(0,0,0,0)'}
                                    )}
                                    stepPrecision={0}
                                    duration={350}
                                    formatValue={n => HRNumbers.toHumanString(n)}
						        />
							</p>
						</div>
					</AveragesContainer>
				</ProfileComponentWrapper>
				:
				<div>Loading...</div>
			}
		</React.Fragment>
	)
}

export default OverviewStats