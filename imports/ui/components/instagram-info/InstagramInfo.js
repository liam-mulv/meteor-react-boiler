import React from 'react'

// styled components
import {Flex} from '../../common/Common.sc'

import {HostInfoWrapper, DisplayPictureContainer, HostName, InstagramHandle, InstagramStats, TextWrapper, StyledBackgroundImage, InstagramIconWrapper} from './InstagramInfo.sc'

//icons
import BadgeCheckIcon from '../../icons/badge-check-solid'
import InstagramIcon from '../../icons/instagram'

function HostInfo() {
	return (
		<HostInfoWrapper>
			<Flex>
				<DisplayPictureContainer>
					<InstagramIconWrapper>
						<InstagramIcon/>
					</InstagramIconWrapper>
	             	<StyledBackgroundImage 
		                width="95%" 
		                height="95%" 
		                lazyLoad 
		                className="influencer-bg-img" 
		                src={"https://scontent-den4-1.cdninstagram.com/v/t51.2885-19/s320x320/65314773_332616907668004_2901286846950539264_n.jpg?_nc_ht=scontent-den4-1.cdninstagram.com&_nc_ohc=P61UYLKU7yEAX_-sVd5&oh=bc43c60cc74e4c85a5936b8568b64ab9&oe=5EC041D0"}
		            />
	            </DisplayPictureContainer>
				<TextWrapper>
					<HostName>Peaches & Cream Label</HostName>
					<InstagramHandle>@peaches.label <BadgeCheckIcon/></InstagramHandle>
					<InstagramStats>
						<div>
							<span>823</span> <small>Posts</small>
						</div>
						<div>
							<span>12.5m</span> <small>Followers</small>
						</div>
					</InstagramStats>
				</TextWrapper>
			</Flex>
			<p>Free shipping on orders over $50!* Express worldwide shipping Don't forget to tag us in any uploads of your purchase to receive 20% your next order✨</p>
		</HostInfoWrapper>
	)	
}

export default HostInfo