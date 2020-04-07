import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'

import _ from 'lodash'

// Collections
import {Lists} from './lists'


Meteor.methods({
    'lists.upsert'(list) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('Not authorised to add a document')
        }

        new SimpleSchema({
            'owner': {
                type: String
            },
            'title': {
                type: String
            },
        }).validate({
            owner: Meteor.userId(),
            title: list.title,
        })
        Lists.insert({
            owner: Meteor.userId(),
            title: list.title,
            timestamp: new Date().getTime(),
            creators: list.creators 
        })
    },
    'lists.updateCreatorStatus'(_id, creatorId, status) {

        if (!Meteor.userId()) {
            throw new Meteor.Error('Not authorised to add a document')
        }
        Lists.update({_id, 'creators._id': creatorId}, 
           {$set : {"creators.$.status" : status} } 
        )
    },
    'lists.remove'(_id) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('Not authorised to add a document')
        }
        Lists.remove({_id})
    },
    'lists.addCreator'(_id, creator) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('Not authorised to add a document')
        }

        // Check nested array for existing creator
        let tempList = Lists.find({_id}).fetch()
        let creatorFound = false
        if(tempList.length > 0) { 
            let response = _.find(tempList[0].creators, {_id:creator._id})
            if(typeof response !== 'undefined') {
                creatorFound = true
            }
        }

        // Add if no exisiting creator found
        if(!creatorFound) {
            creator.status = 1
            Lists.update({_id}, {
                $addToSet: {'creators': creator }
            })
        }
    },
    'lists.removeCreator'(_id, creator) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('Not authorised to add a document')
        }
        Lists.update({_id}, {
            $pull: {'creators': {_id : creator._id } }
        })
    },
    'lists.removeMultipleCreators'(_id, creatorIds) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('Not authorised to add a document')
        }
        Lists.update({_id}, 
            { $pull: {'creators': {'_id' :{$in: creatorIds}}}}
        )
    },
    'lists.updateTitle'(_id, title) {

        console.log('Updating title', _id, title)
        if (!Meteor.userId()) {
            throw new Meteor.Error('Not authorised to add a document')
        }
        Lists.update({_id}, {
            $set: {title}
        })
    }
})
