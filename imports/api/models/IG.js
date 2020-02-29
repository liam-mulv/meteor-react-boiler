import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'
import SimpleSchema from 'simpl-schema'

export const IG_Collection = new Mongo.Collection('IG')

if (Meteor.isServer) {
    Meteor.publish('IGPub', function () {
        return IG_Collection.find({}, { sort: { follower_count: -1 }, limit: 10 })
    })
}



if (Meteor.isServer) {

    Meteor.methods({
        'IG_collection_count'() {
            let count = IG_Collection.find({}).count()
            return count
        },
        'IG.upsert'(IG) {
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
                },
                'engagement_rate_readable': {
                    type: String
                },
                'post_count_readable': {
                    type: String,
                },
                'follower_count_readable': {
                    type: String
                },
                'post_frequency': {
                    type: Number
                },
                'followers_to_following_ratio': {
                    type: Number,
                },
                'avg_likes_per_post': {
                    type: Number
                },
                'avg_comments_per_post': {
                    type: Number
                },
                'avg_views_per_video': {
                    type: Number
                },
                'estimated_cost_range_per_post': {
                    type: Array
                },
                'estimated_cost_range_per_post.$': {
                    type: String
                },
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

            IG_Collection.upsert({username: IG.username}, {
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
}

