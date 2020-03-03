import React from 'react'

// NPM
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


// Components
import SkeletonProfileInfo from './SkeletonProfileContent'
import ProfileStats from './ProfileStats'
import Tags from '../../components/tags/Tags'

// Styled Components
import {
	HostInfoWrapper, 
	DisplayPictureWrapper, 
	DisplayPictureContainer, 
	HostName, 
	InstagramHandle, 
	InstagramStats, 
	TextWrapper, 
	StyledBackgroundImage, 
	InstagramIconWrapper
} from './InstagramInfo.sc'

import { 
	ProfilePriceAndButtonWrapper,
	PriceAndButtonsContainer,
	ProfilePictureContainer, 
	ProfilePicture, 
	Username, 
	UserInfo,
	ProfileInfoFlex, 
	InfoBlock, 
	InfoTitle, 
	InfoDescription, 
	Tag, 
	ProfileButtonContainer,
	Shine,
	ProfileLeftAbsolute,
	ProfileRight,
	InstagramFeed,
	ProfileInfoRow,
	InviteButtonContainer,
	ProfileLinks
} from './ProfileInfo.sc'
import {Spacer, PageTitleWrapper} from '../../common/Common.sc'

// Skeleton Styles
import {SkeletonText} from '../../common/Skeleton.sc'
import SkeletonParagraph from '../skeleton_paragraph/SkeletonParagraph'

// Icons
import MessageIcon from '../../icons/message'
import PlusIcon from '../../icons/plus'
import InstagramIcon from '../../icons/instagram'
import TagIcon from '../../icons/tag'
import MapMarkerIcon from '../../icons/map-marker'
import CheckIcon from '../../icons/check-circle'
import StarIcon from '../../icons/star'
import StarSolidIcon from '../../icons/star-solid'
import BadgeCheckIcon from '../../icons/badge-check-solid'
import PaperclipIcon from '../../icons/paperclip'
import PaperPlaneIcon from '../../icons/paper-plane'

// Data
const tags = [
	{text: 'fashion', prefix:'#'},
	{text: 'influencer', prefix:'#'},
	{text: 'lifestyle', prefix:'#'},
]

function PriceAndButtons() {
	return (
		<PriceAndButtonsContainer>
			<ProfileButtonContainer>
				<button><MessageIcon/><Shine className="button-shine"/></button><button><PlusIcon/></button>
			</ProfileButtonContainer>
		</PriceAndButtonsContainer>
	)
}

function ProfileInfo(props) {
	return (
		<div>
			{!props.isLoading ?
				<ProfilePriceAndButtonWrapper>
					<HostInfoWrapper>
						<DisplayPictureWrapper>
							<DisplayPictureContainer>
				             	<StyledBackgroundImage 
					                width="100%" 
					                height="100%" 
					                lazyLoad 
					                className="influencer-bg-img" 
					                src="https://cdn.shopify.com/s/files/1/0082/0795/8078/products/PeachesandCream-124.png?v=1578890685"
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
								<InstagramHandle>peaches.label <BadgeCheckIcon/></InstagramHandle>
							</Link>
							<InstagramStats>
												<ProfileLinks>
						<p><PaperPlaneIcon/>rxfusal@gmail.com</p>
						<p><PaperclipIcon/>pinterest.com/dear_cherie</p>
					</ProfileLinks>
{/*								<div>
								 	<small>Engagement</small><br/>
									<p>9.7<small>%</small></p>
								</div>
								<div>
									<small>Followers</small><br/> 
									<p>123k</p>
								</div>
								<div>
									<small>Posts</small><br/> 
									<p>823</p>
								</div>*/}
							</InstagramStats>
						</TextWrapper>
					</HostInfoWrapper>


{/*					<p>☕️ flat white to go thx — melbourne. next: syd — dreamer, content creator send love: 💌 | rxfusal@gmail.com</p>
*/}					<InviteButtonContainer>
						<button>Add To List<Shine/></button>
						<button>Add To Collab<Shine/></button>
					</InviteButtonContainer>
				</ProfilePriceAndButtonWrapper>
			:
				<ProfilePriceAndButtonWrapper>
					<HostInfoWrapper>
						<DisplayPictureWrapper>
							<DisplayPictureContainer>
								<SkeletonText height="90px" width="90px" borderRadius="100%"/>
				            </DisplayPictureContainer>
{/*				            <InstagramIconWrapper>
								<a href="https://www.instagram.com/andi.lane" target="_blank">
									<InstagramIcon/>
								</a>
							</InstagramIconWrapper>*/}
			            </DisplayPictureWrapper>
						<TextWrapper>
							<Link to={`/profile/andi.lane`}>
								<HostName><SkeletonText height="25px" width="60%" float="none"/></HostName>
							</Link>
							<Link to={`/profile/andi.lane`}>
								<InstagramHandle><SkeletonText width="40%" float="none"/>{/*<BadgeCheckIcon/>*/}</InstagramHandle>
							</Link>
							<InstagramStats>
								<div>
									<span><SkeletonText height="20px" width="35%" float="none"/></span><br/> <small><SkeletonText width="50%" float="none"/></small>
								</div>
								<div>
									<span><SkeletonText height="20px" width="35%" float="none"/></span><br/> <small><SkeletonText width="50%" float="none"/></small>
								</div>
								<div>
									<span><SkeletonText height="20px" width="35%" float="none"/></span><br/> <small><SkeletonText width="50%" float="none"/></small>
								</div>
							</InstagramStats>
						</TextWrapper>
					</HostInfoWrapper>
					<p><SkeletonParagraph numberOfLines={3}/></p>
					<InviteButtonContainer>
						<SkeletonText height="51px" width="100%" float="none" margin="0px"/>
					</InviteButtonContainer>
				</ProfilePriceAndButtonWrapper>
			}
		</div>
	)
}

export default ProfileInfo

