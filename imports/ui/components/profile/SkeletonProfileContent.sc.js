import styled from 'styled-components'
import {SkeletonPulseTwo} from '../../common/Skeleton.sc'


export const SkeletonProfilePictureContainer = styled(SkeletonPulseTwo)`
    position: relative;
	width: 190px;
    height: 190px;
    border-radius: 50%;
    display: block;
`

export const SkeletonUsername = styled(SkeletonPulseTwo)`
	height: 30px;
	margin: 0px 0px 7px 0px;
	display: block;
	width: 250px;
`

export const SkeletonInstagramHandle = styled(SkeletonPulseTwo)`
	height: 23px;
	margin: 3px 0px;
	display: block;
	width: 40%;
`

export const SkeletonProfileStats = styled.div`
	display: flex;
	margin: 20px 0px;
	width: 80%;

`

export const SkeletonTextOverflowWrapper = styled.div`
	overfow: auto;
`

export const SkeletonProfileStat = styled(SkeletonPulseTwo)`
	height: 28px;
	flex: 1;
	margin: 0px;
    margin-right: 10px;
    width: 110px;
`

export const SkeletonProfileInfo = styled.div`
    display: flex;
    margin: 40px 0px 0px;
    padding: 30px 0px 0px;
`

export const SkeletonProfileButtonContainer = styled.div`
    display: flex;
    margin: 20px 0px 0px;

    div:nth-child(2) {
    	width: 50px;
	    background-color: #000;
	    color: #fff;
	}
	div:nth-child(3) {
    	width: 50px;
	    background-color: #000;
	    color: #fff;
	}
`

export const SkeletonProfileButton = styled(SkeletonPulseTwo)`
	border-radius: 3px;
	height: 39px;
	width: 106px;
	margin-right: 5px;
`

export const SkeletonProfileInfoRow = styled.div`
    margin: 0px 40px 0px 0px;
    width: ${props => props.width && props.width};
    flex: initial!important;
`


export const SkeletonInfoBlock = styled.div`
    margin: 0px 0px 40px;
    font-size: 1.1rem;
    flex: 1;

    svg {
        width: 15px;
        margin-right: 5px;
    }
`

export const SkeletonTagContainer = styled.div`
	display: flex;
`

export const SkeletonTag = styled(SkeletonPulseTwo)`
	height: 29px;
	border-radius: 20px;
	width: 100px;
	margin-right: 5px;
`



