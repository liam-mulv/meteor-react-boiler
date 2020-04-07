import React, {useState, useEffect} from 'react'

// Components
import InputField from '../../../inputs/Inputs'
import FormHeader from '../../../forms/header/FormHeader'
import DatePicker from '../../../date_picker/DatePicker'
import Button from '../../../buttons/Buttons'

// Icons
import ArrowRight from '../../../../../icons/arrow-right'
import ArrowLeft from '../../../../../icons/arrow-left'
import CheckIcon from '../../../../../icons/duotone/check'

// Styled Components
import {Form, Footer} from './AddCollabModal.sc'

// Hook
import {useKeyPress} from '../../../../../helpers/helpers'


function DateForm (props) {

	const [selectedDay, setSelectedDay]= useState(undefined)
	const [errorMessage, setErrorMessage] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const handleDayChange = (day) => {
		setSelectedDay(day)

		Meteor.call('collabs.updateStartDate', props.collabId, day, (err, res) => {
			if(!err) {
				props.setSetupComplete(true)
			}
		})
	} 

	const redirectToCollab = () => {

		if(selectedDay) {
			setIsLoading(true)
			Meteor.call('collabs.setSetupComplete', props.collabId, (err, res) => {
				setIsLoading(false)
				if(!err) {
					props.redirectToCollab()
				}
			})
		} else {
			setErrorMessage('Oops! Looks like you forgot to add a start date.')
		}
	}

	return (
		<>
			<Form>
				<FormHeader title="Start Date" subtitle="When did your collab start?" step={props.step} totalSteps={props.totalSteps}/>
				<DatePicker 
					error={errorMessage}
					day={selectedDay}
					onDayChange={handleDayChange} 
				/>
			</Form>
			<Footer>
				<Button type="secondary" iconTone='dark' iconOpacity={0.5} iconLeft={<ArrowLeft/>} value="Previous" onClick={() => props.setSlideIndex(props.slideIndex - 1)}/>
				<Button type="primary" iconTone='light' iconOpacity={0.5} iconRight={<CheckIcon/>} minWidth={90} value="Finish" isLoading={isLoading} onClick={() => redirectToCollab()}/>
			</Footer>
		</>
	)
}

export default DateForm