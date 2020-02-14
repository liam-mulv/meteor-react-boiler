import styled from 'styled-components'
import {SkeletonPulseTwo} from '../../common/Skeleton.sc'

export const SkeletonHeader = styled(SkeletonPulseTwo)`
	height: 30px;
	margin: 30px 0px 5px 0px;
	width: 95px;
    float: left;
    clear: both;
`

export const SkeletonSubHeader = styled(SkeletonPulseTwo)`
	margin: 10px 0px 20px;
	height: 20px;
	width: 160px;
    float: left;
    clear: both;
`

export const SkeletonReviewProfilePicture = styled(SkeletonPulseTwo)`
    width: 45px;
    height: 45px;
    padding-bottom: 0px;
    border-radius: 50%;
`

export const SkeletonReviewerUsername = styled(SkeletonPulseTwo)`
    margin-bottom: 5px;
    height: 14px;
    width: 100px;
    float: left;
    clear: both;
`

export const SkeletonReviewDate = styled(SkeletonPulseTwo)`
    height: 14px;
    width: 80px;
    float: left;
    clear: both;
`