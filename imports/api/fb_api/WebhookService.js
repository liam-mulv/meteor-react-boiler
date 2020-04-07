import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'
import { WebApp } from 'meteor/webapp';
import url from "url";

// REQURIED
const VERIFY_TOKEN = 'MyWebhookToken'
const ACCESS_TOKEN = 'EAAHPvSIFDAMBAPSuBF0ykU0ClyEnDJwla7kQAqTaAB6aNB8K9SEQb8dvFXf39XgJZBvXpSkF95yEj38X2eZC916fII3ocCt1PglFhgvf0TaZBcZAdL779nilPlhDZB0cluGMkz2vRkVnkOKbo5eJe7EAde9g0txZBbpDlpNJHfJwZDZD'

//FB REST API
import FB_API from './RestService'

import {MockMentionedData, MockTimeseriesData} from './Data'


const verifyWebhook = (req, res, params) => {	
	if(params.token === VERIFY_TOKEN) {
		res.writeHead(200)
		res.end(params.challenge)
  	} else {
  		res.writeHead(200)
  		res.end("Invalid verification token")
  	}
}

const getParams = (req) => {
	const urlParts = url.parse(req.url, true)
	const mode = urlParts.query['hub.mode']
	const challenge = urlParts.query['hub.challenge']
	const token = urlParts.query['hub.verify_token']
	return {mode, challenge, token}
}



const getMentionedMedia = async () => {
    const mentioned_media = MockMentionedData[0]
    const timeseries_data = MockTimeseriesData

    // Update collab collections
    Meteor.call('collab_creators.updatePostEngagement', 'facebook', 'emrata', mentioned_media.engagement_rate)
    Meteor.call('collab_creators.updatePostedStatus', 'facebook', 'emrata')
    Meteor.call('collab_media.upsert', mentioned_media)
    Meteor.call('collab_timeseries.upsert', timeseries_data)
} 

WebApp.connectHandlers.use('/webhooks', (req, res) => {    
	console.log('Webhook received!')
	const params = getParams(req)

	// Verify hook
	if(params.mode) {
		verifyWebhook(req, res, params)
	} else {
		req.on('data', Meteor.bindEnvironment((data) => {
			// const body = JSON.parse(data)
			// const userId = body.entry[0].id
			// const mediaId = body.entry[0].changes[0].value.media_id
			getMentionedMedia()

		}))
		req.on('end', Meteor.bindEnvironment( () => {
			res.setHeader('Content-Type', 'application/json');
			res.writeHead(200)
    		res.end(JSON.stringify({ status: 'ok' }));
		}))
	}
})