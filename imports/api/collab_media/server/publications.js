import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'

// Import collection
import {CollabMedia} from '../collab_media'

// Meteor Publisher
Meteor.publish('collab_media', function (collabId) {
	return CollabMedia.find({})
})
