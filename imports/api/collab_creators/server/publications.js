import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'

// Import collection
import {CollabCreators} from '../collab_creators'

// Meteor Publisher
Meteor.publish('collab_creators', function (collabId) {
	return CollabCreators.find({userId:Meteor.userId(), collabId: collabId}, {sort: {updated_at: -1}})
})
