import React from 'react'

import {
	FilterButtonWrapper,
	FilterButton,
	FilterSelectWrapper, 
	FlexOverlayRow,
	Space
} from './FilterMenu.sc'


// Icons
import DollarSignIcon from '../../icons/dollar-sign'
import ShopIcon from '../../icons/shop'
import HighlighterIcon from '../../icons/highlighter'


export default class TypeSelect extends React.Component {
	constructor(props){
		super(props)
		this.wrapperRef = React.createRef()
	}

	state = {
		paid: true,
		merch: true,
		creative: true,
	}

	componentDidMount = () => {
    	document.addEventListener('mousedown', this.handleClickOutside);
  	}

  	componentWillUnmount() {
    	document.removeEventListener('mousedown', this.handleClickOutside);
  	}

  	handleClickOutside = (event) => {
	    if (!this.wrapperRef.current.contains(event.target)) {
	    	if(this.props.isSelectingType) {
	    		this.props.toggleFilter('type')
	    	}
	    }
	}

	toggleCheckbox = (type) => {
		if(type === 'paid'){
			this.setState({paid: !this.state.paid})
		} else if (type === 'merch') {
			this.setState({merch: !this.state.merch})
		} else if (type === 'creative') {
			this.setState({creative: !this.state.creative})
		}
	}

	render() {
		let {paid, merch, creative} = this.state
		return (
			<FilterButtonWrapper ref={this.wrapperRef}>

					<FilterSelectWrapper position="right">
						<h3>Type</h3>
						<FlexOverlayRow>
							<input type="checkbox" name="type" onClick={() => this.toggleCheckbox('paid')} checked={paid === true}/>
							<span className="checkmark"></span>
							<div>
								<div>Paid</div>
							</div>
						</FlexOverlayRow>
						<FlexOverlayRow>
							<input type="checkbox" name="type"  onClick={() => this.toggleCheckbox('merch')} checked={merch === true}/> 
						  	<span className="checkmark"></span>
							<div>
								<div>Merch</div>
							</div>
						</FlexOverlayRow>

						<FlexOverlayRow>
							<input type="checkbox" name="type"  onClick={() => this.toggleCheckbox('creative')} checked={creative === true}/> 
						  	<span className="checkmark"></span>
							<div>
								<div>Creative (free)</div>
							</div>
						</FlexOverlayRow>
					</FilterSelectWrapper>

			</FilterButtonWrapper>
		)
	}
}