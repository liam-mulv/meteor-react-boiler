import _ from 'lodash'
import {Meteor} from 'meteor/meteor'
import moment from 'moment'

function findHashtags(searchText) {
    var regexp = /\B\#\w\w+\b/g
    if(typeof searchText !== 'undefined') {
	    result = searchText.match(regexp);
	    if (result) {
	        return result
	    } else {
	        return false;
	    }
    }
}

function getDynamicPercent (input, arr, extra, isHashtag) {
	let max = Math.max(...arr)

	if(extra) {
		max = max + extra
	}

	let min = Math.min(...arr)
	if(min === input && isHashtag) {
		min = min - 1
	}

	return ((input - min) * 100) / (max - min)

}



// Parse Facebook IG User data for DB 
async function updateInstagramProfile(IG, noTimestamp) {

	// Calculate average of array items
	const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length

	// Extract object values
	let array_of_likes = IG.data.media.data.map(m => m.like_count)
	let array_of_comments = IG.data.media.data.map(m => m.comments_count)

	// Averages
	const avg_likes = average(array_of_likes)
	const avg_comments = average(array_of_comments)
	const avg_engagement = (avg_likes + avg_comments) / IG.data.followers_count * 100

	// Last 14 days check
	const start=moment({hour: 0, minute: 0, seconds: 0})

	const now = moment().format('YYYY-MM-DD HH:mm:ss')

	const today = moment(start)
	const yesterday = moment(start).subtract(1,'d').format('YYYY-MM-DD HH:mm:ss')
	const twoDaysAgo = moment(start).subtract(2,'d').format('YYYY-MM-DD HH:mm:ss')
	const threeDaysAgo = moment(start).subtract(3,'d').format('YYYY-MM-DD HH:mm:ss')
	const fourDaysAgo = moment(start).subtract(4,'d').format('YYYY-MM-DD HH:mm:ss')
	const fiveDaysAgo = moment(start).subtract(5,'d').format('YYYY-MM-DD HH:mm:ss')
	const sixDaysAgo = moment(start).subtract(6,'d').format('YYYY-MM-DD HH:mm:ss')
	const sevenDaysAgo = moment(start).subtract(7,'d').format('YYYY-MM-DD HH:mm:ss')
	const eightDaysAgo = moment(start).subtract(8,'d').format('YYYY-MM-DD HH:mm:ss')
	const nineDaysAgo = moment(start).subtract(9,'d').format('YYYY-MM-DD HH:mm:ss')
	const tenDaysAgo = moment(start).subtract(10,'d').format('YYYY-MM-DD HH:mm:ss')
	const elevenDaysAgo = moment(start).subtract(11,'d').format('YYYY-MM-DD HH:mm:ss')
	const twelveDaysAgo = moment(start).subtract(12,'d').format('YYYY-MM-DD HH:mm:ss')
	const thirteenDaysAgo = moment(start).subtract(13,'d').format('YYYY-MM-DD HH:mm:ss')
	const fourteenDaysAgo = moment(start).subtract(14,'d').format('YYYY-MM-DD HH:mm:ss')

	let day = [
		today,
		yesterday,
		twoDaysAgo,
		threeDaysAgo,
		fourDaysAgo,
		fiveDaysAgo,
		sixDaysAgo,
		sevenDaysAgo,
		eightDaysAgo,
		nineDaysAgo,
		tenDaysAgo,
		elevenDaysAgo,
		twelveDaysAgo,
		thirteenDaysAgo,
		fourteenDaysAgo,
	]

	let postingHabits = [
		{label: '', count: 0, countBarPercent: '', engagements: [], engagement:'', engBarPercent: ''},
		{label: '', count: 0, countBarPercent: '', engagements: [], engagement:'', engBarPercent: '' },
		{label: '', count: 0, countBarPercent: '', engagements: [], engagement:'', engBarPercent: '' },
		{label: '', count: 0, countBarPercent: '', engagements: [], engagement:'', engBarPercent: '' },
		{label: '', count: 0, countBarPercent: '', engagements: [], engagement:'', engBarPercent: '' },
		{label: '', count: 0, countBarPercent: '', engagements: [], engagement:'', engBarPercent: '' },
		{label: '', count: 0, countBarPercent: '', engagements: [], engagement:'', engBarPercent: '' },
		{label: '', count: 0, countBarPercent: '', engagements: [], engagement:'', engBarPercent: '' },
		{label: '', count: 0, countBarPercent: '', engagements: [], engagement:'', engBarPercent: '' },
		{label: '', count: 0, countBarPercent: '', engagements: [], engagement:'', engBarPercent: '' },
		{label: '', count: 0, countBarPercent: '', engagements: [], engagement:'', engBarPercent: '' },
		{label: '', count: 0, countBarPercent: '', engagements: [], engagement:'', engBarPercent: '' },
		{label: '', count: 0, countBarPercent: '', engagements: [], engagement:'', engBarPercent: '' },
		{label: '', count: 0, countBarPercent: '', engagements: [], engagement:'', engBarPercent: '' },
	]

	// Get popular hashtags
	popular_tags = []
	IG.data.media.data.map((m, i) => {
		// Get hashtags
		let newTags = findHashtags(m.caption)
		if(newTags) {
			for(const newTag of newTags) {
				let found = false
				for(var i = 0; i < popular_tags.length; i++) {
				    if (popular_tags[i].value == newTag) {
				    	popular_tags[i].count = popular_tags[i].count + 1
				    	found = true
				    	break
				    }
				}
				if(!found){ popular_tags.push({value:newTag, count:1}) }
			}		
		}
		const postTime = moment(m.timestamp).format('YYYY-MM-DD HH:mm:ss')

		if (moment(postTime).isBetween(yesterday, today)) {
			postingHabits[0].count = postingHabits[0].count + 1
			postingHabits[0].date = moment(yesterday).format('MMM DD')
			postingHabits[0].label = moment(yesterday).format('dddd')
			let engagement = (m.like_count + m.comments_count) / IG.data.followers_count * 100
			postingHabits[0].engagements.push(isNaN(engagement) ? 0 : engagement)
		} else {
			postingHabits[0].date = moment(yesterday).format('MMM DD')
			postingHabits[0].label = moment(yesterday).format('dddd')
		}
		if (moment(postTime).isBetween(twoDaysAgo, yesterday)) {
			postingHabits[1].count = postingHabits[1].count + 1
			postingHabits[1].date = moment(twoDaysAgo).format('MMM DD')
			postingHabits[1].label = moment(twoDaysAgo).format('dddd')
			let engagement = (m.like_count + m.comments_count) / IG.data.followers_count * 100
			postingHabits[1].engagements.push(isNaN(engagement) ? 0 : engagement)
		} else {
			postingHabits[1].date = moment(twoDaysAgo).format('MMM DD')
			postingHabits[1].label = moment(twoDaysAgo).format('dddd')
		}
		if (moment(postTime).isBetween(threeDaysAgo, twoDaysAgo)) {
			postingHabits[2].count = postingHabits[2].count + 1
			postingHabits[2].date = moment(threeDaysAgo).format('MMM DD')
			postingHabits[2].label = moment(threeDaysAgo).format('dddd')
			let engagement = (m.like_count + m.comments_count) / IG.data.followers_count * 100
			postingHabits[2].engagements.push(isNaN(engagement) ? 0 : engagement)
		} else {
			postingHabits[2].date = moment(threeDaysAgo).format('MMM DD')
			postingHabits[2].label = moment(threeDaysAgo).format('dddd')
		}
		if (moment(postTime).isBetween(fourDaysAgo, threeDaysAgo)) {
			postingHabits[3].count = postingHabits[3].count + 1
			postingHabits[3].date = moment(fourDaysAgo).format('MMM DD')
			postingHabits[3].label = moment(fourDaysAgo).format('dddd')
			let engagement = (m.like_count + m.comments_count) / IG.data.followers_count * 100
			postingHabits[3].engagements.push(isNaN(engagement) ? 0 : engagement)
		} else {
			postingHabits[3].date = moment(fourDaysAgo).format('MMM DD')
			postingHabits[3].label = moment(fourDaysAgo).format('dddd')
		}
		if (moment(postTime).isBetween(fiveDaysAgo, fourDaysAgo)) {
			postingHabits[4].count = postingHabits[4].count + 1
			postingHabits[4].date = moment(fiveDaysAgo).format('MMM DD')
			postingHabits[4].label = moment(fiveDaysAgo).format('dddd')
			let engagement = (m.like_count + m.comments_count) / IG.data.followers_count * 100
			postingHabits[4].engagements.push(isNaN(engagement) ? 0 : engagement)
		} else {
			postingHabits[4].date = moment(fiveDaysAgo).format('MMM DD')
			postingHabits[4].label = moment(fiveDaysAgo).format('dddd')
		}
		if (moment(postTime).isBetween(sixDaysAgo, fiveDaysAgo)) {
			postingHabits[5].count = postingHabits[5].count + 1
			postingHabits[5].date = moment(sixDaysAgo).format('MMM DD')
			postingHabits[5].label = moment(sixDaysAgo).format('dddd')
			let engagement = (m.like_count + m.comments_count) / IG.data.followers_count * 100
			postingHabits[5].engagements.push(isNaN(engagement) ? 0 : engagement)
		} else {
			postingHabits[5].date = moment(sixDaysAgo).format('MMM DD')
			postingHabits[5].label = moment(sixDaysAgo).format('dddd')
		}
		if (moment(postTime).isBetween(sevenDaysAgo, sixDaysAgo)) {
			postingHabits[6].count = postingHabits[6].count + 1
			postingHabits[6].date = moment(sevenDaysAgo).format('MMM DD')
 			postingHabits[6].label = moment(sevenDaysAgo).format('dddd')
			let engagement = (m.like_count + m.comments_count) / IG.data.followers_count * 100
			postingHabits[6].engagements.push(isNaN(engagement) ? 0 : engagement)
		} else {
			postingHabits[6].date = moment(sevenDaysAgo).format('MMM DD')
			postingHabits[6].label = moment(sevenDaysAgo).format('dddd')
		}
		if (moment(postTime).isBetween(eightDaysAgo, sevenDaysAgo)) {
			postingHabits[7].count = postingHabits[7].count + 1
			postingHabits[7].date = moment(eightDaysAgo).format('MMM DD')
			postingHabits[7].label = moment(eightDaysAgo).format('dddd')
			let engagement = (m.like_count + m.comments_count) / IG.data.followers_count * 100
			postingHabits[7].engagements.push(isNaN(engagement) ? 0 : engagement)
		} else {
			postingHabits[7].date = moment(eightDaysAgo).format('MMM DD')
			postingHabits[7].label = moment(eightDaysAgo).format('dddd')
		}
		if (moment(postTime).isBetween(nineDaysAgo, eightDaysAgo)) {
			postingHabits[8].count = postingHabits[8].count + 1
			postingHabits[8].date = moment(nineDaysAgo).format('MMM DD')
			postingHabits[8].label = moment(nineDaysAgo).format('dddd')
			let engagement = (m.like_count + m.comments_count) / IG.data.followers_count * 100
			postingHabits[8].engagements.push(isNaN(engagement) ? 0 : engagement)
		} else {
			postingHabits[8].date = moment(nineDaysAgo).format('MMM DD')
			postingHabits[8].label = moment(nineDaysAgo).format('dddd')
		}
		if (moment(postTime).isBetween(tenDaysAgo, nineDaysAgo)) {
			postingHabits[9].count = postingHabits[9].count + 1
			postingHabits[9].date = moment(tenDaysAgo).format('MMM DD')
			postingHabits[9].label = moment(tenDaysAgo).format('dddd')
			let engagement = (m.like_count + m.comments_count) / IG.data.followers_count * 100
			postingHabits[9].engagements.push(isNaN(engagement) ? 0 : engagement)
		} else {
			postingHabits[9].date = moment(tenDaysAgo).format('MMM DD')
			postingHabits[9].label = moment(tenDaysAgo).format('dddd')
		}
		if (moment(postTime).isBetween(elevenDaysAgo, tenDaysAgo)) {
			postingHabits[10].count = postingHabits[10].count + 1
			postingHabits[10].date = moment(elevenDaysAgo).format('MMM DD')
			postingHabits[10].label = moment(elevenDaysAgo).format('dddd')
			let engagement = (m.like_count + m.comments_count) / IG.data.followers_count * 100
			postingHabits[10].engagements.push(isNaN(engagement) ? 0 : engagement)
		} else {
			postingHabits[10].date = moment(elevenDaysAgo).format('MMM DD')
			postingHabits[10].label = moment(elevenDaysAgo).format('dddd')	
		}
		if (moment(postTime).isBetween(twelveDaysAgo, elevenDaysAgo)) {
			postingHabits[11].count = postingHabits[11].count + 1
			postingHabits[11].date = moment(twelveDaysAgo).format('MMM DD')
			postingHabits[11].label = moment(twelveDaysAgo).format('dddd')
			let engagement = (m.like_count + m.comments_count) / IG.data.followers_count * 100
			postingHabits[11].engagements.push(isNaN(engagement) ? 0 : engagement)
		} else {
			postingHabits[11].date = moment(twelveDaysAgo).format('MMM DD')
			postingHabits[11].label = moment(twelveDaysAgo).format('dddd')
		}
		if (moment(postTime).isBetween(thirteenDaysAgo, twelveDaysAgo)) {
			postingHabits[12].count = postingHabits[12].count + 1
			postingHabits[12].date = moment(thirteenDaysAgo).format('MMM DD')
			postingHabits[12].label = moment(thirteenDaysAgo).format('dddd')
			let engagement = (m.like_count + m.comments_count) / IG.data.followers_count * 100
			postingHabits[12].engagements.push(isNaN(engagement) ? 0 : engagement)
		} else {
			postingHabits[12].date = moment(thirteenDaysAgo).format('MMM DD')
			postingHabits[12].label = moment(thirteenDaysAgo).format('dddd')
		}
		if (moment(postTime).isBetween(fourteenDaysAgo, thirteenDaysAgo)) {
			postingHabits[13].count = postingHabits[13].count + 1
			postingHabits[13].date = moment(fourteenDaysAgo).format('MMM DD')
			postingHabits[13].label = moment(fourteenDaysAgo).format('dddd')
			let engagement = (m.like_count + m.comments_count) / IG.data.followers_count * 100
			postingHabits[13].engagements.push(isNaN(engagement) ? 0 : engagement)
		} else {
			postingHabits[13].date = moment(fourteenDaysAgo).format('MMM DD')
			postingHabits[13].label = moment(fourteenDaysAgo).format('dddd')
		}
	})

	let counts = []
	let engagements = []
	postingHabits.map((habbit, index) => {
		// Calculate daily engagement
		let arr = postingHabits[index].engagements
		let avg_eng = arr.reduce((a,b) => a + b, 0) / arr.length
		postingHabits[index].engagement = isNaN(avg_eng) ? 0 : avg_eng
		// Push engagements and counts into arrays
		engagements.push(postingHabits[index].engagement)
		counts.push(postingHabits[index].count)
	})


	// Calculate Posting Habits bar percents
	postingHabits.map((habbit, index) => {
		postingHabits[index].engBarPercent = getDynamicPercent(postingHabits[index].engagement, engagements)
		postingHabits[index].countBarPercent = getDynamicPercent(postingHabits[index].count, counts, 1)
	})


	// Calculate popular Tags bar percents
	let popular_tags_counts = []
	popular_tags.map((tag, index) => {
		popular_tags_counts.push(tag.count)
	})
	popular_tags.map((tag, index) => {
		popular_tags[index].percent = getDynamicPercent(tag.count, popular_tags_counts, 1, true)
	})

	let post_frequency = counts.reduce((a,b) => a + b) / 2


	popular_tags = _.orderBy(popular_tags, ['count'],['desc'])

	// Ratios
	const comment_to_like_ratio = '1 : ' + (avg_likes / avg_comments).toFixed()

	// Find Email
	const re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
	var extractedEmail=re.exec(IG.data.biography);

	let email
	if(extractedEmail){
		email = extractedEmail[0]
	}

	const FormattedIgUser = {
        images: IG.data.profile_picture_url,
        username: IG.data.username,
        full_name: IG.data.name,
        description: IG.data.biography,
        website_url: IG.data.website,
        profile_url: `https://www.instagram.com/${IG.data.username}`,
        follower_count: IG.data.followers_count,
        following_count: IG.data.follows_count,
        media_count: IG.data.media_count,
        engagement_rate: avg_engagement,
        avg_likes_per_post: avg_likes,
        avg_comments_per_post: avg_comments,
		emails: email ? [email] : '',
		comment_to_like_ratio,
		popular_tags,
		post_frequency,
		posting_habits: postingHabits,
	}

	if(!noTimestamp) {
		FormattedIgUser.updated_at = new Date().getTime()
	}

    Meteor.call('ig_users.update', FormattedIgUser)
    return FormattedIgUser
}

module.exports = {
	updateInstagramProfile,
}