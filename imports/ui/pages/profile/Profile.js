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


// NEW COMPONENTS
import OverviewStats from '../../new_components/profile/overview_stats/OverviewStats'

import AudienceInsights from '../../new_components/profile/audience_insights/AudienceInsights'
import WordCloud from '../../new_components/profile/word_cloud/WordCloud'
import AveragePerPost from '../../new_components/profile/average_per_post/AveragePerPost'
import PhotoFeed from '../../new_components/profile/photo_feed/PhotoFeed'


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
import {CustomFlexLayout} from '../../layout/FlexLayouts.sc'







export default class ProfilePage extends  React.Component {

	state = {
		isLoading: true,
		quickNavIsStuck: false,
	}

	componentDidMount = () => {
		setTimeout(() => {
			this.setState({isLoading: false, reviews: data.collab_data})
		}, 1000)
	}


	render() {
		const {isLoading, reviews, quickNavIsStuck} = this.state


		return (
			<DashboardContainer marginTop="0px">
				<PageContainer>
					<CustomFlexLayout>
						<ProfileInfo type="Influencer" isLoading={isLoading}/>
						<div>
							<OverviewStats/>
							<AveragePerPost/>
							<AudienceInsights/>
							<WordCloud/>
						</div>
						<PhotoFeed/>
					</CustomFlexLayout>
				</PageContainer>
			</DashboardContainer>
		)
	}
}