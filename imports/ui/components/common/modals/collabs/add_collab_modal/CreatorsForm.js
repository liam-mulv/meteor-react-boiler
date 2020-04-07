import {Meteor} from 'meteor/meteor'
import React, {useState, useEffect} from 'react'

// Components
import InputField from '../../../inputs/Inputs'
import Button from '../../../buttons/Buttons'
import FormHeader from '../../../forms/header/FormHeader'
import FormList from '../../../forms/list/FormList'

// Styled Components
import {Form, FormRow, Footer} from './AddCollabModal.sc'

// Icons
import AtIcon from '../../../../../icons/duotone/at'
import ArrowRight from '../../../../../icons/arrow-right'
import ArrowLeft from '../../../../../icons/arrow-left'

// Hooks
import {useCollabCreators, useDebounce} from '../../../../../helpers/helpers'

function CreatorsForm (props) {
	const [inputValue, setInputValue] = useState('')
	const {collabCreators, isLoadingCreators} = useCollabCreators(props.collabId)


	// Use form hook
	// const {suggestions, isLoadingSuggestions} = useFuzzySearch()
	const [isAddingCreator, setIsAddingCreator] = useState(false)
  	// State and setter for search term
  	const [searchTerm, setSearchTerm] = useState('')
  	// Search results
	const [suggestions, setSuggestions] = useState([])
	// State for search status (whether there is a pending API request)
	const [isSearching, setIsSearching] = useState(false)

	const debouncedSearchTerm = useDebounce(searchTerm, 500);

	const [errorMessage, setErrorMessage] = useState('')

	// Here's where the API call happens
	// We use useEffect since this is an asynchronous action
	useEffect(
	    () => {
	      // Make sure we have a value (user has entered something in input)
	      if (debouncedSearchTerm) {
	      	setErrorMessage('')
	        // Set isSearching state
	        setIsSearching(true);
	        // Fire off our API call
	       	Meteor.call('ig_users.autocomplete', debouncedSearchTerm, (err, res) => {
	       		setIsSearching(false);
	       		if(!err){
	       			console.log(res)
	       			setSuggestions(res)
	       		}
			 })
	      } else {
	        setSuggestions([]);
	      }
	    },
	    // This is the useEffect input array
	    // Our useEffect function will only execute if this value changes ...
	    // ... and thanks to our hook it will only change if the original ...
	    // value (searchTerm) hasn't changed for more than 500ms.
	    [debouncedSearchTerm]
	)

	const addCreator = (creator) => {
		if(typeof creator !== 'undefined') {
			setIsSearching(true)
			setSearchTerm('')
			let _creator = {
				collabTitle: 'facebook',
				userId: Meteor.userId(),
				collabId: props.collabId,
				username: creator.username,
				full_name: creator.full_name,
				description: creator.description,
				images: creator.images,
				profile_url: creator.profile_url,
				website_url: creator.website_url,
				engagement_rate: creator.engagement_rate,
				avg_comments_per_post: creator.avg_comments_per_post,
				avg_likes_per_post: creator.avg_likes_per_post,
				comment_to_like_ratio: creator.comment_to_like_ratio,
				follower_count: creator.follower_count,
				following_count: creator.following_count,
				media_count: creator.media_count,
				updated_at: creator.updated_at,
				post_frequency: creator.post_frequency,
				post_engagement: 0, 
				has_posted: false,
			}

			Meteor.call('collab_creators.upsert', _creator, (err, res) => {
				setIsSearching(false)
				if(!err) {
					console.log('Added creator to collab')
				} else {
					console.log(err)
				}
			})
		}
	}


	const removeCreator = (_id) => {
		Meteor.call('collab_creators.remove', _id, (err, res) => {
			if(!err) {
				console.log('Removed creator')
			} else {
				console.log(err)
			}
		})
	}

	const resetSearch = () => {
		setIsSearching(false)
		setSearchTerm('')
	    setSuggestions([])
	}

	return (
		<>
			<Form>
				<FormHeader title="Creators" subtitle="Add creators to your collab" step={props.step} totalSteps={props.totalSteps}/>
				<FormRow>
					<InputField 
						embeddedIconLeft={<AtIcon/>} 
						placeholder="taylorswift" 
						enterToSubmit={false} 
						onChange={e => setSearchTerm(e.target.value)}
						value={searchTerm}
						error={false}
						isLoading={isSearching}
						suggestions={suggestions.slice(0,4)}
						searchTerm={searchTerm}
						addSuggestion={addCreator}
						clearSuggestions={resetSearch}
					/>
				</FormRow>
				<FormList
					type="creator"
					isLoading={isLoadingCreators}
					items={collabCreators}
					removeItem={removeCreator}
				/>
			</Form>
			<Footer>
				<Button type="secondary" iconTone='dark' iconOpacity={0.5} iconLeft={<ArrowLeft/>} value="Previous" onClick={() => props.setSlideIndex(props.slideIndex - 1)}/>
				{typeof collabCreators !== "undefined" && collabCreators.length > 0 ?
					<Button type="primary" iconTone='light' iconOpacity={0.5} iconRight={<ArrowRight/>} value="Next" isLoading={props.isLoadingNext} onClick={() => props.setSlideIndex(props.slideIndex + 1)}/>
					:
					<Button type="primary-alt" iconTone='dark' iconOpacity={1} iconRight={<ArrowRight/>} value="Skip" isLoading={props.isLoadingNext} onClick={() => props.setSlideIndex(props.slideIndex + 1)}/>
				}
			</Footer>
		</>
	)
}

export default CreatorsForm