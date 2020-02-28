import React, {useEffect, useState} from 'react'

// Components
import SkeletonParagraph from '../skeleton_paragraph/SkeletonParagraph'
import SkeletonListItem from '../skeleton_list_item/SkeletonListItem'
// Styled Components
import {ApplyForCollabWrapper, ApplyForCollabContainer, ApplyButtonContainer, ContactCollabHostContainer} from './ApplyForCollab.sc'
import {Shine} from '../../common/Common.sc'
import {SkeletonText} from '../../common/Skeleton.sc'

// Icons
import CheckIcon from '../../icons/check-solid'

function ApplyForCollab (props) {
	return (
		<ApplyForCollabWrapper>

			{!props.isLoading ?
				<React.Fragment>
					<ApplyForCollabContainer>
						<h2>from $299 / collab</h2>
						<p>LF 18-25 y/o fashion influencers who love The Peaches & Cream Brand & Clothes</p>
						<h4>Requirements</h4>
						<ul>
							<li><CheckIcon/>1 post</li>
							<li><CheckIcon/>2 revisions</li>
							<li><CheckIcon/>7 day delivery</li>
							<li><CheckIcon/>30 days active</li>
						</ul>
						<ApplyButtonContainer>
							<button><b>Apply Now</b><Shine/></button>
						</ApplyButtonContainer>
						<p><a>Terms & Conditions</a> Apply</p>
					</ApplyForCollabContainer>
					<ContactCollabHostContainer>
						<button>Contact</button>
					</ContactCollabHostContainer>
				</React.Fragment>
				: 
				<React.Fragment>
					<ApplyForCollabContainer>
						<h2><SkeletonText height="25px" width="40%" float="none" margin="0px"/></h2>
						<SkeletonParagraph numberOfLines={2}/>
						<h4><SkeletonText height="20px" width="35%" float="none" margin="0px"/></h4>
						<ul>
							<SkeletonListItem length={3}/>
						</ul>
						<ApplyButtonContainer>
							<SkeletonText height="51px" width="100%" float="none" margin="0px"/>
						</ApplyButtonContainer>
						<p><SkeletonText height="15px" width="40%" float="none" margin="0px auto"/></p>
					</ApplyForCollabContainer>
					<ContactCollabHostContainer>
						<SkeletonText height="51px" width="100%" float="none" margin="0px"/>
					</ContactCollabHostContainer>
				</React.Fragment>
			}
			
		</ApplyForCollabWrapper>
	)
}

export default ApplyForCollab