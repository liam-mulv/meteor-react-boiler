import React, {useEffect, useState} from 'react'

// NPM
import { FacebookProvider, LoginButton } from 'react-facebook';

// Styled Components
import {FacebookLoginContainer} from './FacebookLogin.sc'

// Icon
import FacebookCircleIcon from '../../icons/facebook-circle.js'

function FacebookLogin() {

	handleResponse = (data) => {
	    console.log(data);
	}
	 
	handleError = (error) => {
		console.log(error)
	    // this.setState({ error });
	}

	return (
		<FacebookLoginContainer>
			<div>
				<h1>Login</h1>
				<FacebookProvider appId="509886203235331">
			        <LoginButton
			          scope="public_profile,email,instagram_basic,pages_show_list"
			          onCompleted={this.handleResponse}
			          onError={this.handleError}
			        >
			          <span><FacebookCircleIcon/>Continue with Facebook</span>
			        </LoginButton>
			    </FacebookProvider>
{/*				<div class="fb-login-button" data-onlogin={() => checkLoginStateTwo()}  data-scrope="public_profile,email,instagram_basic,pages_show_list" data-width="" data-size="large" data-button-type="continue_with" data-auto-logout-link="false" data-use-continue-as="true"></div>
*/}			</div>
		</FacebookLoginContainer>
	)
}

export default FacebookLogin