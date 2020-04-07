import React, {useEffect, useState, useRef} from 'react'
import {Meteor} from 'meteor/meteor'

// NPM
import moment from 'moment'
import Lottie from 'react-lottie';
import * as animationData from '../../../../../lottie/spinner.json'
import _ from 'lodash'

// Component
import BasicModal from '../../basic_modal/BasicModal'

// Styled Components
import {
	AddToListModalWrapper,
	AddToListModalContainer,
	CloseModal,
	Header,
	List,
	ListCount,
	InputField,
	Button,
	NoListFound,
	InputWrapper,
	SuggestionsWrapper,
	Suggestions,
	Suggestion,
	AddSuggestionFromInstagram,
	LottieWrapper,
	ErrorMessage
} from './AddCreatorToListModal.sc'

// Custom hooks
import {useAddCreatorForm, useDebounce, useOutsideClick} from '../../../../../helpers/helpers'


// Lottie
const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: animationData,
  rendererSettings: {preserveAspectRatio: 'xMidYMid slice'}
}


function AddToListModal (props) {

	// Input & Suggestion Wrapper Ref
  	const ref = useRef()

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

	const addCreatorToList = (creator) => {
		setTimeout(() => {
	    	setIsSearching(true)
		}, 100)
	    setSearchTerm('')
		let creatorObj = {
			_id: creator._id,
			images: creator.images,
			username: creator.username,
			full_name: creator.full_name
		}
		Meteor.call('lists.addCreator', props.list._id, creatorObj, (err, res) => {
			if(!err) {
				setIsSearching(false);
			}
		})
	}

	useOutsideClick(ref, () => {
		resetSearch()
	})

	const resetSearch = () => {
		setIsSearching(false)
		setSearchTerm('')
	    setSuggestions([])
	}

	// state and setter for adding from instagram
	const [isAddingFromInstagram, setIsAddingFromInstagram] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
	async function addUserFromInstagram(e){
		setIsAddingFromInstagram(true)
		Meteor.call('ig_users.addFromInstagram', searchTerm, (err, res) => {
			if(!err) {
				let creatorObj = {
					_id: res._id,
					images: res.images,
					username: res.username,
					full_name: res.full_name
				}
				Meteor.call('lists.addCreator', props.list._id, creatorObj, (err, res) => {
					setIsAddingFromInstagram(false)
					resetSearch()
					if(!err) {
						console.log('User added to list from db')
					} else {
						console.log('Error adding user to list')
					}
				})
			} else {
				setIsAddingFromInstagram(false)
				resetSearch()
				setErrorMessage('User does not exist or does not have a businnes/creator account.')
				console.log('Error getting user from instagram')
			}
		}) 
	}

	return (
		<BasicModal closeOnClickOutside={props.setIsModalVisible} isVisible={props.isModalVisible}>
			<AddToListModalWrapper>
				<AddToListModalContainer>
					<Header>
						<h1>Add Creators</h1>
						<p>Search creators to add to your list</p>
					</Header>
					{errorMessage !== '' &&
						<ErrorMessage>
							{errorMessage}
						</ErrorMessage>
					}
					<form ref={ref} onSubmit={e => {e.preventDefault()}}>
						<InputWrapper>
							<span>@</span>
							<InputField 
        						onChange={e => setSearchTerm(e.target.value)}
							 	value={searchTerm}
								type="text" 
								name="addCreator" 
								placeholder="Instagram handle"
								required 
								autoComplete="off"
							/>
							{isSearching &&
								<LottieWrapper>
									<Lottie options={defaultOptions}
						              height={30}
						              width={30}
						              isStopped={false}
						              isPaused={false}/>
					            </LottieWrapper>
							}
							{suggestions && searchTerm !== '' &&
								<SuggestionsWrapper>
									<Suggestions>
										{suggestions.map((suggested, index) => {
											return (
												<Suggestion onClick={() => addCreatorToList(suggested)}><img src={suggested.images}/> {suggested.username} </Suggestion>
											)
										})}
									</Suggestions>
									{suggestions.length > 0 ?
										<>
											{!isSearching && searchTerm !== suggestions[0].username &&
												<AddSuggestionFromInstagram onClick={() => addUserFromInstagram()}>
													<div>No matches? Add <b>{searchTerm}</b> from instagram </div><div><button>{!isAddingFromInstagram ? 'Add' : <Lottie options={defaultOptions} height={17} width={17} isStopped={false} isPaused={false}/>}</button></div>
												</AddSuggestionFromInstagram>
											}
										</>
										:
										<>
											{!isSearching && 
												<AddSuggestionFromInstagram onClick={() => addUserFromInstagram()}>
													<div>No matches? Add <b>{searchTerm}</b> from instagram </div><div><button>Add</button></div>
												</AddSuggestionFromInstagram>
											}
										</>
									}
								</SuggestionsWrapper>
							}
						</InputWrapper>
					</form>
				</AddToListModalContainer>
			</AddToListModalWrapper>
		</BasicModal>
	)
}

// 

export default AddToListModal