import React from 'react'

// NPM
import 'react-day-picker/lib/style.css';
import {DatePickerWrapper, ErrorMessage} from './DatePicker.sc'

import DayPickerInput from 'react-day-picker/DayPickerInput';

//Icons
import CalendarDayIcon from '../../../icons/duotone/calendar-day'


function DatePicker (props) {

	return (
		<DatePickerWrapper>
			<DayPickerInput onDayChange={props.onDayChange}/>
			<CalendarDayIcon/>
			{props.day === undefined && props.error !== '' &&
				<ErrorMessage>{props.error}</ErrorMessage>
			}
		</DatePickerWrapper>
	)
}

export default DatePicker