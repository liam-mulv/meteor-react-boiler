import React, {useState, useEffect} from 'react'

// NPM
import HRNumbers from 'human-readable-numbers'


// Styled Components
import {OverviewWrapper, OverviewContainer, OverviewItemWrapper, OverviewItem, SmallTitle, StatCount} from './Overview.sc'

function Overview(props) {
	return (
		<OverviewWrapper>
			<OverviewContainer>
				<OverviewItemWrapper>
					<OverviewItem>
						<SmallTitle>Profiles Posted</SmallTitle>
						<StatCount>{props.creators.filter(function(c){return c.has_posted==true}).length}/{props.creators.length}</StatCount>
					</OverviewItem>
				</OverviewItemWrapper>
				<OverviewItemWrapper>
					<OverviewItem>
						<SmallTitle>Engagement</SmallTitle>
						<StatCount>{!props.isLoadingTimeseries && props.timeseries.length > 0 ? HRNumbers.toHumanString(props.timeseries[props.timeseries.length - 1].engagement) : '0' }</StatCount>
					</OverviewItem>
				</OverviewItemWrapper>
				<OverviewItemWrapper>
					<OverviewItem>
						<SmallTitle>Spent</SmallTitle>
						<StatCount>$0.00</StatCount>
					</OverviewItem>
				</OverviewItemWrapper>
				<OverviewItemWrapper>
					<OverviewItem>
						<SmallTitle>Earnings</SmallTitle>
						<StatCount>$0.00</StatCount>
					</OverviewItem>
				</OverviewItemWrapper>
			</OverviewContainer>
		</OverviewWrapper>
	)
}

export default Overview