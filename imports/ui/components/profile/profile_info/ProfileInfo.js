import React from 'react'

// NPM
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ReactTooltip from 'react-tooltip'

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
	InstagramIconWrapper,
	ProfilePriceAndButtonWrapper,
	InviteButtonContainer,
	ProfileLinks,
	Shine,
	ListWrapper,
	ListIcon,
} from './ProfileInfo.sc'


// Skeleton Styles
import {SkeletonText} from '../../common_old/Skeleton.sc'
import SkeletonParagraph from '../../skeletons/skeleton_paragraph/SkeletonParagraph'

// Icons
import InstagramIcon from '../../../icons/instagram'
import BadgeCheckIcon from '../../../icons/badge-check-solid'
import PaperclipIcon from '../../../icons/paperclip'
import PaperPlaneIcon from '../../../icons/paper-plane'

// Hooks
import {useLists} from '../../../helpers/helpers'


function ProfileInfo(props) {

	const {lists, isLoadingLists} = useLists()

	const inLists = [] 
	lists.map((list, index) => {
		if(list.creators.some(c => c.username === props.user.username)){
			inLists.push(list)
		}
	})

	return (
		<div>
			{!props.isLoading && props.user ?
				<ProfilePriceAndButtonWrapper>
					<HostInfoWrapper>
						<DisplayPictureWrapper>
							<DisplayPictureContainer>
				             	<StyledBackgroundImage 
					                width="100%" 
					                height="100%" 
					                lazyLoad 
					                className="influencer-bg-img" 
					                src={props.user.images ? props.user.images : ''}
					            />
				            </DisplayPictureContainer>
				            <InstagramIconWrapper>
								<a href={props.user.profile_url ? props.user.profile_url : ''} target="_blank">
									<InstagramIcon/>
								</a>
							</InstagramIconWrapper>
			            </DisplayPictureWrapper>

						<TextWrapper>
							<Link to={`/profile/andi.lane`}>
								<HostName>{props.user.full_name ? props.user.full_name.toLowerCase() : ''}</HostName>
							</Link>
							<a href={props.user.profile_url ? props.user.profile_url : ''}>
								<InstagramHandle>{props.user.username ? props.user.username : ''}<BadgeCheckIcon/></InstagramHandle>
							</a>
							{inLists.length > 0 &&
								<ListWrapper>
									{inLists.map((list, index) => {
										return (
											<>
												<ListIcon onClick={() => props.toggleListToEdit(list)} data-tip={list.title} color={list.title.slice(0,1) === 'I' ? '#7fe5dd' : list.title.slice(0,1) === 'V' ? '#b8bafd' : list.title.slice(0,1) === 'N' ? '#ffc39a' : '#fdb8d0'}><div>{list.title.slice(0,1)}</div></ListIcon>
											</>
										)
									})}
									<ReactTooltip effect="solid" />
								</ListWrapper>
							}
							<InstagramStats>
								<ProfileLinks>
									{props.user.emails && <a href={`mailto:${props.user.emails[0]}`}><p><PaperPlaneIcon/>{props.user.emails[0]}</p></a>}
									{props.user.website_url && <a href={props.user.website_url} target="_blank"><p><PaperclipIcon/>{props.user.website_url}</p></a>}
								</ProfileLinks>
							</InstagramStats>
						</TextWrapper>
					</HostInfoWrapper>


					<InviteButtonContainer>
						<button onClick={() => props.setIsAddToListModalVisible(true)}>Add To List<Shine/></button>
						<button onClick={() => props.setIsAddToCollabModalVisible(true)}>Add To Collab<Shine/></button>
					</InviteButtonContainer>
				</ProfilePriceAndButtonWrapper>
			:
				<ProfilePriceAndButtonWrapper>
					<HostInfoWrapper>
						<DisplayPictureWrapper>
							<DisplayPictureContainer>
								<SkeletonText height="100px" width="100px" borderRadius="5px"/>
				            </DisplayPictureContainer>
			            </DisplayPictureWrapper>
						<TextWrapper>
							<Link to={`/profile/andi.lane`}>
								<HostName><SkeletonText height="25px" width="60%" float="none"/></HostName>
							</Link>
							<Link to={`/profile/andi.lane`}>
								<InstagramHandle><SkeletonText width="40%" float="none"/></InstagramHandle>
							</Link>
							<InstagramStats>
								<ProfileLinks>
									<div>
										<p><SkeletonText height="20px" width="35%" float="none"/></p>
									</div>
									<div>
										<p><SkeletonText height="20px" width="35%" float="none"/></p>
									</div>
								</ProfileLinks>
							</InstagramStats>
						</TextWrapper>
					</HostInfoWrapper>
					<InviteButtonContainer>
						<SkeletonText height="51px" width="100%" float="none" margin="0px"/>
					</InviteButtonContainer>
				</ProfilePriceAndButtonWrapper>
			}
		</div>
	)
}

export default ProfileInfo

