import React, {useEffect, useState} from 'react'

// NPM
import AnimatedNumber from 'react-animated-number'
import HRNumbers from 'human-readable-numbers'

import {ProfileComponentWrapper} from '../ProfileComponentWrapper.sc'
import {AveragesContainer, CommentToLikeRatioContainer} from './AveragePerPost.sc'

import HeartIcon from '../../../icons/heart-solid'
import CommentIcon from '../../../icons/comment-solid'
import VideoIcon from '../../../icons/video-solid'
import QuestionIcon from '../../../icons/question-circle-solid'


function AveragePerPost(props) {
	return (
		<React.Fragment>
			{!props.isLoading && props.user ?
				<ProfileComponentWrapper>
					<h1>Engagement</h1>

					<AveragesContainer>
						<div>
							<span>Avg Likes</span>
							<p>
								<HeartIcon/>
								<AnimatedNumber component="text" value={props.user.avg_likes_per_post ? props.user.avg_likes_per_post : 0}
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
							<span>Avg Comments</span>
							<p>
								<CommentIcon/>
								<AnimatedNumber component="text" value={props.user.avg_comments_per_post ? props.user.avg_comments_per_post : 0}
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
							<span>Avg Video Views</span>

							<p>
								<VideoIcon/>
					        	<AnimatedNumber component="text" value={props.user.avg_views_per_video ? props.user.avg_views_per_video : 0}
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
					<CommentToLikeRatioContainer>
						<span><div>{props.user.comment_to_like_ratio ? props.user.comment_to_like_ratio : ''}</div><span>Comment:Like Ratio</span></span>
						<span><span>GOOD</span><QuestionIcon/></span>
					</CommentToLikeRatioContainer> 
				</ProfileComponentWrapper>
			: 
			<div>Loading...</div>
		}
		</React.Fragment>
	)
}

export default AveragePerPost