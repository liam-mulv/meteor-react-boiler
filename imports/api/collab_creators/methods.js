import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'

import _ from 'lodash'

// Collections
import {CollabCreators} from './collab_creators'


Meteor.methods({ 
    'collab_creators.upsert'(creator) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('Not authorised to add a document')
        }
        CollabCreators.insert(creator)
    },
    'collab_creators.remove'(_id) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('Not authorised to add a document')
        }
        CollabCreators.remove({_id})
    },
    'collab_creators.updatePostedStatus'(collabTitle, username) {
        CollabCreators.update({collabTitle, username}, {
            $set: {has_posted: true}
        })
    },
    'collab_creators.updatePostEngagement'(collabTitle, username, post_engagement) {
        CollabCreators.update({collabTitle, username}, {
            $set: {post_engagement}
        })    
    }
})