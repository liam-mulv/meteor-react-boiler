import React from 'react'


// Icons
import StarSolidIcon from '../../icons/star-solid'

// Styled Components
import {StarRatingWrapper} from './StarRating.sc'


function StarRating(props) {
	return (
		<StarRatingWrapper>
		    <p>{!props.hideRatingNumber && '4.9'} <StarSolidIcon/><StarSolidIcon/><StarSolidIcon/><StarSolidIcon/><StarSolidIcon/></p>
		</StarRatingWrapper>
	)
}

export default StarRating