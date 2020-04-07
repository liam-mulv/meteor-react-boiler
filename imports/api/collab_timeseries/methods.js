import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'

import _ from 'lodash'

// Collections
import {CollabTimeseries} from './collab_timeseries'


Meteor.methods({ 
    'collab_timeseries.upsert'(data) {
    	console.log(data)
        // if (!Meteor.userId()) {
        //     throw new Meteor.Error('Not authorised to add a document')
        // }
        CollabTimeseries.upsert({collabTitle: data.collabTitle}, data)
    }
})