import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'

import _ from 'lodash'

// Collections
import {CollabMedia} from './collab_media'


Meteor.methods({ 
    'collab_media.upsert'(media) {

        delete media["_id"];

        // if (!Meteor.userId()) {
        //     throw new Meteor.Error('Not authorised to add a document')
        // }
        CollabMedia.upsert({id: media.id}, media)
    }
})