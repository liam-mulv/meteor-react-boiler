import React, {useEffect, useState} from 'react'

const axios = require('axios').default;


import {FivePannelFlexInner} from '../../layout/FlexLayouts.sc'


	// const [dataIsLoading, setDataIsLoading] = useState(true)
	// const [loading, setLoading] = useState(true)
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setLoading(false)
	// 		setDataIsLoading(false)
	// 	}, 1000)	
	// }, [loading])


const COLLAB_IG_ID = '17841431073896104'
const OTHER_IG_ID = "17841401482248518"
const COLLAB_IG_ACCESS_TOKEN = "EAAHPvSIFDAMBAHONwxtspyolLJ3ahFfSbd7jrYTfsQf5ABgaQmoPv8KETu7YZBS5282FuXD8ypFX8CvPfN9wB04kZCcosH3nDA6qOQwMZA8f5PLp1LnOitoCSNjsdFq9OsngXXTZBltPlOnmkrgAZCwqIAXJsebpzndKINDMeDINgFwPlVV4Y6yuw7shuoKKiSS6FTGdzrgZDZD"

function FacebookApiTest() {

	const [fb_page_ig_business_lookup_is_active, set_fb_page_ig_business_lookup_is_active ] = useState(false)
	function testFbPageBusinessLookup(){
		axios.get("https://graph.facebook.com/v6.0/104569261157254?fields=instagram_business_account&access_token="+COLLAB_IG_ACCESS_TOKEN)
		  .then(function (response) {
		    // handle success
		    set_fb_page_ig_business_lookup_is_active(true)
		    console.log(response);
		  })
		  .catch(function (error) {
		    // handle error
		   	set_fb_page_ig_business_lookup_is_active(false)
		    console.log(error);
		  })
		  .finally(function () {
		    // always executed
		  })
	}

	const [fetch_ig_business_media_is_active, set_fetch_ig_business_media_is_active ] = useState(false)
	function testGetBusinessIgMedia(){
		axios.get(`https://graph.facebook.com/v6.0/`+COLLAB_IG_ID+`/media?&access_token=`+COLLAB_IG_ACCESS_TOKEN)
		  .then(function (response) {
		    // handle success
		    set_fetch_ig_business_media_is_active(true)
		    console.log(response);
		  })
		  .catch(function (error) {
		    // handle error
		   	set_fetch_ig_business_media_is_active(false)
		    console.log(error);
		  })
		  .finally(function () {
		    // always executed
		  })
	}

	const [fetch_ig_business_is_active, set_fetch_ig_business_is_active] = useState(false)
	function testBusinessDiscovery(){
		axios.get(`https://graph.facebook.com/v6.0/`+COLLAB_IG_ID+`?fields=business_discovery.username(dearcherie){id,ig_id,username,name,profile_picture_url,biography,followers_count,follows_count,media_count,website}&access_token=`+COLLAB_IG_ACCESS_TOKEN)
		  .then(function (response) {
		    // handle success
		    set_fetch_ig_business_is_active(true)
		    console.log(response);
		  })
		  .catch(function (error) {
		    // handle error
		   	set_fetch_ig_business_is_active(false)
		    console.log(error);
		  })
		  .finally(function () {
		    // always executed
		  })
	}


	const [fetch_ig_business_insight_is_active, set_fetch_ig_business_insight_is_active] = useState(false)
	function testBusinessInsights(){
		axios.get(`https://graph.facebook.com/v6.0/`+COLLAB_IG_ID+`/insights?metric=impressions,reach,profile_views&period=day&access_token=`+COLLAB_IG_ACCESS_TOKEN)
		  .then(function (response) {
		    // handle success
		    set_fetch_ig_business_insight_is_active(true)
		    console.log(response);
		  })
		  .catch(function (error) {
		    // handle error
		   	set_fetch_ig_business_insight_is_active(false)
		    console.log(error);
		  })
		  .finally(function () {
		    // always executed
		  })
	}



	return (
		<div>
			<h1 style={{padding:'20px'}}>Facebook API Testing</h1>
			<FivePannelFlexInner>
				<div>
					<p>
						/GET - IG Business Account<br/>
						Params: (FacebookPageId, AccessToken)<br/>
						Returns: Business ID
					</p>
					<p>Status: {fb_page_ig_business_lookup_is_active ? 'working' : 'broken'}</p>
					<button onClick={() => testFbPageBusinessLookup()}>Test Endpoint</button>
				</div>
				<div>
					<p>
						/GET - IG Business Accounts Media<br/>
						Params: (IgBusinessID, AccessToken)<br/>
						Returns: Media Array
					</p>
					<p>Status: {fetch_ig_business_media_is_active ? 'working' : 'broken'}</p>
					<button onClick={() => testGetBusinessIgMedia()}>Test Endpoint</button>
				</div>
				<div>
					<p>
						/GET - Search IG Business Account <br/>
						Params: (IgUsername, AccessToken)<br/>
						Returns: IG Business Account Object
					</p>
					<p>Status: {fetch_ig_business_is_active ? 'working' : 'broken'}</p>
					<button onClick={() => testBusinessDiscovery()}>Test Endpoint</button>
				</div>
				<div>
					<p>
						/GET - Authenticated IG Account Insights<br/>
						Params: (AuthenticatedIgId, Metrics, AccessToken)<br/>
						Returns: IG Business Account Insight Metrics
					</p>
					<p>Status: {fetch_ig_business_insight_is_active ? 'working' : 'broken'}</p>
					<button onClick={() => testBusinessInsights()}>Test Endpoint</button>
				</div>
			</FivePannelFlexInner>
		</div>
	)
}

export default FacebookApiTest