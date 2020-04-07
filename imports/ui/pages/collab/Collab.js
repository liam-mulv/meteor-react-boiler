import React, {useEffect, useState} from 'react'

// React Router Hooks
import {useParams, useHistory} from 'react-router-dom'

// Components
import Overview from '../../components/collab/overview/Overview'
import TimelineChart from '../../components/collab/timeline_chart/TimelineChart'
import PostResults from '../../components/collab/post_results/PostResults'
import PerformanceTable from '../../components/collab/creator_performance_table/CreatorPerformanceTable'
import CreatorPostedStatus from '../../components/collab/creator_posted_status/CreatorPostedStatus'
import CollabHeader from '../../components/collab/header/Header'
import TrackingRules from '../../components/collab/tracking_rules/TrackingRules'
import CollabTable from '../../components/react_tables/collab_table/CollabTable'


// Styled Components
import {CollabWrapper, CollabContainer, CollabContentLeft, CollabContentRight} from './Collab.sc'
import {CollabFlex} from '../../layout/FlexLayouts.sc'

// Hooks
import {useCollab, useCollabCreators, useCollabMedia, useCollabTimeseries} from '../../helpers/helpers'


function CollabPage() {

	// Page params
	const {collabId} = useParams()

	// Subscription hooks
	const {collab, isLoadingCollab} = useCollab(collabId)
	const {collabCreators, isLoadingCreators} = useCollabCreators(collabId)
	const {collabTimeseries, isLoadingCollabTimeseries} = useCollabTimeseries()
	// const {ig_media, isLoadingMedia} = useInstagramMediaFeed('sarahhashcroft')
	const {collabMedia, isLoadingCollabMedia} = useCollabMedia()
	// Set timeline media states
	const [timelinePostIsActive, setTimelinePostIsActive] = useState(null)

	return (
		<CollabWrapper>
			<CollabContainer>
				<CollabFlex>
					<CollabContentLeft isOffSet >
						<CollabHeader collab={collab} creators={collabCreators} sticky={true} stickyPosition={0}/>
{/*						<TrackingRules/>
*/}						<Overview creators={collabCreators} isLoadingTimeseries={isLoadingCollabTimeseries} timeseries={collabTimeseries} />
						<TimelineChart timeseries={collabTimeseries} isLoadingMedia={isLoadingCollabTimeseries} setTimelinePostIsActive={setTimelinePostIsActive}/>
						<CreatorPostedStatus creators={collabCreators} />
						{!isLoadingCollab && collab.title &&
							<CollabTable list={collabCreators} data={collabCreators}/>
						}
{/*						<PerformanceTable/>
*/}					</CollabContentLeft>
					<PostResults ig_media={collabMedia} isLoading={isLoadingCollabMedia} timelinePostIsActive={timelinePostIsActive}/>
				</CollabFlex>
			</CollabContainer>
		</CollabWrapper>
	)
}

export default CollabPage