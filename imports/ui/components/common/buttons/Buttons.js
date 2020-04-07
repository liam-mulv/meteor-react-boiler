import React from 'react'

// Styled Components
import {Btn, LoadingWrapper} from './Button.sc'

// Lottie
import Lottie from 'react-lottie';
import * as animationData from '../../../lottie/spinner.json'
import {options} from '../../../lottie/options'
options.animationData = animationData

function Button(props) {
	return (
		<Btn 
			onClick={props.onClick} 
			iconTone={props.iconTone} 
			iconRight={props.iconRight} 
			iconOpacity={props.iconOpacity}
			type={props.type} 
			marginRight={props.marginRight} 
			marginLeft={props.marginLeft}
			minWidth={props.minWidth}
		>
			{!props.isLoading ?
				<>
					{props.iconLeft} {props.value} {props.iconRight}
				</>
				:
				<LoadingWrapper type={props.type}>
					<Lottie options={options}
	              		height={30}
	              		width={30}
	              		isStopped={false}
	              		isPaused={false}
	              	/>
              	</LoadingWrapper>
			}
		</Btn>
	)
}
export default Button