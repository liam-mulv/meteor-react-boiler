import React, {useEffect, useState} from 'react'

import {ProfileComponentWrapper} from '../ProfileComponentWrapper.sc'
import {AveragesContainer, ProfilePictureNameContainer, StyledBackgroundImage, DisplayPictureWrapper, TextContainer} from './OverviewStats.sc'


import HeartIcon from '../../../icons/heart-solid'
import CommentIcon from '../../../icons/comment-solid'
import VideoIcon from '../../../icons/video-solid'

function OverviewStats() {
	return (
		<ProfileComponentWrapper>
			<ProfilePictureNameContainer>
				<DisplayPictureWrapper>
					<StyledBackgroundImage
		                width="100%" 
		                height="100%" 
		                lazyLoad 
		                className="influencer-bg-img" 
		                src="https://cdn.shopify.com/s/files/1/0082/0795/8078/products/PeachesandCream-124.png?v=1578890685"
					/>
				</DisplayPictureWrapper>
				<TextContainer>
					<span>
						<h1>Emily van Run</h1>
						<p>@peaches.label</p>
					</span>
				</TextContainer>

			</ProfilePictureNameContainer>

			<p>☕️ flat white to go thx — melbourne. next: syd — dreamer, content creator send love: 💌 | rxfusal@gmail.com</p>
			<AveragesContainer>
				<div>
					<span>Engagement</span>
					<p>9.7<small>%</small></p>
				</div>
				<div>
					<span>Followers</span>
					<p>123k</p>
				</div>
				<div>
					<span>Posts</span>
					<p>823</p>
				</div>
			</AveragesContainer>
		</ProfileComponentWrapper>
	)
}

export default OverviewStats