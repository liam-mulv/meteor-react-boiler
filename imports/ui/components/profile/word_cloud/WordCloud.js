import React, {useEffect, useState} from 'react'
// import TagCloud from 'react-tag-cloud';
import { TagCloud } from 'react-tagcloud'
import {ProfileComponentWrapper} from '../ProfileComponentWrapper.sc'
import HorizontalBarChartCollection from '../../common/charts/horizontal_bar_chart/HorizontalBarChartCollection'
import { Tag} from './WordCloud.sc'

const data = [
  { value: '#australianboutique', count: 38, opacity: 1, weight: 700 },
  { value: '#womensfashion', count: 30, opacity: 0.8, weight: 700 },
  { value: '#styleinspo', count: 28, opacity: 0.8, weight: 700 },
  { value: '#ootd', count: 25, opacity: 0.7 },
  { value: '#streetstyle', count: 33, opacity: 0.9, weight: 700 },
  { value: '#cosy', count: 18, opacity: 0.5 },
  { value: '#shopping', count: 20, opacity: 0.5 },
  { value: '#weekendnails', count: 25, opacity: 0.6 },
  { value: '#flatlays', count: 33, opacity: 0.9, weight: 700 },
  { value: '#magurl', count: 18, opacity: 0.5 },
  { value: '#luvflatlays', count: 20, opacity: 0.5 },
  { value: '#peachesandcream', count: 20, opacity: 0.5 },
  { value: '#fashion', count: 20, opacity: 0.5 },

]

const customRenderer = (tag, size, color) => {
  return (
    <Tag key={tag.value} size={size} opacity={tag.opacity} className={`tag-${size}`}>
      {tag.value}
    </Tag>
  )
}
 

function WordCloud (props) {
	return (
		<ProfileComponentWrapper>   
      {!props.isLoading  ?
        <React.Fragment>
          {typeof props.user.popular_tags !== "undefined" && props.user.popular_tags.length > 0 &&
            <React.Fragment>
              <h1>Top Hashtags</h1>
              <HorizontalBarChartCollection charts={props.user.popular_tags ? props.user.popular_tags.slice(0,10) : []}/>
{/*              <TagCloud
                renderer={customRenderer}
                minSize={12}
                maxSize={35}
                tags={props.user.popular_tags ? props.user.popular_tags.slice(0,10) : []}
                onClick={tag => alert(`'${tag.value}' was selected!`)}
                style={{display:'block', textAlign:'center', padding: '40px 10px 20px'}}
              />*/}
            </React.Fragment>
          }
        </React.Fragment>
        :
          <div>Loading...</div>
        }

	    </ProfileComponentWrapper>
	)
}
export default WordCloud