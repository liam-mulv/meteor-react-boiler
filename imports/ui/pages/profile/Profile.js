import React from 'react'

// NPM
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// Components
import BreadCrumb from '../../components/breadcrumb/BreadCrumb'
import List from '../../components/list/List'
import Footer from '../../components/footer/Footer'
import ProfileInfo from '../../components/profile/ProfileInfo'
import InstagramInfo from '../../components/instagram-info/InstagramInfo'
import Reviews from '../../components/review/ReviewList'
import StickyInviteFooter from '../../components/profile/StickyInviteFooter'
import Collage_ImageBanner from '../../components/image_banner/Collage_ImageBanner'
import StickyInfoSection from '../../components/sticky_info_section/StickyInfoSection'
import StarRating from '../../components/review/StarRating'
import ProfileStats from '../../components/profile/ProfileStats'
import QuickNav from '../../components/quick-nav/QuickNav'
import CollabHeader from '../../components/collab/CollabHeader'
import MapBox from '../../components/map/MapBox'
import Carousel from '../../components/carousel/Carousel'

// Data
import data from '../../data/collab_data'
const req_list = [
	'Two post submissions per collaborator',
	'Approved post to remain active for 30 day minimum',
	'Post must not contain slander or negative views or opinions.',
]
const tags = [
	{text: 'fashion', prefix:'#'},
	{text: 'influencer', prefix:'#'},
	{text: 'lifestyle', prefix:'#'},
]
const mentions = [
	{text: 'peachesandcreamlabel', prefix:'@'},
]

// Styled Components
import {DashboardContainer} from '../home/Home.sc'
import { PageContainer, PageFlexContainer, PageContent, FlexSpacer, ScrollElement  } from '../../common/Common.sc'


export default class ProfilePage extends  React.Component {

	constructor(props) {
	    super(props)
	    this.instagramSectionRef = React.createRef()
	    this.aboutSectionRef = React.createRef()
	    this.collabsSectionRef = React.createRef()
	    this.collabdWithSectionRef = React.createRef()
	    this.reviewsSectionRef = React.createRef()
	   	this.mapSectionRef = React.createRef()
	    this.similarInfluencerSectionRef = React.createRef()
	}

	state = {
		isLoading: true,
		quickNavIsStuck: false,
	}

	componentDidMount = () => {
		window.addEventListener('scroll',  this.checkScroll)

		setTimeout(() => {
			this.setState({isLoading: false, reviews: data.collab_data})
		}, 1000)
	}

	componentWillUnmount() {
    	window.removeEventListener('scroll', this.checkScroll);
	}

	getScrollDuration (el) {
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop
		let elDistanceToTop = window.pageYOffset + el.current.getBoundingClientRect().top
		let distanceFromElement
		if(scrollTop > elDistanceToTop) {
			distanceFromElement = scrollTop - elDistanceToTop
		} else {
			distanceFromElement = elDistanceToTop - scrollTop
		}
		return distanceFromElement / 2
	}

	checkScroll = (event) => {
  		let {quickNavIsStuck} = this.state
  		let scrollTop = window.pageYOffset || document.documentElement.scrollTop
  		if(scrollTop > 170 && quickNavIsStuck === false) {
  			this.setState({quickNavIsStuck: true})
  		} else if (scrollTop < 170 && quickNavIsStuck === true) {
  			this.setState({quickNavIsStuck: false})
  		}
  	}


	render() {
		const {isLoading, reviews, quickNavIsStuck} = this.state
	  	const navigation_component = [
	  		{ name: 'instagram', id: 'instagram-section', ref: this.instagramSectionRef}, 
	  		{ name: 'collabs', id: 'collabs-section', ref: this.collabsSectionRef}, 
	  		{ name: "collab'd with", id: 'collabd-with-section', ref: this.collabdWithSectionRef},
	  		{ name: 'reviews', id: 'reviews-section', ref: this.reviewsSectionRef}, 
	  		{ name: 'location', id: 'map-section', ref: this.mapSectionRef }, 
	  		{ name: 'similar influencers', id: 'similar-section', ref: this.similarInfluencerSectionRef},
	  	]


		return (
			<React.Fragment>
			<DashboardContainer marginTop="0px">
				<PageContainer>
					<PageFlexContainer maxWidth="1350px" padding="0px 35px">
						<StickyInfoSection 
							sticky="80px" 
							contentLeftPadding="0px 0px 0px 0px" 
							contentRightPadding="0px 0px 0px 50px" 
							contentLeftMaxWidth="380px"
							contentLeftMinWidth="380px"
							contentRightMaxWidth="calc(100% - 380px)"
							contentLeftFlex="0 0 25%"
							isNoTitle={true}
							border={false}
							titlePadding="0px"
							reverseDirection={false}
							contentLeft={<ProfileInfo type="Influencer" isLoading={isLoading}/>}>
							<FlexSpacer height="30px"/>
							<CollabHeader type="PROFILE" title="Emily van Run" isLoading={isLoading} tags={tags} mapRef={this.mapSectionRef} getScrollDuration={this.getScrollDuration}/>
							<FlexSpacer height="30px"/>
							<QuickNav padding="14px 0px" topBorder={true} stickyPosition="80px" navigation={navigation_component} getScrollDuration={this.getScrollDuration} marginBottom='0px' isLoading={isLoading}/>
							<FlexSpacer height="40px"/>
							<ScrollElement name="instagram-section" className="element">
								<div ref={this.instagramSectionRef}>
									<Carousel isLoading={isLoading} title="Instagram feed" type="instagram" simple={true}/>
								</div>
							</ScrollElement>
							<PageContent>
								<FlexSpacer height="60px"/>
								<ScrollElement name="collabs-section" className="element">
									<div ref={this.collabsSectionRef}>
										<List isLoading={isLoading} dontLoadMore={true} title="Collaborated on" simple={true} length={2} view_more={false} type="collabs" headerPadding="15px 0px 10px"/>
									</div>
								</ScrollElement>
								<FlexSpacer height="60px"/>
								<ScrollElement name="collabd-with-section" className="element">
									<div ref={this.collabdWithSectionRef}>
										<Carousel isLoading={isLoading} title="Collaborated with" type="profiles" simple={true}/>
									</div>
								</ScrollElement>
								<FlexSpacer height="60px"/>
								<ScrollElement name="reviews-section" className="element">
									<div ref={this.reviewsSectionRef}>
										<StickyInfoSection title="Reviews" sticky="150px" subHeader={<StarRating/>}>
											<Reviews isLoading={isLoading} reviews={reviews}/>
										</StickyInfoSection>
									</div>
								</ScrollElement>
	{/*							<FlexSpacer height="60px"/>
								<ScrollElement name="map-section" className="element">
									<div ref={this.mapSectionRef}>
										<MapBox title="Location"/>
									</div>
								</ScrollElement>*/}
								<FlexSpacer height="60px"/>
								<ScrollElement name="similar-section" className="element">
									<div ref={this.similarInfluencerSectionRef}>
										<Carousel isLoading={isLoading} title="Similar" type="profiles" simple={false}/>
									</div>
								</ScrollElement>
								<Footer/>
							</PageContent>
						</StickyInfoSection>
					</PageFlexContainer>
					</PageContainer>
				</DashboardContainer>
			</React.Fragment>
		)
	}
}