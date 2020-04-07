import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'

//FB REST API
import FB_API from '../fb_api/RestService'

// Collections
import {IG_Media} from './ig_media'


Meteor.methods({
    'ig_media.upsert'(media) {
        if (!media.username) {
            throw new Meteor.Error('Error: Missing IG username')
        }
        new SimpleSchema({
            // Basic
            'id': {
                type: String
            }, 
            'username': {
                type: String
            },
            'permalink': {
                type: String
            },
            'timestamp': {
                type: String,
            },
            'media_type': {
                type: String
            },
            'caption': {
                type: String,
                optional: true,
            },
            'media_url': {
                type: String,
                optional: true,
            },
            'comments_count': {
                type: Number
            },
            'like_count': {
                type: Number
            },
            'engagement_rate': {
                type: Number,
                decimal: true,
                optional: true,
            }
        }).validate({
            id: media.id,
            username: media.username,
            permalink: media.permalink,
            timestamp: media.timestamp,
            media_type: media.media_type,
            caption: media.caption,
            media_url: media.media_url,
            comments_count: media.comments_count,
            like_count: media.like_count,
            engagement_rate: media.engagement
        })
        IG_Media.upsert({username: media.username, id: media.id}, {
            $set: {
                id: media.id,
                username: media.username,
                permalink: media.permalink,
                timestamp: media.timestamp,
                media_type: media.media_type,
                caption: media.caption,
                media_url: media.media_url,
                comments_count: media.comments_count,
                like_count: media.like_count,
                engagement_rate: media.engagement
            }
        })

        console.log('Added media for ' +media.username)
    }
})
