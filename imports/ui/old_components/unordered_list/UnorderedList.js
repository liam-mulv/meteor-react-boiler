import React from 'react'

import {UnorderedListWrapper, UnorderedListContainer, UnorderedList, ListItem} from './UnorderedList.sc'


function UnorderedListComponents(props) {
	return (
		<UnorderedListWrapper>
			<UnorderedListContainer>
				<UnorderedList>
					{props.items.map((item, index) => {
						return (
							<ListItem>
								{item}
							</ListItem>
						)
					})}
				</UnorderedList>
			</UnorderedListContainer>
		</UnorderedListWrapper>
	)
}

export default UnorderedListComponents