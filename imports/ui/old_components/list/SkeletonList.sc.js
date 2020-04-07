import styled from 'styled-components'
import {SkeletonPulseTwo} from '../../common/Skeleton.sc'

export const SkeletonListTitle = styled(SkeletonPulseTwo)`
	height: 27px;
	width: ${props => props.width && props.width};
	margin: 30px 0px 10px 0px;


	@media (min-width: 1100px) { 
		margin: 30px 85px 10px 85px;
    }
`