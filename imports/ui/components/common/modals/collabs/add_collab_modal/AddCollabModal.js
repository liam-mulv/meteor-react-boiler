import {Meteor} from 'meteor/meteor'
import React, {useEffect, useState} from 'react'

// NPM
import moment from 'moment'

// Component
import BasicModal from '../../basic_modal/BasicModal'
import DateForm from './DateForm'
import HashtagsForm from './HashtagsForm'
import TitleForm from './TitleForm'
import CreatorsForm from './CreatorsForm'

import Progress from '../../../progress/Progress'
import Button from '../../../buttons/Buttons'

// Styled Components
import {
	CreateCollabWrapper,
	CreateCollabModalContainer,
	ModalContent,
	Footer
} from './AddCollabModal.sc'

//
import ChevronRightIcon from '../../../../../icons/chevron-right'
import ArrowRight from '../../../../../icons/arrow-right'
import ArrowLeft from '../../../../../icons/arrow-left'
import CheckIcon from '../../../../../icons/duotone/check'

// Hooks
import {useCreateListForm, useLists} from '../../../../../helpers/helpers'
import { useHistory } from 'react-router-dom';


function AddToListModal (props) {

  	const history = useHistory()

	const [setupComplete, setSetupComplete] = useState(false)
	const [collabId, setCollabId] = useState('')
  	const [isLoadingNext, setIsLoadingNext] = useState(false)

	const redirectToCollab = () => {
		if(setupComplete) {
			props.setIsModalVisible(false)
			history.push('/collabs/'+collabId)
		}
	}

	closeModal = () => {
		props.setIsModalVisible(false)
		Meteor.call('collabs.remove', collabId, (err, res) => {if(!err){console.log('Deleted', collabId)}})
	}

	// Slide Index State
	const [slideIndex, setSlideIndex] = useState(0)
	return (
		<BasicModal closeOnClickOutside={false} isVisible={props.isModalVisible} setIsModalVisible={closeModal}>
			<CreateCollabWrapper>
				<CreateCollabModalContainer>
					<Progress borderRadius="5px 5px 0px 0px" height={10} progress={slideIndex * 25} />
					<ModalContent>
						{slideIndex === 0 ?
							<TitleForm 
								setSlideIndex={setSlideIndex} 
								slideIndex={slideIndex}
								setCollabId={setCollabId} 
								step={slideIndex+1} 
								totalSteps={4} 
								isLoadingNext={isLoadingNext} 
								setIsLoadingNext={setIsLoadingNext}
								setIsModalVisible={props.setIsModalVisible}
							/>
						: slideIndex === 1 ? 
							<HashtagsForm 
								setSlideIndex={setSlideIndex} 
								slideIndex={slideIndex}
								collabId={collabId} 
								step={slideIndex+1} 
								totalSteps={4}
							/>
						: slideIndex === 2 ?
							<CreatorsForm 
								setSlideIndex={setSlideIndex} 
								slideIndex={slideIndex}
								collabId={collabId} 
								step={slideIndex+1} 
								totalSteps={4}
							/>
						:  slideIndex === 3 ?
							<DateForm 
								setSlideIndex={setSlideIndex} 
								slideIndex={slideIndex}
								setSetupComplete={setSetupComplete} 
								collabId={collabId} 
								step={slideIndex+1} 
								totalSteps={4}
								redirectToCollab={redirectToCollab}
							/>
						: undefined}
					</ModalContent>
				</CreateCollabModalContainer>
			</CreateCollabWrapper>
		</BasicModal>
	)
}

export default AddToListModal