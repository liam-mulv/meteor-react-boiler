import React, {useEffect, useState} from 'react'
import {Meteor} from 'meteor/meteor'

// // Styled Components
import {FacebookLoginContainer} from './FacebookLogin.sc'

// Hooks
import { useHistory } from 'react-router-dom';


function FacebookLogin(props) {

  	const history = useHistory()

	useEffect(() => {
  		fbLoaded.promise.then(() => {
  			checkLoginState()
		})
	}, [])


	statusChangeCallback = (response) => {
		console.log('Response', response)
	    if (response.status === 'connected') {
	    	Meteor.call('getLongLivedFbToken', response.authResponse.accessToken, (err, res) => {
	    		if(!err) {
	    			console.log(Meteor.user())
					history.push('/lists')
	    		} else {
	    			console.log('Err', err)
	    		}
	    	})
	    	// Meteor.users.update({_id:Meteor.userId()}, {$set: {"profile.fbAuth":response.authResponse}});
	    } else if (response.status === 'not_authorized') {
	        console.log("Please log into this app.");
	    } else {
	    	console.log(Meteor.userId())
	    	console.log(Meteor.user())
	        console.log("Please log into this facebook.");
	    }
	}

	checkLoginState = () => {
	    FB.getLoginStatus((response) => {
	        statusChangeCallback(response)
	    })
	}

    return (
		<FacebookLoginContainer>
			<div>
				<h1>Login</h1>
            	<div className="fb-login-button" onClick = {() => checkLoginState()} data-scrope="public_profile,email,instagram_basic,instagram_manage_comments,manage_pages" data-width="" data-size="large" data-button-type="continue_with" data-auto-logout-link="false" data-use-continue-as="true"></div>
            </div>
        </FacebookLoginContainer>
    )
}

export default FacebookLogin