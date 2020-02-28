import React, {useEffect, useState} from 'react'

// NPM
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// Components
import StickyInfoSection from '../../components/sticky_info_section/StickyInfoSection'
import ProfileInfo from '../../components/profile/ProfileInfo'
import CollabContent from './CollabContent'
import ApplyForCollab from '../../components/collab/ApplyForCollab'

// Styled Components
import {DashboardContainer} from '../home/Home.sc'
import { PageContainer, PageFlexContainer, PageContent, FlexSpacer, ScrollElement  } from '../../common/Common.sc'



function CollabPage() {
	
	const [dataIsLoading, setDataIsLoading] = useState(true)
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
			setDataIsLoading(false)
		}, 1000)	
	}, [loading])

	return (
		<React.Fragment>
			<DashboardContainer marginTop="0px">
				<PageContainer>
					<PageFlexContainer maxWidth="1350px" padding="0px 35px">
						<StickyInfoSection 
							sticky="80px" 
							contentLeftPadding="0px 0px 0px 0px" 
							contentRightPadding="0px 50px 0px 0px" 
							contentLeftMaxWidth="420px"
							contentLeftMinWidth="420px"
							contentRightMaxWidth="66.66%"
							contentLeftFlex="0 0 25%"
							isNoTitle={true}
							border={false}
							titlePadding="0px"
							reverseDirection={true}
							contentLeft={<ApplyForCollab isLoading={dataIsLoading}/>}>
						<CollabContent quickNavStickyPosition="80px" stickyOffset="150px"/>
					</StickyInfoSection>
					</PageFlexContainer>
				</PageContainer>
			</DashboardContainer>
		</React.Fragment>
	)
}

export default CollabPage