
import React, {useEffect, useState} from 'react'

// Styled Components
import { 
	DashboardContainer, 
	StyledScrollbars, 	
	FlexContainer,
	FlexLeft,
	FlexMiddle,
	FlexRight,
	RightMiddleWrapper
} from '../home/Home.sc'
import {
	ScrollElement,
	PageContent,
	PageContainer,
	Spacer, 
	PageTitleWrapper, 
	PageFlexContainer,
	LazyLoadBackgroundImage,
	FlexSpacer
} from '../../common/Common.sc'

// import { PageContainer, PageFlexContainer, PageContent, FlexSpacer, ScrollElement  } from '../../common/Common.sc'

import {MessageWindowHeader, MessageWindowIcon} from '../../components/my_collabs/MiddleContent.sc'

// Components
import RightContent from '../../components/my_collabs/RightContent'
import MiddleContent from '../../components/my_collabs/MiddleContent'
import LeftContent from  '../../components/my_collabs/LeftContent'

// Data
import data from '../../data/collab_data'


// Components
import BreadCrumb from '../../components/breadcrumb/BreadCrumb'
import QuickNav from '../../components/quick-nav/QuickNav'
import CollabHeader from '../../components/collab/CollabHeader'
import InstagramInfo from '../../components/instagram-info/InstagramInfo'
import FourAcross_ImageBanner from '../../components/image_banner/FourAcross_ImageBanner'
import Collage_ImageBanner from '../../components/image_banner/Collage_ImageBanner'
import Reviews from '../../components/review/ReviewList'
import StarRating from '../../components/review/StarRating'
import StickyApplyFooter from '../../components/collab/StickyApplyFooter'
import List from '../../components/list/List'
import ProfileInfo from '../../components/profile/ProfileInfo'
import StickyInfoSection from '../../components/sticky_info_section/StickyInfoSection'
import FeatureCard from '../../components/feature_card/FeatureCard'
import UnorderedList from '../../components/unordered_list/UnorderedList'
import Tags from '../../components/tags/Tags'
import MapBox from '../../components/map/MapBox'
import Footer from '../../components/footer/Footer'
import SkeletonParagraph from '../../components/skeleton_paragraph/SkeletonParagraph'
//Icons
import PuzzleIcon from '../../icons/puzzle'
import InstagramIcon from '../../icons/instagram'
import CommentIcon from '../../icons/comment'
import CommentsIcon from '../../icons/comments'
import BoxUsdIcon from '../../icons/box-usd'
import CommentAltEditIcon from '../../icons/comment-alt-edit'
import Carousel from '../../components/carousel/Carousel'

// Data
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

const top_banner_images = [
	'https://cdn.shopify.com/s/files/1/0082/0795/8078/products/PeachesandCream-195.png?v=1578884978',
	'https://cdn.shopify.com/s/files/1/0082/0795/8078/products/PeachesandCream-124.png?v=1578890685',
	'https://cdn.shopify.com/s/files/1/0082/0795/8078/products/PeachesandCream-72_1080x.png?v=1578883672',
	'https://cdn.shopify.com/s/files/1/0082/0795/8078/products/PeachesandCream--4.png?v=1578876819',
]

const mood_board = [
	'https://files.slack.com/files-pri/TM2DYBXQR-FTEQKCL76/70859805_138673737426403_70571798288036272_n.jpg',
	'https://files.slack.com/files-tmb/TM2DYBXQR-FTHEQNET0-1bdce9c1fc/72626024_995220000857671_5840923857851795257_n_720.jpg',
	'https://files.slack.com/files-pri/TM2DYBXQR-FT3Q5QKPV/75210480_202947894067185_1018563891907006725_n.jpg',
	'https://files.slack.com/files-pri/TM2DYBXQR-FTEQKCBK6/76852358_444115709597621_6131288060851648487_n.jpg',
	'https://files.slack.com/files-pri/TM2DYBXQR-FT3Q5QH51/78708825_573266773468964_8936373931278454294_n.jpg',
	'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fscontent-syd2-1.cdninstagram.com%2Fv%2Ft51.2885-15%2Fe35%2F81088302_927144214346162_6597907566874990624_n.jpg%3F_nc_ht%3Dscontent-syd2-1.cdninstagram.com%26_nc_cat%3D102%26_nc_ohc%3DtUKxjT7SFIkAX8PQPsy%26oh%3D8caf5739da4ad6f433499a4ea7b04b6b%26oe%3D5ED8BAB4',
	'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fscontent-syd2-1.cdninstagram.com%2Fv%2Ft51.2885-15%2Fe35%2F79743836_1003689180004393_6458691984827709464_n.jpg%3F_nc_ht%3Dscontent-syd2-1.cdninstagram.com%26_nc_cat%3D101%26_nc_ohc%3Db0oyRsjz0bIAX8-Suyk%26oh%3D3c62e25c20ed6771a879833ef5dd97d6%26oe%3D5ECE45C3',
	'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fscontent-syd2-1.cdninstagram.com%2Fv%2Ft51.2885-15%2Fe35%2F79384951_104561470984416_6162239676720269221_n.jpg%3F_nc_ht%3Dscontent-syd2-1.cdninstagram.com%26_nc_cat%3D100%26_nc_ohc%3DEp_HhukVdmQAX_0WHzX%26oh%3Dadf683fd51c4290c45570a9ddda27c6d%26oe%3D5EBBFB50'
]

export default class CollabContent extends  React.Component {

	constructor(props) {
	    super(props)
	    this.hostSectionRef = React.createRef()
	    this.briefSectionRef = React.createRef()
	    this.optionsSectionRef = React.createRef()
		this.moodBoardSectionRef = React.createRef()
		this.requirementsSectionRef = React.createRef()
		this.featureSectionRef = React.createRef()
	    this.reviewSectionRef = React.createRef()
	    this.mapSectionRef = React.createRef()
	    this.similarBrandRef = React.createRef()
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
		console.log('Fetching scroll duration')
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop
		let elDistanceToTop = window.pageYOffset + el.current.getBoundingClientRect().top
		let distanceFromElement
		if(scrollTop > elDistanceToTop) {
			distanceFromElement = scrollTop - elDistanceToTop
		} else {
			distanceFromElement = elDistanceToTop - scrollTop
		}
		console.log(distanceFromElement / 2)
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
	  		// { name: 'host', id: 'host-section', ref: this.hostSectionRef}, 
	  		{ name: 'brief', id: 'brief-section', ref: this.briefSectionRef},
	  		{ name: 'mood board', id: 'mood-section', ref: this.moodBoardSectionRef},
	  		{ name: 'reviews', id: 'reviews-section', ref: this.reviewSectionRef}, 
	  		{ name: 'location', id: 'map-section', ref: this.mapSectionRef }, 
	  		{ name: 'similar brands', id: 'similar-section', ref: this.similarBrandRef},
	  	]

		return (
			<PageFlexContainer padding="0px">
				<React.Fragment>
					<FlexSpacer height="30px"/>
					<CollabHeader  type="COLLAB" title="Spring Time Fling" isLoading={isLoading} tags={tags} mapRef={this.mapSectionRef} getScrollDuration={this.getScrollDuration}/>
					<FlexSpacer height="30px"/>
					<QuickNav padding="14px 0px" topBorder={true} stickyPosition={this.props.quickNavStickyPosition} marginBottom="20px" navigation={navigation_component} getScrollDuration={this.getScrollDuration} isLoading={isLoading}/>
					<FourAcross_ImageBanner images={top_banner_images} isLoading={isLoading}/>
					<FlexSpacer height="60px"/>

					<ScrollElement name="brief-section" className="element" >
						<div ref={this.briefSectionRef}>
							<StickyInfoSection title="Brief" sticky={this.props.stickyOffset ? this.props.stickyOffset : "130px"}>
								{!isLoading ? 
									<React.Fragment>
										<p>Lorem ipsum dolor sit amet, ne nam nonumy iisque prodesset. Erat perpetua mei at. Bonorum eruditi delectus mea id, copiosae expetenda consectetuer eu nam. Ex duo ponderum praesent voluptaria, eum fabulas facilis at. Sed te impedit electram deterruisset, ius in meliore adipiscing, esse pericula laboramus ex mei.</p>
										<p>Erat perpetua mei at. Bonorum eruditi delectus mea id, copiosae expetenda consectetuer eu nam. Ex duo ponderum praesent voluptaria, eum fabulas facilis at. Sed te impedit electram deterruisset, ius in meliore adipiscing, esse pericula laboramus ex mei.</p>
									</React.Fragment>
								: 
									<SkeletonParagraph 
										numberOfLines={6}
									/>
								}
							</StickyInfoSection>
						</div>
					</ScrollElement>

					<FlexSpacer height="60px"/>
					<ScrollElement name="mood-section" className="element">
						<div ref={this.moodBoardSectionRef}>
							<Collage_ImageBanner title="Mood Board" images={mood_board} isLoading={isLoading}/>
						</div>
					</ScrollElement>
					<FlexSpacer height="60px"/>
					<ScrollElement name="reviews-section" className="element">
						<div ref={this.reviewSectionRef}>
							<StickyInfoSection title="Reviews" sticky={this.props.stickyOffset ? this.props.stickyOffset : "130px"} subHeader={<StarRating/>}>
								<React.Fragment>
									<Reviews isLoading={isLoading} reviews={reviews} showStaticHeader={false}/>
								</React.Fragment>
							</StickyInfoSection>
						</div>	
					</ScrollElement>
					<FlexSpacer height="60px"/>
					<ScrollElement name="map-section" className="element">
						<MapBox title="Location"/>
					</ScrollElement>	
					<FlexSpacer height="60px"/>
					<ScrollElement name="similar-section" className="element">
						<div ref={this.similarBrandRef}>
							<Carousel isLoading={isLoading} title="Similar" type="collabs" simple={false}/>
						</div>
					</ScrollElement>
					<PageContent>
						<Footer/>
					</PageContent>
				</React.Fragment>
			</PageFlexContainer>
		)
	}
}