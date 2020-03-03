import React, {useEffect, useState} from 'react'

import {FacebookLoginContainer} from './FacebookLogin.sc'

function FacebookLogin() {

	FB.Event.subscribe('auth.login', function(response) {
		console.log(response)
	  	// do something with response
	});

	return (
		<FacebookLoginContainer>
			<div>
				<h1>Login with facebook</h1>
				<div class="fb-login-button" data-scrope="instagram_basic,pages_show_list" data-width="" data-size="large" data-button-type="continue_with" data-auto-logout-link="false" data-use-continue-as="true"></div>
			</div>
		</FacebookLoginContainer>
	)
}

export default FacebookLogin