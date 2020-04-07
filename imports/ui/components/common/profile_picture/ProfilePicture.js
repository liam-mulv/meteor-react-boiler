import React from 'react'

// Styled Components
import {ProfilePictureWrapper, Picture} from './ProfilePicture.sc'

// Icons
import UserIcon from '../../../icons/duotone/user-alt'


function ProfilePicture (props) {
	return (
		<ProfilePictureWrapper><Picture image={props.image}/><UserIcon/></ProfilePictureWrapper>
	)
}

export default ProfilePicture