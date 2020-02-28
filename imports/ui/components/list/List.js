import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

// NPM
import Sticky from 'react-sticky-el';
// Color Pacckages
import Chameleon from '@vyppn/chameleon-react'
import isDarkColor from 'is-dark-color'

// Component Filter
import FilterSelect from '../filter_menu/FilterMenu'
import FilterBy from '../filter_menu/FilterBy'

// Component Post
import InstagramPost from '../card_post/CardPost'
import SkeletonCardPost from '../card_post/SkeletonCardPost'
import MoreCardPost from '../card_post/MoreCardPost'

// Component Collab
import Collab from '../card_collab/Collab'
import SkeletonCollab from '../card_collab/SkeletonCollab'
import MoreCollab from '../card_collab/MoreCollab'

// Component Influencer
import Influencer from '../card_influencer/Influencer'
import SkeletonInfluencer from '../card_influencer/SkeletonInfluencer'
import MoreInfluencer from '../card_influencer/MoreInfluencer'

// Styled Components
import { PageFlexContainer,PrimaryButton } from '../../common/Common.sc'
import { RowWrapper, RowTitle, FlexRow, ListHeader, StickyHeaderShadow, ListHeaderWrapper } from './List.sc'
import {FilterOverlayTint} from '../filter_menu/FilterMenu.sc'
import {SkeletonListTitle} from './SkeletonList.sc'

// Icons
import CheckSolid from '../../icons/check-solid'

// Test data
import data from '../../data/collab_data'
import data2 from '../../data/influencer_data'
import data3 from '../../data/instagram_post_data'


export default class List extends React.Component {

	state = {
		posts: [],
		collabs: [],
		influencers: [],
		dataSet: '',
		location: 'global',
		isSelectingLocation: false,
		isSelectingCategory: true,
		isSelectingType: false,
		isSelectingFilter: false,
		isSelectingPrice: false,
		isSelectingFollower: false,
	}

	async componentDidMount() {
		console.log(this.props.type)
		window.addEventListener('scroll',  this.checkScroll)
		this.setState({dataSet: typeof this.props.type !== 'undefined' ? this.props.type : 'collabs'})
		setTimeout(() => {
			this.setState({
				posts: data3.instagram_post_data, 
				collabs: data.collab_data, 
				influencers: data2.top_influencers, 
			})
		}, 1000)
	}


	componentWillUnmount() {
    	window.removeEventListener('scroll', this.checkScroll);
	}


  	checkScroll = (e) => {
	    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
	    const body = document.body;
	    const html = document.documentElement;
	    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
	    const windowBottom = windowHeight + window.pageYOffset;
	    if (windowBottom + 100 >= docHeight && !this.props.dontLoadMore) {
	    	let moreCollabs = this.state.collabs.concat(data.collab_data)
	    	this.setState({collabs:moreCollabs})
	    }
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


	renderTitle = () => {
		const {posts, collabs, influencers, dataSet, location, isSelectingLocation, isSelectingCategory, isSelectingType, isSelectingFilter, isSelectingPrice, isSelectingFollower} = this.state
		return (
			<ListHeaderWrapper headerIsSticky={this.props.headerIsSticky} stickyPosition={this.props.stickyPosition}>
					<StickyHeaderShadow headerIsSticky={this.props.headerIsSticky}/>
					<ListHeader headerPadding={this.props.headerPadding} headerIsSticky={this.props.headerIsSticky} simple={this.props.simple}  similarList={this.props.similarList} headerFontSize={this.props.headerFontSize}>
						{this.props.simple || this.props.similarList ?
							<RowTitle>
								{this.props.title} {!this.props.simple && !this.props.similarList && dataSet + ' found'}
								<span>{this.props.subTitle}</span>
							</RowTitle>
						:
							undefined
						}
						{!this.props.simple && this.props.filter &&
							<FilterBy 
								isLoading={this.props.isLoading}
								location={location}
								dataSet={dataSet} 
								toggleLocation={this.toggleLocation}
								toggleDataSet={this.toggleDataSet} 
								isSelectingPrice={isSelectingPrice} 
								isSelectingFilter={isSelectingFilter} 
								isSelectingLocation={isSelectingLocation} 
								isSelectingCategory={isSelectingCategory} 
								isSelectingType={isSelectingType} 
								isSelectingFollower={isSelectingFollower}
								toggleFilter={this.toggleFilter}
								closeAllFilters={this.closeAllFilters}
							/>
						}
					</ListHeader>
			</ListHeaderWrapper>
		)
	}

	renderSkeletonTitle = (width) => {
		return (
			<SkeletonListTitle width={width}/>
		)
	}


	render() {
		const {posts, collabs, influencers, dataSet, isSelectingLocation, isSelectingCategory, isSelectingType, isSelectingFilter, isSelectingPrice, isSelectingFollower} = this.state

		return (
			<RowWrapper simple={this.props.simple} wrap={true} className="block" tint={isSelectingFilter === true || isSelectingType === true  || isSelectingLocation === true || isSelectingPrice === true || isSelectingFollower === true }>
		        {  dataSet === 'instagram_post'  ?
		    		<React.Fragment>
		    			{!this.props.noTitle && this.renderTitle()}
	
						<FlexRow  counterPaddingWidth={true} browse='influencers' simple={this.props.simple} similarList={this.props.similarList}>
							{!this.props.isLoading ? posts.slice(0, this.props.length).map((data, index) => {
								return (
									<InstagramPost simple={this.props.simple} list={true} data={data}/>
								)
							}) : 
								[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].slice(0, this.props.length).map((data, index) =>{
									return (
										<SkeletonCardPost simple={this.props.simple}  list={true}/>
									)
								})
							}
						</FlexRow>
					</React.Fragment>

		        :	dataSet === 'collabs' ?

		        	<div>
		    			{!this.props.noTitle && this.renderTitle()}
			        	
						<FlexRow counterPaddingWidth={true} browse='collabs' simple={this.props.simple} similarList={this.props.similarList}>
							{!this.props.isLoading ? collabs.slice(0, this.props.length).map((data, index) => {
								return (
									<Collab simple={this.props.simple} list={true} data={data}/>
								)
							}) : 
								[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].slice(0, this.props.length).map((data, index) =>{
									return (
										<SkeletonCollab simple={this.props.simple} />
									)
								})
							}

						</FlexRow>
					</div>
		    	: dataSet === 'influencers'?
			    	<div>
		    			{!this.props.noTitle && this.renderTitle()}

						<FlexRow counterPaddingWidth={true} browse='influencers' simple={this.props.simple} similarList={this.props.similarList}>
							{!this.props.isLoading ? influencers.slice(0, this.props.length).map((data, index) => {
								return (
									<Influencer simple={this.props.simple} list={true} data={data}/>
								)
							}) : 
								[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].slice(0, this.props.length).map((data, index) =>{
									return (
										<SkeletonInfluencer simple={this.props.simple} list={true}/>
									)
								})
							}
						</FlexRow>
					</div>
		    	:
		    		undefined
		    	}
			</RowWrapper>
		)
	}
}
