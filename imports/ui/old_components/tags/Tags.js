import React from 'react'

import {TagWrapper, TagList, Tag} from './Tags.sc'

function Tags(props) {
	return (
		<TagWrapper>
			{props.title && <h1>{props.title}</h1>}
			{props.description && <p>{props.description}</p>}
			<TagList>
				{props.tags.map((tag, index) => {
					return (
						<Tag><span>{tag.prefix}</span>{tag.text}</Tag>
					)
				})}
			</TagList>
		</TagWrapper>
	)
}

export default Tags