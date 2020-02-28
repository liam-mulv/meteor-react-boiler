import React from 'react'

// NPM

// Styled Components
import { DashboardContainer, StyledScrollbars } from './Home.sc'
import { PageContainer, PageFlexContainer, PageContent, FlexSpacer, ScrollElement  } from '../../common/Common.sc'

// Components
import Navbar from '../../components/navbar/Navbar'
import RowInfluencer from '../../components/row/RowInfluencer'
import RowCollabs from '../../components/row/RowCollabs'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/footer/Footer'
import Carousel from '../../components/carousel/Carousel'
import CarouselBanner from '../../components/carousel/CarouselBanner'

export default class Home extends  React.Component {

	state = {
		isLoading: true,
		quickNavIsStuck: false,
	}

	componentDidMount = () => {

		setTimeout(() => {
			this.setState({isLoading: false})
		}, 1000)
	}


	render() {
		const {isLoading} = this.state
		return (
			<DashboardContainer marginTop="0px">
				<PageContainer>
					<PageFlexContainer padding="0px 35px">
						<FlexSpacer height="45px"/>
						<CarouselBanner/>
						<FlexSpacer height="45px"/>
						<Carousel isLoading={isLoading} title="Sponsored Creators" type="profiles" simple={false}/>
						<FlexSpacer height="45px"/>
						<Carousel isLoading={isLoading} title="Collab Registered Creators" type="profiles" simple={false}/>
						<FlexSpacer height="45px"/>
						<Carousel isLoading={isLoading} title="#fashion Creators" type="profiles" simple={false}/>

{/*						<FlexSpacer height="45px"/>
						<Carousel isLoading={isLoading} title="Recently Viewed & More" type="collabs" simple={false}/>
						<FlexSpacer height="45px"/>
						<Carousel isLoading={isLoading} title="Based on your interest in #fashion" type="collabs" simple={false}/>
						<FlexSpacer height="45px"/>
						<Carousel isLoading={isLoading} title="Inspired By Your Browsing History" type="collabs" simple={false}/>*/}
					</PageFlexContainer>
				</PageContainer>
			</DashboardContainer>
		)
	}
}