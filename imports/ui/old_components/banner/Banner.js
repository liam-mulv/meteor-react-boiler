import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'


// Styled Components
import {BannerContainer, Dots, Dot, BannerWrapper, MainBanner, RightBanner, LeftBanner, StripeContainer, Grid, Stripe, TextWrapper} from './Banner.sc'

export default class Banner extends React.Component {

	render() {
		return (
			<BannerContainer>
				<BannerWrapper>
					<LeftBanner/>
					<MainBanner>
						<TextWrapper>
							<h1>connect, collab & earn</h1>
							<p>Expand your brand or influence today!</p>
						</TextWrapper>
						{/*<StripeContainer>
							<Grid>
								<Stripe/>
								<Stripe/>
								<Stripe/>
								<Stripe/>
								<Stripe/>
								<Stripe/>
								<Stripe/>
								<Stripe/>
								<Stripe/>
								<Stripe/>
								<Stripe/>
								<Stripe/>
								<Stripe/>
								<Stripe/>
								<Stripe/>
								<Stripe/>
							</Grid>
						</StripeContainer>*/}
					</MainBanner>
					<RightBanner/>
				</BannerWrapper>
				<Dots>
					<Dot/>
					<Dot/>
					<Dot active={true}/>
				</Dots>
			</BannerContainer>
		)
	}
}
