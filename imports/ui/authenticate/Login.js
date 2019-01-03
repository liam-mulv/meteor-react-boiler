import React from 'react'
import { Link } from 'react-router-dom'
import { Meteor } from 'meteor/meteor'

// Styled Components
import { InputField, DefaultBox, PrimaryButton, ErrorMessage } from '../common/Common.sc'

export default class Login extends React.Component {

	componentWillMount = () => {
		if(Meteor.userId()) {
			this.props.history.replace('/dashboard')
		}
	}

	state = {
		error: ''
	}

	onSubmit = (e) => {
		e.preventDefault()
		let email = this.refs.email.value.trim()
		let password = this.refs.password.value.trim()

		Meteor.loginWithPassword({email}, password, (err) => {
			if(err) {
				this.setState({error: 'Login failed. Check your email and password'})
			} else {
				this.setState({error: ''})
			}
		})
	}

	render() {
		return (
			<DefaultBox auth hCenter vCenter centerText>
				<h1>Login</h1>

				{this.state.error ? <ErrorMessage>{this.state.error}</ErrorMessage> : undefined}

				<form onSubmit={this.onSubmit} noValidate>
					<InputField fullWidth type="email" ref="email" name="email" placeholder="Email"/>
					<InputField fullWidth type="password" ref="password" name="password" placeholder="Password"/>
					<PrimaryButton fullWidth marginBottom>Login</PrimaryButton>
				</form>
				<p>Don't have an account? <Link to="/signup">Sign up</Link></p>
			</DefaultBox>
		)
	}
}