import React from 'react'
import {NavigateBack} from './NavigationCommon.sc'
import { Link, useHistory } from 'react-router-dom'



// Icons
import ArrowLeft from '../../../icons/arrow-left'

function NavigateBackComponent(props) {
	 let history = useHistory()

	return (
		<NavigateBack onClick={() => history.goBack()}>
			<ArrowLeft/> <span>{props.previousPageTitle}</span>
		</NavigateBack>
	)
}

export default NavigateBackComponent