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
import Header from '../../components/my_collabs/Header'
import CollabContent from '../collab/CollabContent'
// Data
import data from '../../data/collab_data'


function MyCollabsPage() {

	const [isLeftContentCollapsed, setIsLeftContentCollapsed] = useState(false)
	toggleLeftContent = (state) => {
		setIsLeftContentCollapsed(state)
	}



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
						contentLeft={<LeftContent isCollapsed={isLeftContentCollapsed} collabs={data.collab_data}/>}
						contentLeftMaxWidth={isLeftContentCollapsed ? '90px' : '420px'}
						contentLeftMinWidth={isLeftContentCollapsed ? '90px' : '285px'}
						contentLeftFlex="0 0 25%"
						threeColumnLayout={true}
						reverseDirection={true}
						>
						<React.Fragment>
							<Header submitPostIsActive={isLeftContentCollapsed} toggleLeftContent={toggleLeftContent}/>
							<RightMiddleWrapper>

								<div style={{maxWidth: "900px", height: "calc(100vh - 122px)", overflow: "scroll", borderLeft: "1px solid #eee"}}>
									{isLeftContentCollapsed ?
										<CollabContent quickNavStickyPosition="0px" stickyOffset="65px" isApprovedForCollab={true}/> :
										<RightContent/>
									}
{/*									
*/}
								</div>
								<MiddleContent/>
							</RightMiddleWrapper>
						</React.Fragment>

					</StickyInfoSection>
			</DashboardContainer>
		</React.Fragment>
	)
}

export default MyCollabsPage