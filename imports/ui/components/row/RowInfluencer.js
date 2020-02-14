import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

// NPM
import Sticky from 'react-sticky-el'

// Components
import Influencer from '../card_influencer/Influencer'
import SkeletonInfluencer from '../card_influencer/SkeletonInfluencer'
// Styled Components
import { PrimaryButton } from '../../common/Common.sc'
import { StyledScrollbars } from '../../pages/home/Home.sc'
import { SkeletonInfluencerTile } from '../../common/Skeleton.sc'
import { RowWrapper, RowTitle, FlexRow } from './RowInfluencer.sc'

import data from '../../data/influencer_data'


export default class RowInfluencer extends React.Component {

	state = {
		influencers: [],
	}

	componentDidMount = () => {
		setTimeout(() => {
			this.setState({influencers:data.top_influencers})
		}, 1000)
	}

	render() {
		const {influencers} = this.state
		return (
			<RowWrapper className="block">
				<RowTitle>
					{this.props.title}
					<span>{this.props.subTitle}</span>
				</RowTitle>
				<StyledScrollbars className="scrollarea" style={{ width: '100%', height: '350px'}}>
					<FlexRow>
						{influencers.length > 0 ? influencers.map((data, index) => {
							return (
								<Influencer list={false}  data={data}/>
							)
						}) : 
							[1,2,3,4,5,6,7,8].map((data, index) =>{
								return (
									<SkeletonInfluencer />
								)
							})
						}
					</FlexRow>
				</StyledScrollbars>
			</RowWrapper>
		)
	}

}
