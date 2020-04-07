import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'
import moment from "moment"
import axios from 'axios'

// MAYBE NEEDED
const COLLAB_IG_ID = '17841431073896104'
const IG_ID = "10219281763449154"

// REQURIED
const GRAPH_API = 'https://graph.facebook.com/v6.0/'
const APP_ID = '509886203235331'
const APP_SECRET = '4ac06f1ba63ba4a0966805b4c4631838'

import {IG_Media} from '../ig_media/ig_media'

class RestService {

	async exchangeShortToLongLivedToken(ACCESS_TOKEN) {
		try {								
		    const response = await axios.get(`${GRAPH_API}oauth/access_token?grant_type=fb_exchange_token&client_id=${APP_ID}&client_secret=${APP_SECRET}&fb_exchange_token=${ACCESS_TOKEN}`)
			return {
		    	data: response.data, 
		    	error:false
		    }
		} catch (error) {
			console.log(error.response.data.error.message)
			return {
		    	error:true
		    }
		}
	}


	async getInstagramBusinessAccountAndMedia(username, ACCESS_TOKEN){
		try {
		    const response = await axios.get(`${GRAPH_API + COLLAB_IG_ID}?fields=business_discovery.username(${username}){id,ig_id,username,name,profile_picture_url,biography,followers_count,follows_count,media_count,website,media{id,permalink,timestamp,media_type,caption,media_url,username,comments_count,like_count}}&access_token=${ACCESS_TOKEN}`)
		    return {
		    	data: response.data.business_discovery, 
		    	error:false
		    }
		} catch (error) {
			console.log(error.response.data.error.message)
			return {
		    	error:true
		    }
		}
	}

	async getInstagramBusinessMedia(username, ACCESS_TOKEN) {
		try {
		    const response = await axios.get(`${GRAPH_API + IG_ID}?fields=business_discovery.username(${username}){id,ig_id,username,name,profile_picture_url,biography,followers_count,follows_count,media_count,website}&access_token=${ACCESS_TOKEN}`)
		    console.log(response);
		} catch (error) {
			console.log(error.response.data.error.message)
		}		
	}


	async getInstagramMentionedMedia(id, media_id, ACCESS_TOKEN) {
		try {
			const response = await axios.get(`${GRAPH_API + id}?fields=mentioned_media.media_id(${media_id}){caption,media_type,comments,comments_count,like_count,media_url,owner,timestamp,username}&access_token=${ACCESS_TOKEN}`)
			console.log(response)
		} catch (error) {
			console.log(error.response.data.error.message)
		}
	}

}

const restService = new RestService()
module.exports = restService


