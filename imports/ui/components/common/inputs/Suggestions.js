import React, {useState, useEffect} from 'react'

// Styled Components
import {SuggestionsWrapper, Suggestions, Suggestion, SuggestionFooter} from './Suggestions.sc'

// Components
import ProfilePicture from '../profile_picture/ProfilePicture'

// Hook
import {useKeyPress} from '../../../helpers/helpers'


function SuggestionsComponent (props) {

	const upKeyPress = useKeyPress('ArrowUp')
	const downKeyPress = useKeyPress('ArrowDown')
	const enterKeyPress = useKeyPress('Enter')

	const [selectedSuggestion, setSelectedSuggestion] = useState(-1)

	useEffect(() => {
		if(upKeyPress) {
			if(selectedSuggestion < 0){
				setSelectedSuggestion(props.suggestions.length - 1)
			} else {
				setSelectedSuggestion(selectedSuggestion - 1)
			}
		}

		if(downKeyPress) {
			if(selectedSuggestion > props.suggestions.length){
				setSelectedSuggestion(0)
			} else {
				setSelectedSuggestion(selectedSuggestion + 1)
			}
		}

		if(enterKeyPress) {
			if(selectedSuggestion <= props.suggestions.length && selectedSuggestion >= 0 ) {
				props.addSuggestion(props.suggestions[selectedSuggestion])
			}
		}
	}, [downKeyPress, upKeyPress, enterKeyPress])



	return (
		<>
  			{props.suggestions && props.searchTerm !== '' &&
				<SuggestionsWrapper>
					<Suggestions>
						{props.suggestions.map((suggested, index) => {
							return (
								<Suggestion active={index === selectedSuggestion} onClick={() => props.addSuggestion(suggested)}><ProfilePicture image={suggested.images}/> {suggested.username} </Suggestion>
							)
						})}
					</Suggestions>
					{props.suggestions.length > 0 ?
						<>
							{!props.isSearching && props.searchTerm !== props.suggestions[0].username &&
								<SuggestionFooter onClick={() => console.log('Hello')}>
									<div>No matches? Add <b>{props.searchTerm}</b> from instagram </div><div><button>Add</button></div>
								</SuggestionFooter>
							}
						</>
					:
						<>
							{!props.isSearching &&
								<SuggestionFooter onClick={() => console.log('Hello')}>
									<div>No matches? Add <b>{props.searchTerm}</b> from instagram </div><div><button>Add</button></div>
								</SuggestionFooter>
							}
						</>
					}
				</SuggestionsWrapper>
			}
		</>
	)
}

export default SuggestionsComponent

{/*<button>{!isAddingFromInstagram ? 'Add' : 'Loading...'}</button>*/}