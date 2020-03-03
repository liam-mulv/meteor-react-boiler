import React, {useEffect, useState} from 'react'

import {FacebookLoginContainer} from './FacebookLogin.sc'

function FacebookLogin() {

	function checkLoginState() {
		console.log('Check login state clicked')
	  	FB.getLoginStatus(function(response) {
	  		console.log('Button response', response)
	   		statusChangeCallback(response);
	  	})
	}

	return (
		<FacebookLoginContainer>
			<div>
				<h1>Login with facebook</h1>
				<div class="fb-login-button" onlogin="checkLoginState();" data-scrope="instagram_basic,pages_show_list" data-width="" data-size="large" data-button-type="continue_with" data-auto-logout-link="false" data-use-continue-as="true"></div>
			</div>
		</FacebookLoginContainer>
	)
}

export default FacebookLogin