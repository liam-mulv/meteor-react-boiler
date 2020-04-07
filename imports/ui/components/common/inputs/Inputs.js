import React, {useState, useEffect, useRef} from 'react'

// Styled components
import {InputFieldWrapper, InputFieldContainer, InputField, ErrorMessage, PressEnter, LoadingWrapper} from './Inputs.sc'

// Lottie
import Lottie from 'react-lottie';
import * as animationData from '../../../lottie/spinner.json'
import {options} from '../../../lottie/options'
options.animationData = animationData

// Hook
import {useKeyPress, useOutsideClick} from '../../../helpers/helpers'

// Component
import Suggestions from './Suggestions'

function Input(props) {
	
	// input wrapper ref
	const ref = useRef()

	// Clear Suggestions
	useOutsideClick(ref, () => {
		if(props.clearSuggestions) {
			props.clearSuggestions()
		}
	})

	const enterKeyPress = useKeyPress('Enter')
	const spaceKeyPress = useKeyPress(' ')

	if(enterKeyPress && props.enterToSubmit || spaceKeyPress && props.spaceToSubmit){
		props.onEnter(props.value)

	}

	return (
		<InputFieldWrapper ref={ref}>
			<InputFieldContainer>
				{props.embeddedIconLeft} 
				<InputField embeddedIconLeft={props.embeddedIconLeft} placeholder={props.placeholder} value={props.value} onChange={props.onChange} /> 
				{!props.isLoading && props.enterToSubmit && props.value.length > 0 && <PressEnter>Press Enter</PressEnter>}
				{props.isLoading && 				
					<LoadingWrapper>
						<Lottie options={options}
		              		height={30}
		              		width={30}
		              		isStopped={false}
		              		isPaused={false}
		              	/>
              		</LoadingWrapper>
              	}
			</InputFieldContainer>
			{props.suggestions &&
				<Suggestions
					searchTerm={props.searchTerm}
					isSearching={props.isLoading}
					suggestions={props.suggestions}
					addSuggestion={props.addSuggestion}
				/>
			}
			{props.value.length <= 0 && props.error !== '' && typeof props.error !== 'undefined' && props.error !== false && 
				<ErrorMessage>{props.error}</ErrorMessage>
			}
		</InputFieldWrapper>
	)
}

export default Input