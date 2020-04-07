import React from 'react'
import {Meteor} from 'meteor/meteor'

// NPM

// Styled Components
import { DashboardContainer, StyledScrollbars } from '../home/Home.sc'
import { PageContainer, PageFlexContainer, PageContent, FlexSpacer, ScrollElement  } from '../../components/common_old/Common.sc'

export default class SpiderDashboard extends  React.Component {

	state = {
		IG_total_count:0
	}

	componentDidMount = () => {
		var intervalId = setInterval(this.timer, 2000);
	}

	componentWillUnmount = () => {
	   // use intervalId from the state to clear the interval
	   clearInterval(this.state.intervalId);
	}

	timer = () =>{
	   	// setState method is used to update the state
	   	if(Meteor.isClient){
			Meteor.call("ig_users.count",  (error, result) => {
				console.log('Update count!')
				if(!error) {
					this.setState({IG_total_count: result})
				} else {
					console.log(error)
				}
		    })
		}
	}


	render() {
		const {IG_total_count} = this.state
		return (
			<DashboardContainer marginTop="0px">
				<PageContainer>
					<PageFlexContainer padding="0px 35px">
						<h1>Creators: {IG_total_count}</h1>
					</PageFlexContainer>
				</PageContainer>
			</DashboardContainer>
		)
	}
}

