import React from 'react'
import { Link } from 'react-router-dom'
import { Accounts } from 'meteor/accounts-base'

// Styled Components
import { InputField, DefaultBox, PrimaryButton, ErrorMessage } from '../../components/common_old/Common.sc'

export default class Signup extends React.Component {

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

		if(password.length < 6) {
			return this.setState({error: 'Password must be more than 6 characters'})
		}
 
		Accounts.createUser({email, password}, (err) => {
			if(err) {
				this.setState({error: err.reason})
			} else {
				this.setState({error: ''})
				this.props.history.push('/dashboard')
			}
		})	
	}

	render () {
		return (
			<DefaultBox auth hCenter vCenter centerText>
				<h1>Signup</h1>

				{this.state.error ? <ErrorMessage>{this.state.error}</ErrorMessage> : undefined}

				<form onSubmit={this.onSubmit} noValidate>
					<InputField fullWidth type="email" ref="email" name="email" placeholder="Email"/>
					<InputField fullWidth type="password" ref="password" name="password" placeholder="Password"/>
					<PrimaryButton fullWidth marginBottom>Create Account</PrimaryButton>
				</form>

				<p>Already have an account? <Link to="/">Log in</Link></p>
			</DefaultBox>
		)
	}
}

