import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

// Styled Components
import { PrimaryButton } from '../../common/Common.sc'
import { Navbar, NavRight, NavLeft, Brand } from './Navbar.sc'

export default class PrivateHeader extends React.Component {

	componentWillMount = () => {
		if(!Meteor.userId()) {
			this.props.history.replace('/')
		}
	}

	onLogout = () => {
		Accounts.logout()
	}

	render() {
		return (
			<Navbar>
				<NavLeft>
					<Brand>{this.props.title}</Brand>
				</NavLeft>
				<NavRight>
					<PrimaryButton onClick={this.onLogout}>Logout</PrimaryButton>
				</NavRight>
			</Navbar>
		)
	}
}
