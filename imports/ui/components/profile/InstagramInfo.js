import React from 'react'
import { Link } from 'react-router-dom'

// styled components
import {Flex} from '../../common/Common.sc'

import {HostInfoWrapper, DisplayPictureWrapper, DisplayPictureContainer, HostName, InstagramHandle, InstagramStats, TextWrapper, StyledBackgroundImage, InstagramIconWrapper} from './InstagramInfo.sc'

//icons
import BadgeCheckIcon from '../../icons/badge-check-solid'
import InstagramIcon from '../../icons/instagram'

function InstagramInfo(props) {
	return (
		<HostInfoWrapper>
			<DisplayPictureWrapper>
				<DisplayPictureContainer>
	             	<StyledBackgroundImage 
		                width="100%" 
		                height="100%" 
		                lazyLoad 
		                className="influencer-bg-img" 
		                src={"https://files.slack.com/files-pri/TM2DYBXQR-FTTD1KCBG/screen_shot_2020-02-09_at_12.28.39_am.png"}
		            />
	            </DisplayPictureContainer>
	            <InstagramIconWrapper>
					<a href="https://www.instagram.com/andi.lane" target="_blank">
						<InstagramIcon/>
					</a>
				</InstagramIconWrapper>
            </DisplayPictureWrapper>
			<TextWrapper>
				<Link to={`/profile/andi.lane`}>
					<HostName>Emily van Run</HostName>
				</Link>
				<Link to={`/profile/andi.lane`}>
					<InstagramHandle>@peaches.label <BadgeCheckIcon/></InstagramHandle>
				</Link>
				<InstagramStats>
					<div>
						<span>823</span><br/> <small>Posts</small>
					</div>
					<div>
						<span>12.5m</span><br/> <small>Followers</small>
					</div>
										<div>
						<span>9.7%</span><br/> <small>Engagement</small>
					</div>
				</InstagramStats>
			</TextWrapper>
		</HostInfoWrapper>
	)	
}

export default InstagramInfo