import React, {useEffect, useState} from 'react'

// Styled Components
import { 
	DashboardContainer, 
	StyledScrollbars, 	
	FlexContainer,
	FlexLeft,
	FlexMiddle,
	FlexRight,
	RightMiddleWrapper
} from '../home/Home.sc'
import {
	Spacer, 
	PageTitleWrapper, 
	PageFlexContainer,
	LazyLoadBackgroundImage
} from '../../common/Common.sc'
import {MessageWindowHeader, MessageWindowIcon} from '../../components/my_collabs/MiddleContent.sc'

// Components
import StickyInfoSection from '../../components/sticky_info_section/StickyInfoSection'
import RightContent from '../../components/my_collabs/RightContent'
import MiddleContent from '../../components/my_collabs/MiddleContent'
import LeftContent from  '../../components/my_collabs/LeftContent'
import Collab from '../collab/CollabContent'
// Data
import data from '../../data/collab_data'


function MyCollabsPage() {
	return (
		<React.Fragment>
			<DashboardContainer>
					<StickyInfoSection 
						sticky="0px" 
						contentLeftPadding="0px 0px 0px 0px" 
						contentRightPadding="0px 0px 0px 0px" 
						width="280px"
						titlePadding="0px"
						border={true}
						contentLeft={<LeftContent  collabs={data.collab_data}/>}
						contentLeftMaxWidth="420px"
						contentLeftMinWidth="285px"
						contentLeftFlex="0 0 25%"
						threeColumnLayout={true}
						>
						<React.Fragment>
							<MessageWindowHeader>
								<MessageWindowIcon dimensions="40px">
									<LazyLoadBackgroundImage 
						                width="100%" 
						                height="100%" 
						                lazyLoad 
						                src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/092015/beats_logo.png?itok=7RvjIJ-Y"
						            />
					            </MessageWindowIcon>	
					            <span>Beats - By Dre</span>
							</MessageWindowHeader>
							<RightMiddleWrapper>
								<RightContent/>
								<MiddleContent/>
							</RightMiddleWrapper>
						</React.Fragment>

					</StickyInfoSection>
			</DashboardContainer>
		</React.Fragment>
	)
}

export default MyCollabsPage