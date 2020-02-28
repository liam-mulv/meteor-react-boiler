import React from 'react'

// Components
import Tags from '../tags/Tags'

// NPM
import { Link } from 'react-router-dom'
import {SkeletonPulseTwo, SkeletonText} from '../../common/Skeleton.sc'

// Styled Components
import { 
	InfoDescription, 
	Tag, 
	CollabInfoLeft,
	CollabInfoRight,
	ButtonContainer,
	BudgetWrapper,
	BudgetContainer,
	BudgetProgress,
	BlackShine,
	LocationLink,
	CollabHostInfoWrapper
} from './CollabHeader.sc'
import {Spacer, PageTitleWrapper, LazyBackgroundImage} from '../../common/Common.sc'
import StarRating from '../review/StarRating'

import MapMarkerIcon from '../../icons/map-marker'

function CollabHeader(props) {
	return (
		<div>
			{!props.isLoading ?
				<PageTitleWrapper flex={true} padding="0px">
					<CollabInfoLeft isApprovedForCollab={props.isApprovedForCollab}>
						<h4>{props.type}</h4>
						<h1>{props.title}</h1>
						<Tags tags={props.tags}/>

						<CollabHostInfoWrapper>
							<Link to="/profile/peaches.label">
								<div>
			                        <LazyBackgroundImage 
			                          width="100%" 
			                          height="100%" 
			                          lazyLoad 
			                          src="https://cdn.shopify.com/s/files/1/0082/0795/8078/products/PeachesandCream-124.png?v=1578890685"
			                        />
			                    </div>
		                    </Link>
		                   	<Link to="/profile/peaches.label"><p>peachesandcream</p></Link>
		                    <StarRating/>
						</CollabHostInfoWrapper>
					</CollabInfoLeft>
					<CollabInfoRight>
						<Link className="map-section" to="map-section" spy={true} smooth={true} offset={-130} duration={() => props.getScrollDuration(props.mapRef)}>
							<LocationLink>Collingwood, VIC, Australia<MapMarkerIcon/></LocationLink>
						</Link>
					</CollabInfoRight>
				</PageTitleWrapper>
				:
				<PageTitleWrapper flex={true} padding="0px">
					<CollabInfoLeft isApprovedForCollab={props.isApprovedForCollab}>
						<h4>
							<SkeletonText height="16px" width="25%" float="none"/>
						</h4>
						<h1>
               				<SkeletonText height="33px" width="60%" float="none"/>
						</h1>
						<div>
               				<SkeletonText borderRadius="20px" margin="0px 8px 0px 0px" height="29px" width="20%" float="none"/>
               				<SkeletonText borderRadius="20px" margin="0px 8px 0px 0px" height="29px" width="20%" float="none"/>
               				<SkeletonText borderRadius="20px" margin="0px 8px 0px 0px" height="29px" width="20%" float="none"/>
						</div>
						<CollabHostInfoWrapper>
							<Link to="/profile/peaches.label">
								<div>
									<SkeletonText height="35px" width="35px" float="none"/>
			                    </div>
		                    </Link>
							<SkeletonText margin="0px 15px 0px 5px" height="15px" width="60px" float="none"/>
							<SkeletonText height="15px" width="100px" float="none"/>
						</CollabHostInfoWrapper>
					</CollabInfoLeft>
					<CollabInfoRight>
						<SkeletonText height="15px" width="200px" float="none"/>
					</CollabInfoRight>
				</PageTitleWrapper>
			}
		</div>
	)
}

export default CollabHeader

