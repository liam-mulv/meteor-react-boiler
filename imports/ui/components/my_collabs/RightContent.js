import React, {useEffect, useState} from 'react'

import {RightContentWrapper} from './MyCollabs.sc'
import {DragAndDropWrapper, DragAndDropTextWrapper, ImageTextWrapper} from './RightContent.sc'
import ImagesIcon from '../../icons/images'


function RightContent() {
	return (
		<RightContentWrapper>
			<DragAndDropWrapper>
				<ImageTextWrapper>
					<ImagesIcon/>
					<DragAndDropTextWrapper>
						<h4>Drag & Drop!</h4>
						<p>Drop your photo or video here <b>for review</b></p>
					</DragAndDropTextWrapper>
				</ImageTextWrapper>
			</DragAndDropWrapper>
		</RightContentWrapper>
	)
}

export default RightContent