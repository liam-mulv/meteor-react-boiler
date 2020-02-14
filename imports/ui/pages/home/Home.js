import React from 'react'

// NPM

// Styled Components
import { DashboardContainer, StyledScrollbars } from './Home.sc'

// Components
import Navbar from '../../components/navbar/Navbar'
import RowInfluencer from '../../components/row/RowInfluencer'
import RowCollabs from '../../components/row/RowCollabs'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/footer/Footer'

export default class Home extends  React.Component {


	render() {
		return (
			<React.Fragment>
				<DashboardContainer>
{/*					<RowInfluencer title="Top Influencers"/>
					<RowCollabs title="Paid Collabs"/>
					<RowCollabs title="Creative Collabs" subTitle="*Creative Collabs are unpaid collabs - Good for social, experience & creative growth"/>
					<RowCollabs title="Merch Collabs" subTitle="*Merch Collabs are for brands providing free merchandice in exchange for a collab"/>*/}
					{/*	<ListCollabs title="Near You"/>
					<ListCollabs title="Recommended For You"/>*/}
{/*					<Footer/>
*/}				</DashboardContainer>
			</React.Fragment>
		)
	}
}