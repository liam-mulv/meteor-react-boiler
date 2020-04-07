import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'

import { Accounts } from 'meteor/accounts-base'

// FB REST SERVICE
import FB_API from '../fb_api/RestService'


Meteor.methods({
	async getLongLivedFbToken (accessToken) {

		const response = await FB_API.exchangeShortToLongLivedToken(accessToken)
		const longLivedFbToken = response.data

		// Get expiration date
		let expires_in = longLivedFbToken.expires_in * 1000
		let now = + new Date()
		longLivedFbToken.expires_at = now + expires_in

		Meteor.users.update({_id:Meteor.userId()}, {
			$set: {
				"profile.fbAuth":longLivedFbToken
			}
		});
	}
})