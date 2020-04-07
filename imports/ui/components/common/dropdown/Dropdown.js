import React, {useState, useEffect} from 'react';
import {Meteor} from 'meteor/meteor'
import Select from 'react-select';

import {StyledSelect} from './Dropdown.sc'

const Dropdown = (props) => {

  const options = [
    { value: 0, label: 'rejected' },
	  { value: 1, label: 'none' },
	  { value: 2, label: 'contacted' },
	  { value: 3, label: 'negotiation' },
	  { value: 4, label: 'accepted' },
	]

  	const [selectedOption, setSelectedOption] = useState(options[0])

  	handleChange = (value) => {
      Meteor.call('lists.updateCreatorStatus', props.listId, props.creatorId, value.value)
  		setSelectedOption(value)
  	}

    console.log(props.value)

  	return (<>
      <StyledSelect
      	isSearchable={false} 
        value={{ value: options[props.value].value, label: options[props.value].label }}
        onChange={handleChange}
        options={options}
      />
    </>)
}
 
export default Dropdown


  // const options = [
  //   { value: 1, label: 'none', className: 'status-none' },
  //   { value: 2, label: 'contacted', className: 'status-contacted' },
  //   { value: 3, label: 'negotiation', className: 'status-negotiation'},
  //   { value: 4, label: 'accepted', className: 'status-accepted' },
  //   { value: 5, label: 'rejected', className: 'status-rejected' },
  // ]
  // const defaultOption = options[0]