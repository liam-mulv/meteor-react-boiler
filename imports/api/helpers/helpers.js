import _ from 'lodash'
import {Meteor} from 'meteor/meteor'
import moment from 'moment'

// Returns Epoch time 2 days ago
const dateTwoDaysAgo = () => {
	let d = new Date()
	 d.setDate(d.getDate()-2);
	let ts = d.getTime()
	return ts
}

// Returns Epoch time 2 days ago
const dateOneDayAgo = () => {
	let d = new Date()
	 d.setDate(d.getDate()-1);
	let ts = d.getTime()
	return ts
}

async function saveAndFormatIgMedia(IG) {
	let newMedia = []
	for(const media of IG.data.media.data) {
		media.engagement = (media.like_count + media.comments_count) / IG.data.followers_count * 100
		newMedia.push(media)
	}
	newMedia.map((media, index) => { Meteor.call('ig_media.upsert',media )})
}


module.exports = {
	dateOneDayAgo,
	dateTwoDaysAgo, 
	saveAndFormatIgMedia
}