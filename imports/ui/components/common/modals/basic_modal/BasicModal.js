import React, {useEffect, useState, useRef} from 'react'

// Styled Components
import {BasicModalWrapper, BasicModalContainer, BasicModalTint, CloseModalWrapper} from './BasicModal.sc'

// Hooks
import {useOutsideClick} from '../../../../helpers/helpers'

// Icons
import CloseIcon from '../../../../icons/times'

function BasicModal (props) {

	const ref = useRef()

	useOutsideClick(ref, () => {
		if(props.closeOnClickOutside) {
			props.closeOnClickOutside(false)
		}
	})
	
	return (
		<React.Fragment>
			{props.isVisible &&
				<BasicModalWrapper>
					<BasicModalContainer ref={ref}>
						{!props.closeOnClickOutside && 
							<CloseModalWrapper onClick={() => props.setIsModalVisible(false)}>
								<CloseIcon/>
							</CloseModalWrapper>
						}
						{props.children}
					</BasicModalContainer>
					<BasicModalTint/>
				</BasicModalWrapper>
			}
		</React.Fragment>
	)
}

export default BasicModal