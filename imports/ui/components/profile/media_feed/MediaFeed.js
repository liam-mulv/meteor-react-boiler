import React, {useEffect, useState} from 'react'

// Styled Components
import {PhotoFeedContainer, FeedRow, FeedColumn, ColumnCard} from './MediaFeed.sc'

// Helpers
import {useInstagramMediaFeed, useWindowSize} from '../../../helpers/helpers'

// NPM
import Masonry from 'react-masonry-css'


const breakpointColumnsObj = {
	default: 4,
	1800: 4,
	1500: 3,
	1350: 2,
	1150: 1,
}
 


function MediaFeed(props) {

	// Scroll hook

	return (
		<PhotoFeedContainer>
			{!props.isLoading && props.ig_media ?
				<FeedRow>
					<Masonry
					  breakpointCols={breakpointColumnsObj}
					  className="my-masonry-grid"
					  columnClassName="my-masonry-grid_column">
						{props.ig_media.map((media, index) =>{
							return (
								<React.Fragment>
									{media.media_url &&
										<ColumnCard onClick={() => props.setActiveMedia(index)}>
											{media.media_type === 'VIDEO' ?
												<video class="_e2l2kr" autoplay="" crossorigin="anonymous" loop="true" playsinline="" muted preload="metadata">
													<source src={media.media_url} type="video/mp4"/>
												</video>
												:
												<img src={media.media_url}/>
											}
										</ColumnCard>
									}
								</React.Fragment>
							)
						})}
					</Masonry>
				</FeedRow>
				:
				<FeedRow>
					Loading...
				</FeedRow>
			}
		</PhotoFeedContainer>
	)
}

export default MediaFeed


