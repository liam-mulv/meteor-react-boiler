import React from 'react'

// Components
import ProfilePicture from '../../profile_picture/ProfilePicture'

// Styled Components
import {List, ListItem, ListImageWrapper, ListImage} from './FormList.sc'

// Icons
import TimesIcon from '../../../../icons/times'

function FormList (props) {

	const renderCreatorItem = (item) => {
		return (
			<ListItem>
				<div><ProfilePicture image={item.images}/>{item.username}</div><div onClick={() => props.removeItem(item._id)}><TimesIcon/></div>
			</ListItem>
		)
	}

	const renderHashtagItem = (item) => {
		return (
			<ListItem>
				<div><span>#</span>{item}</div><div onClick={() => props.removeItem(item)}><TimesIcon/></div>
			</ListItem>
		)
	}

	return (
		<>
			{!props.isLoading && typeof props.items !== 'undefined' && props.items.length > 0 &&
				<List>
					{props.items.map((item, index) => {
						return (
							<>
								{props.type !== 'creator' ?
									<>
										{renderHashtagItem(item)}
									</>
									:
									<>
										{renderCreatorItem(item)}
									</>
								}	
							</>
						)
					})}
				</List>
			}
		</>
	)
}

export default FormList