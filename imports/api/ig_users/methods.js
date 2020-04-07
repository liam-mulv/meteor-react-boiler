import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'

//FB REST API
import FB_API from '../fb_api/RestService'

// Collections
import {IG_Users} from './ig_users'
// Helpers
import {dateOneDayAgo, dateTwoDaysAgo, saveAndFormatIgMedia} from '../helpers/helpers'
import {updateInstagramProfile} from '../helpers/profileHelper'

Meteor.methods({
    async 'ig_users.search'(username) {
        let user = IG_Users.findOne({username})
        /// Turn into a function
        let authenticated_user = Meteor.user()
        let accessToken = authenticated_user.profile.fbAuth.access_token



        const MockMentionedData = [
            {
                collabTitle: 'facebook',
                id: '17953971745317202',
                username: 'emrata',
                caption: 'Sebo took this of me this morning 🤍',
                comments_count: 2180,
                engagement_rate: 2.9,
                regular_engagement_rate: 3.6,
                like_count: 739000,
                media_type: 'IMAGE',
                media_url: 'https://scontent.xx.fbcdn.net/v/t51.2885-15/90958911_2235285896780235_5870769086061358313_n.jpg?_nc_cat=1&_nc_sid=8ae9d6&_nc_ohc=4dvpM-qI2L0AX_42yfF&_nc_ht=scontent.xx&oh=2e804ee48298ab09b0160dcd5d6112b1&oe=5EA5999D',
                permalink: 'https://www.instagram.com/emrata',
                timestamp: '2020-04-01T07:25:00+0000',
                profile_picture: 'https://scontent-syd2-1.xx.fbcdn.net/v/t51.2885-15/61675046_505439033528071_685052794155040768_n.jpg?_nc_cat=1&_nc_sid=86c713&_nc_ohc=gZt19BLj_agAX9PNrZx&_nc_ht=scontent-syd2-1.xx&oh=765773cf6ba87648f47499f5c079ce95&oe=5EAE9B4F',
            }
        ]

        const MockTimeseriesData = {
            collabTitle: 'facebook', 
            ts: [
                {label: '12/03', followers: 0, engagement: 0, revenue: 0, image: null},
                {label: '12/03', followers: 5230, engagement: 739000, revenue: 0, image: 'https://scontent-syd2-1.xx.fbcdn.net/v/t51.2885-15/61675046_505439033528071_685052794155040768_n.jpg?_nc_cat=1&_nc_sid=86c713&_nc_ohc=gZt19BLj_agAX9PNrZx&_nc_ht=scontent-syd2-1.xx&oh=765773cf6ba87648f47499f5c079ce95&oe=5EAE9B4F'}
            ]
        }

        const mentioned_media = MockMentionedData[0]
        const timeseries_data = MockTimeseriesData

        // Update collab collections
        Meteor.call('collab_creators.updatePostEngagement', 'facebook', 'emrata', mentioned_media.engagement_rate)
        Meteor.call('collab_creators.updatePostedStatus', 'facebook', 'emrata')
        Meteor.call('collab_media.upsert', mentioned_media)
        Meteor.call('collab_timeseries.upsert', timeseries_data)

    

        // If user not in DB OR user has never been updated OR user was last updated more than two days ago
        if(!user || user && typeof user.updated_at === 'undefined' || user && user.updated_at < dateOneDayAgo() ) {
            try {
                const response = await FB_API.getInstagramBusinessAccountAndMedia(username, accessToken)
                await updateInstagramProfile(response)
                await saveAndFormatIgMedia(response)
            } catch(error){
                console.log('Error in IG_USERS.SEARCH')

                console.log(error)
                // console.log(error)
                return {err:  true, message: 'User could not be updated'}
            }
        } else {
            console.log('User has been updated within the last 48 hours')
            return {err:  false, message: 'User has been successfully added and updated'}
        }
    },
    async 'ig_users.addFromInstagram'(username) {
        /// Turn into a function
        let authenticated_user = await  Meteor.user()
        let accessToken = await authenticated_user.profile.fbAuth.access_token
        const response = await FB_API.getInstagramBusinessAccountAndMedia(username, accessToken)
        const formatedResponse = await updateInstagramProfile(response, true)
        let user = IG_Users.findOne({
            username: formatedResponse.username
        })
        return user
    },
    async 'ig_users.getMany'(userIds){
        return IG_Users.find({"_id" : {"$in" : userIds}}).fetch() 
    },
    async 'ig_users.autocomplete'(search) {
        let regex = new RegExp( search, 'i' );
        let suggestions = await IG_Users.find({username: regex}, { limit: 5, sort: { follower_count: -1 }}).fetch()
        return suggestions
    },
    'ig_users.update'(ig){
        IG_Users.upsert({username: ig.username}, {
            $set: ig
        })
    },
    'ig_users.setUpdatedAt'(username){
        IG_Users.upsert({username}, {
            $set: {
                updated_at: new Date().getTime()      
            }
        })
    },
    'ig_users.count'() {
        return IG_Users.find({}).count()
    },
    'ig_users.upsert'(IG) {
        if (!IG.username) {
            throw new Meteor.Error('Error: Missing IG username')
        }

        new SimpleSchema({
            // Basic
            'username': {
                type: String
            },
            'full_name': {
                type: String
            },
            'first_name': {
                type: String
            },
            'last_name': {
                type: String
            },
            'description': {
                type: String
            },
            // Emails
            'business_email': {
                type: String
            },
            'emails': {
                type: Array
            },
            'emails.$': {
                type: String
            },
            // Locations
            'locations': {
                type: Object
            },
            'locations.primary_location': {
                type: Object
            },
            'locations.primary_location.country': {
                type: String
            },
           'locations.primary_location.state': {
                type: String
            },
            'locations.primary_location.city': {
                type: String
            },               
           'locations.primary_location.location_readable': {
                type: String
            },
            'locations.secondary_location': {
                type: Object,
                optional: true,
            },
            'locations.secondary_location.country': {
                type: String,
                optional: true,
            },
           'locations.secondary_location.state': {
                type: String,
                optional: true,
            },
           'locations.secondary_location.location_readable': {
                type: String,
                optional: true,
            },
            // Links
            'profile_url': {
                type: String,
            },
            'website_url': {
                type: String,
            },
            // Categories
            'categories': {
                type: Array
            },
            'categories.$': {
                type: String
            },
            // Stats
            'engagement_rate': {
                type: Number
            },
            'follower_count': {
                type: Number
            },
            'following_count': {
                type: Number
            },
            'post_count': {
                type: Number,
                optional: true,
            },
            'engagement_rate_readable': {
                type: String,
                optional: true,
            },
            'post_count_readable': {
                type: String,
                optional: true,
            },
            'follower_count_readable': {
                type: String,
                optional: true,
            },
            'following_count_readable': {
                type: String,
                optional: true,
            },
            'post_frequency': {
                type: Number,
                optional: true,
            },
            'followers_to_following_ratio': {
                type: Number,
                optional: true,
            },
            'avg_likes_per_post': {
                type: Number,
                optional: true,
            },
            'avg_comments_per_post': {
                type: Number,
                optional: true,
            },
            'avg_views_per_video': {
                type: Number,
                optional: true,
            },
            'estimated_cost_range_per_post': {
                type: Array,
                optional: true,
            },
            'estimated_cost_range_per_post.$': {
                type: String,
                optional: true,
            },
            'updated_at': {
                type: Date,
                optional: true,
            }
        }).validate({
            username: IG.username,
            name: IG.name,
            description: IG.description,
            locations: IG.locations,
            categories: IG.categories,
            engagement_rate: IG.engagement_rate,
            follower_count: IG.follower_count,
            following_count: IG.following_count,
            post_count: IG.post_count,
            engagement_rate_readable: IG.engagement_rate_readable,
            post_count_readable: IG.post_count_readable,
            follower_count_readable: IG.follower_count_readable,
            post_frequency: IG.post_frequency,
            followers_to_following_ratio: IG.followers_to_following_ratio,
            avg_likes_per_post: IG.avg_likes_per_post,
            avg_comments_per_post: IG.avg_comments_per_post,
            estimated_cost_range_per_post: IG.estimated_cost_range_per_post,       
        })

        IG_Users.upsert({username: IG.username}, {
            $set: {
                username: IG.username,
                name: IG.name,
                description: IG.description,
                locations: IG.locations,
                categories: IG.categories,
                engagement_rate: IG.engagement_rate,
                follower_count: IG.follower_count,
                following_count: IG.following_count,
                post_count: IG.post_count,
                engagement_rate_readable: IG.engagement_rate_readable,
                post_count_readable: IG.post_count_readable,
                follower_count_readable: IG.follower_count_readable,
                post_frequency: IG.post_frequency,
                followers_to_following_ratio: IG.followers_to_following_ratio,
                avg_likes_per_post: IG.avg_likes_per_post,
                avg_comments_per_post: IG.avg_comments_per_post,
                estimated_cost_range_per_post: IG.estimated_cost_range_per_post,       
            }
        })
    }
})
