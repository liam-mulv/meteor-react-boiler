import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'

export const IG_Users = new Mongo.Collection('IG')

//Index IG User Collection 
if(Meteor.isServer) {
	IG_Users._ensureIndex( { username: 1, full_name: 1, description: 1 } );
}
