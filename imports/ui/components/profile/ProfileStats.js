import React from 'react'
import { 
	ProfileInfoFlex, 
	InfoBlock, 
	InfoTitle, 
	InfoDescription, 
	ProfileLeft,
	ProfileInfoRow
} from './ProfileInfo.sc'


// Icons
import TagIcon from '../../icons/tag'
import MapMarkerIcon from '../../icons/map-marker'
import StarIcon from '../../icons/star'
import StarSolidIcon from '../../icons/star-solid'

function ProfileStats(){
	return (
		<ProfileLeft>
			<p>Lorem ipsum dolor sit amet, ne nam nonumy iisque prodesset. Erat perpetua mei at. Bonorum eruditi delectus mea id, copiosae expetenda consectetuer eu nam.</p>
{/*			<ProfileInfoFlex>
				<ProfileInfoRow>
					<InfoBlock>
						<InfoTitle>Engagement</InfoTitle>
						<InfoDescription>11.9%</InfoDescription>
					</InfoBlock>
				</ProfileInfoRow>
				<ProfileInfoRow>
					<InfoBlock>
						<InfoTitle>Completed</InfoTitle>
						<InfoDescription>9 Collabs</InfoDescription>
					</InfoBlock>
				</ProfileInfoRow>
			</ProfileInfoFlex>*/}
		</ProfileLeft>
	)
}

export default ProfileStats