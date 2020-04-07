import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'

// Import collection
import {Lists} from '../lists'
import {IG_Users} from '../../ig_users/ig_users'

// Meteor Publisher
Meteor.publish('lists', function () {
	return Lists.find({owner:Meteor.userId()}, {sort: {timestamp: -1}})
})

Meteor.publish('creator_list', function (_id) {
	this.autorun(function (computation) {

		const list = Lists.find({ _id}).fetch()
		let creatorIds
	  	if(list.length > 0) { creatorIds = list[0].creators.map(function (c) { return c._id; })}

		return [
			Lists.find({ _id, owner:Meteor.userId()}, {sort: {timestamp: -1}}),
			IG_Users.find({ _id : { $in : creatorIds }})
		]
	});
})
