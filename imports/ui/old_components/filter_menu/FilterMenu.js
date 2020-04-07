import React from 'react'

// NPMJS
import ReactResizeDetector from 'react-resize-detector';

// Component 
import PriceSelect from './PriceSelect'
import FollowerSelect from './FollowerSelect'
import FilterBy from './FilterBy'
import LocationSelect from './LocationSelect'
import BrowseSelect from './BrowseSelect'
import TypeSelect from './TypeSelect'
import SkeletonSelect from './SkeletonSelect'

// Styled Components
import { PrimaryButton } from '../../common/Common.sc'
import {
	FilterMenu,
	FilterWrapper,
	FilterLeftItemWrapper,
	FilterMiddleItemWrapper,
	FilterRightItemWrapper,
} from './FilterMenu.sc'

// Icons
import DollarSignIcon from '../../icons/dollar-sign'
import ShopIcon from '../../icons/shop'
import HandPeaceIcon from '../../icons/globe-america'


export default class FilterSelect extends React.Component {

	state = {
		leftWidth: 200,
		rightWidth: 200,
		maxFilterByTagWidth: 100,
		dataSet: '',
		location: 'global',
		isSelectingLocation: false,
		isSelectingCategory: true,
		isSelectingType: false,
		isSelectingFilter: false,
		isSelectingPrice: false,
		isSelectingFollower: false,
	}

	updateFilterByTagWidth = () => {
		let widthToRemove = this.state.leftWidth + this.state.rightWidth + 10
		this.setState({maxFilterByTagWidth: widthToRemove})
	}

	onResizeLeft = (w, h) => {
		this.setState({rightWidth: w}, () => this.updateFilterByTagWidth())
	}

	onResizeRight = (w, h) => {
		this.setState({leftWidth: w}, () => this.updateFilterByTagWidth())
	}


	async componentDidMount() {
		setTimeout(() => {
			this.setState({
				dataSet: typeof this.props.type !== 'undefined' ? this.props.type : 'collabs'
			})
		}, 1000)
	}


	componentWillReceiveProps = (nextProps) => {
		if(this.props.type !== nextProps.type && typeof nextProps.type !== 'undefined') {
			this.setState({dataSet: nextProps.type})
		}
	}

	toggleFilter = (type) => {
		if(type === 'location') {
			this.setState({isSelectingLocation: !this.state.isSelectingLocation, isSelectingFollower: false, isSelectingCategory: false, isSelectingType: false, isSelectingFilter: false, isSelectingPrice:false})
		} else if (type === 'category') {
			this.setState({isSelectingCategory: !this.state.isSelectingCategory, isSelectingFollower: false, isSelectingLocation: false, isSelectingType: false, isSelectingFilter: false, isSelectingPrice:false})
		} else if (type === 'type') {
			this.setState({isSelectingType: !this.state.isSelectingType, isSelectingFollower: false, isSelectingCategory: false, isSelectingFilter: false, isSelectingLocation: false, isSelectingPrice:false})
		} else if (type === 'filter') {
			this.setState({isSelectingFilter: !this.state.isSelectingFilter, isSelectingFollower: false,  isSelectingCategory: false, isSelectingLocation: false, isSelectingType: false, isSelectingPrice:false})
		} else if (type === 'price') {
			this.setState({isSelectingPrice: !this.state.isSelectingPrice, isSelectingFollower: false, isSelectingFilter:false, isSelectingCategory: false, isSelectingLocation: false, isSelectingType: false})
		} else if (type === 'follower') {
			this.setState({isSelectingFollower: !this.state.isSelectingFollower, isSelectingPrice: false, isSelectingFilter:false, isSelectingCategory: false, isSelectingLocation: false, isSelectingType: false})
		}
	}

	closeAllFilters = () => { this.setState({isSelectingFollower: false, isSelectingType:false, isSelectingLocation: false, isSelectingFilter:false, isSelectingPrice: false})}

	toggleLocation = () => {
		this.setState({location: this.state.location === 'global' ? 'near me' : 'global'})	
	}

	render () {
		let {maxFilterByTagWidth, dataSet, location, isSelectingType, isSelectingFollower, isSelectingCategory, isSelectingFilter, isSelectingLocation, isSelectingPrice } = this.state
		return (
			<FilterMenu>
				{!this.props.isLoading ?
					<React.Fragment>
						<BrowseSelect toggleDataSet={this.props.toggleDataSet} isSelectingFilter={isSelectingFilter} toggleFilter={this.toggleFilter} type={this.props.dataSet}/>
						{this.props.dataSet === 'collabs' && 
							<TypeSelect isSelectingType={isSelectingType} toggleFilter={this.toggleFilter} type={dataSet}/> 
						}
						<LocationSelect location={location} toggleLocation={this.toggleLocation} isSelectingLocation={isSelectingLocation} toggleFilter={this.toggleFilter}/>
						{this.props.dataSet === 'influencers' && 
							<FollowerSelect isSelectingFollower={isSelectingFollower} toggleFilter={this.toggleFilter} type={dataSet}/>
						}
						<PriceSelect isSelectingPrice={isSelectingPrice} toggleFilter={this.toggleFilter} type={dataSet}/>
					</React.Fragment>
					:
					<React.Fragment>
						<SkeletonSelect items={[1,2]} isCheckBox={false}/>
						<SkeletonSelect items={[1,2,3]} isCheckBox={true}/>
						<SkeletonSelect items={[1,2]} isCheckBox={false}/>
					</React.Fragment>
				}

			</FilterMenu>
		)
	}
}

