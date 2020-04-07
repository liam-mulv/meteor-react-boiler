import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'

// Import collection
import {CollabTimeseries} from '../collab_timeseries'

// Meteor Publisher
Meteor.publish('collab_timeseries', function () {
	return CollabTimeseries.find({})
})
