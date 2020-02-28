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
		                src="https://cdn.shopify.com/s/files/1/0082/0795/8078/products/PeachesandCream-124.png?v=1578890685"
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