import React, {useState, useEffect} from 'react'

// Components
import InputField from '../../../inputs/Inputs'
import FormHeader from '../../../forms/header/FormHeader'
import Button from '../../../buttons/Buttons'

// Icons
import ArrowRight from '../../../../../icons/arrow-right'
import ArrowLeft from '../../../../../icons/arrow-left'

// Styled Components
import {Form, Footer} from './AddCollabModal.sc'



function TitleForm (props) {

	const [inputValue, setInputValue] = useState('')
	const [errorMessage, setErrorMessage] = useState('')

	const addCollab = () => {
		if(inputValue !== '' && !props.isLoadingNext) {
			props.setIsLoadingNext(true)
			Meteor.call('collabs.upsert', {title: inputValue}, (err, res) => {
				setErrorMessage('')
				props.setIsLoadingNext(false)
				if(!err) {
					props.setCollabId(res)
					props.setSlideIndex(props.slideIndex + 1)
				} else {console.log(err)}
			})
		} else if(inputValue !== '' && props.isLoadingNext) {
			props.setIsLoadingNext(true)
		} else {
			setErrorMessage('Oops! Looks like you forgot to name your Collab.')
		}
	}

	const onEnter = () => {
		if(inputValue !== '') {
			console.log('Enter')
			addCollab(inputValue)
		} else {
			setErrorMessage('Oops! Looks like you forgot to name your Collab.')
		}
	}

	return (
		<>
			<Form>
				<FormHeader title="Name your Collab" subtitle="" step={props.step} totalSteps={props.totalSteps}/>
				<InputField 
					placeholder="E.g Summer Fashion"
					value={inputValue} 
					onChange={(e) => setInputValue(e.target.value)}
					onEnter={onEnter}
					enterToSubmit={true} 
					error={errorMessage}
				/>
			</Form>
			<Footer>
				<Button type="secondary" value="Cancel" onClick={() => props.setIsModalVisible(false)}/>
				<Button type="primary" iconTone='light' iconOpacity={0.5} iconRight={<ArrowRight/>} value="Next" isLoading={props.isLoadingNext} onClick={() => addCollab()}/>
			</Footer>
		</>
	)
}

export default TitleForm