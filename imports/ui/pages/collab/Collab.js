import React, {useEffect, useState} from 'react'

// NPM
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// Components
import StickyInfoSection from '../../components/sticky_info_section/StickyInfoSection'
import ProfileInfo from '../../components/profile/ProfileInfo'
import CollabContent from './CollabContent'
// Styled Components
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
			<PageContainer>
				<PageFlexContainer>
					<StickyInfoSection 
						sticky="60px" 
						contentLeftPadding="0px 50px 0px 0px" 
						contentRightPadding="0px 0px 0px 50px" 
						contentLeftMaxWidth="420px"
						contentLeftMinWidth="300px"
						contentLeftFlex="0 0 25%"
						isNoTitle={true}
						border={true}
						titlePadding="0px"
						contentLeft={<ProfileInfo type="Brand" isLoading={dataIsLoading} isCollab={true}/>}
					>
					<CollabContent/>
				</StickyInfoSection>
				</PageFlexContainer>
			</PageContainer>
		</React.Fragment>
	)
}

export default CollabPage