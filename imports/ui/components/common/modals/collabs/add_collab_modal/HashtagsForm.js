import {Meteor} from 'meteor/meteor'
import React, {useState, useEffect} from 'react'

// NPM
import _ from 'lodash'

// Components
import InputField from '../../../inputs/Inputs'
import Button from '../../../buttons/Buttons'
import FormHeader from '../../../forms/header/FormHeader'
import FormList from '../../../forms/list/FormList'

// Styled Components
import {Form, FormRow, Footer} from './AddCollabModal.sc'

// Icons
import HashtagIcon from '../../../../../icons/duotone/hashtag'
import ArrowRight from '../../../../../icons/arrow-right'
import ArrowLeft from '../../../../../icons/arrow-left'

// Hooks
import {useCollab} from '../../../../../helpers/helpers'

function HashtagsForm (props) {

	const [inputValue, setInputValue] = useState('')
	const {collab, tags, isLoadingCollab} = useCollab(props.collabId)
	const [isAddingHashtag, setIsAddingHashtag ] = useState(false)

	const removeHashtag = (tag) => {
		Meteor.call('collabs.removeHashtag', props.collabId, tag, (err, res) => {
			if(!err){console.log('Removed tag')} else {console.log(err)}
		})
	}

	const onEnter = (tag) => {
		if(tag !== '' && tag !== ' ') {
			setInputValue('')
			setIsAddingHashtag(true)
			Meteor.call('collabs.addHashtag', props.collabId, tag.toLowerCase(), (err, res) => {
				setIsAddingHashtag(false)
				if(!err){console.log('Added tag')} else {console.log(err)}
			})
		}
	}

	return (
		<>
			<Form>
				<FormHeader title="Hashtags" subtitle="What hashtags will your creators use in their posts?" step={props.step} totalSteps={props.totalSteps}/>
				<FormRow>
					<InputField 
						placeholder="fashion" 
						embeddedIconLeft={<HashtagIcon/>} 					
						value={inputValue} 
						onChange={(e) => setInputValue(e.target.value)} 
						onEnter={onEnter}
						enterToSubmit={true} 
						spaceToSubmit={true}
						error={false}
						isLoading={isAddingHashtag}
					/>
				</FormRow>
				<FormList
					isLoading={isLoadingCollab}
					items={tags}
					removeItem={removeHashtag}
				/>
			</Form>
			<Footer>
				<div></div>
				{typeof tags !== "undefined" && tags.length > 0 ?
					<Button type="primary" iconTone='light' iconOpacity={0.5} iconRight={<ArrowRight/>} value="Next" isLoading={props.isLoadingNext} onClick={() => props.setSlideIndex(props.slideIndex + 1)}/>
					:
					<Button type="primary-alt" iconTone='dark' iconOpacity={1} iconRight={<ArrowRight/>} value="Skip" isLoading={props.isLoadingNext} onClick={() => props.setSlideIndex(props.slideIndex + 1)}/>
				}			
			</Footer>
		</>
	)
}

export default HashtagsForm