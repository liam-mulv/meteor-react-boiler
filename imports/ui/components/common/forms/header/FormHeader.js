import React from 'react'

import {FormHeaderContainer, FormTitle, FormSubtitle, Steps} from './FormHeader.sc'

function FormHeader(props) {
	return (
		<FormHeaderContainer>
			<FormTitle>{props.title} <Steps>{props.step}<small><span>/{props.totalSteps}</span></small></Steps></FormTitle>
			{props.subtitle !== '' && <FormSubtitle>{props.subtitle}</FormSubtitle>}
		</FormHeaderContainer>
	)
}

export default FormHeader