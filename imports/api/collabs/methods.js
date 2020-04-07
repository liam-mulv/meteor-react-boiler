import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'

import _ from 'lodash'

// Collections
import {Collabs} from './collabs'


Meteor.methods({ 
    'collabs.upsert'(collab) {

        if (!Meteor.userId()) {
            throw new Meteor.Error('Not authorised to add a document')
        }
        new SimpleSchema({
            'userId': {
                type: String
            },
            'title': {
                type: String
            },
            'setup_complete': {
                type: Boolean,
            },
            'hashtags': {
                type: Array,
                optional: true,
            },
            'hashtags.$': {
                type: String,
                optional: true,
            },
            'start_date': {
                type: Date,
                optional: true,
            }
        }).validate({
            userId: Meteor.userId(),
            title: collab.title,
            setup_complete: false
        })
        let newCollab = Collabs.insert({
            userId: Meteor.userId(),
            title: collab.title,
            setup_complete: false,
            timestamp: new Date().getTime(),
        })
        return newCollab
    },
    'collabs.updateTitle'(_id, title) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('Not authorised to add a document')
        }
        Collabs.update({_id}, {
            $set: {title}
        })
    },
    'collabs.addHashtag'(_id, tag) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('Not authorised to add a document')
        } 

        Collabs.update({_id}, 
            {
                $addToSet: {hashtags: tag}
            }
        )
    },
    'collabs.removeHashtag'(_id, tag) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('Not authorised to add a document')
        }
        Collabs.update({_id}, 
            {
                $pull: {hashtags: tag}
            }
        )
    },
    'collabs.updateStartDate'(_id, date) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('Not authorised to add a document')
        }
        Collabs.update({_id}, 
            {$set: {start_date: date}}
        )
    },
    'collabs.setSetupComplete'(_id) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('Not authorised to add a document')
        }
        Collabs.update({_id}, 
            {$set: {setup_complete: true}}
        )
    },
    'collabs.remove'(_id) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('Not authorised to add a document')
        }
        Collabs.remove({_id})
    }
})