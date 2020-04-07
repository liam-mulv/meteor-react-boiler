import React, {useState} from 'react'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

// NPM
import Sticky from 'react-sticky-el';
import { BackgroundImage } from "react-image-and-background-image-fade";

// Component
import Collab from '../card_collab/Collab'
import SkeletonCollab from '../card_collab/SkeletonCollab'

// Styled Components
import { PrimaryButton } from '../../common/Common.sc'
import { StyledScrollbars } from '../../pages/home/Home.sc'
import { CollabWrapper } from './RowCollabs.sc'
import { RowWrapper, RowTitle, FlexRow } from './RowInfluencer.sc'


// Test data
import data from '../../data/collab_data'


function RowCollabs (props) {

	const [collabs, setCollabs] = useState([])
	useEffect(() => {
		setTimeout(() => {
			setCollabs(data.collab_data)
		}, 1000)
	}, [collabs])

	return (
		<RowWrapper className="block rowWrapper">
			<RowTitle>
				{props.title}
				<span>{this.props.subTitle}</span>
			</RowTitle>
			<FlexRow>
				{collabs.length > 0 ? collabs.slice(0,8).map((data, index) => {
					return (
						<Collab data={data}/>
					)
				}) : 
					[1,2,3,4,5,6,7,8].map((data, index) =>{
						return (
							<SkeletonCollab/>
						)
					})
				}
			</FlexRow>
		</RowWrapper>
	)
}
