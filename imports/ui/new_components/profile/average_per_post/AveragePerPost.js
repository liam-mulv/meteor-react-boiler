import React, {useEffect, useState} from 'react'

import {ProfileComponentWrapper} from '../ProfileComponentWrapper.sc'
import {AveragesContainer, CommentToLikeRatioContainer} from './AveragePerPost.sc'


import HeartIcon from '../../../icons/heart-solid'
import CommentIcon from '../../../icons/comment-solid'
import VideoIcon from '../../../icons/video-solid'
import QuestionIcon from '../../../icons/question-circle-solid'


function AveragePerPost() {
	return (
		<ProfileComponentWrapper>
			<h1>Averages Per Post</h1>

			<AveragesContainer>
				<div>
					<span>Avg Likes</span>
					<p><HeartIcon/>324</p>
				</div>
				<div>
					<span>Avg Comments</span>
					<p><CommentIcon/>124</p>
				</div>
				<div>
					<span>Avg Video Views</span>
					<p><VideoIcon/>1,2k</p>
				</div>
			</AveragesContainer>
			<CommentToLikeRatioContainer>
				<span><div>1:3</div><span>Comment:Like Ratio</span></span>
				<span><span>GOOD</span><QuestionIcon/></span>
			</CommentToLikeRatioContainer> 
		</ProfileComponentWrapper>
	)
}

export default AveragePerPost