import React, {useState, useEffect} from 'react'

// Styled Components
import { DashboardContainer, StyledScrollbars, 	
	FlexContainer,
	FlexLeft,
	FlexMiddle,
	FlexRight } from '../home/Home.sc'
import {Spacer, PageTitleWrapper, PageFlexContainer} from '../../common/Common.sc'
import {SkeletonText} from '../../common/Skeleton.sc'

// Components
import List from '../../components/list/List'
import StickyInfoSection from '../../components/sticky_info_section/StickyInfoSection'
import Footer from '../../components/footer/Footer'
import FilterMenu from '../../components/filter_menu/FilterMenu'



function DiscoverPage() {
	const [dataIsLoading, setDataIsLoading] = useState(true)
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
			setDataIsLoading(false)
		}, 1000)	
	}, [loading])


	const [dataSet, setDataSet] = useState('collabs')
	toggleDataSet = () => {
		setDataIsLoading(true)
		setDataSet(dataSet === 'collabs' ? 'influencers' : 'collabs')
		setTimeout(() => {
			setDataIsLoading(false)
		}, 500)	
	}

	renderFilterContent = () => {
		return (
			<React.Fragment>
				<PageTitleWrapper fontSize={'2.5rem'} padding="35px 0px">
					{!loading ?
						<React.Fragment>
							<h1>Discover</h1>
							<h4>Found 1,900 collabs</h4>
						</React.Fragment>
						:
						<React.Fragment>
							<h1><SkeletonText height="2.1rem" width="50%" margin="0px 0px -10px" float="none"/></h1>
							<h4><SkeletonText  margin="-10px 0px -10px" width="65%" float="none"/></h4>
						</React.Fragment>
					}
				</PageTitleWrapper>
				<FilterMenu isLoading={loading} type="collabs" toggleDataSet={toggleDataSet} dataSet={dataSet}/>
			</React.Fragment>
		)
	}

	return (
		<React.Fragment>
			<DashboardContainer>
				<PageFlexContainer>
					<StickyInfoSection 
						sticky="60px" 
						contentLeftPadding="0px 20px 0px 1px" 
						contentRightPadding="0px 0px 0px 30px" 
						width="280px"
						titlePadding="0px"
						border={true}
						isNoTitle={true}
						contentLeft={renderFilterContent()}
						contentMiddle={renderFilterContent()}
						contentLeftMaxWidth="300px"
						contentLeftMinWidth="300px"
						contentLeftFlex="0 0 25%"
						>
							<Spacer margin="20px"/>
							<List title="350+ " filter={true} length={10} headerIsSticky={true} type={dataSet} isLoading={dataIsLoading}/>
					</StickyInfoSection>
				</PageFlexContainer>	
			</DashboardContainer>
		</React.Fragment>
	)
}

export default DiscoverPage