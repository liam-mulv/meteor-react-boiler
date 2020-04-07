import styled from 'styled-components'


export const ReviewWrapper = styled.div`

    .review-card:first-child {
        padding-top: 10px;
    }

    div:last-child {
        border-bottom: 0px;
        padding-bottom: 0px!important;

    }
`

export const StaticHeader = styled.div`
    h1 {
        font-size: 2rem!important;
        margin-bottom: 10px;
        font-weight: 800;
    }

    svg {
        width: 15px!important;
    }
`

export const ReviewContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 30px;

 	h1 {
        font-size: 2rem!important;
 		margin: 0px;
        font-weight: 800;
 	}

 	p {
 		margin-top: 10px;
        font-size: 1.3rem;
 	}
`

export const ReviewContentLeft = styled.div`
    width: 100%;
    max-width: 33.333%;
`

export const ReviewContentRight = styled.div`
    width: 100%;
`

export const ReviewListContainer = styled.div`
    width: 100%;

    div:last-child {
        padding-bottom: 0px;
        border-bottom: 0px;
    }
`

export const ReviewCard = styled.div`
    border-bottom: 1px solid #eeee;
    padding: 30px 0px;
    overflow; auto;
`

export const  ReviewInfoWrapper = styled.div`
	display:flex;
`

export const ReviewerTextWrapper = styled.div`
    margin-left: 20px;
    margin-top: 0px;

    p {
        margin: 0px;
        line-height: 1.1rem;
    }

    svg {
        width: 12px!important;
    }

`

export const ReviewerProfilePicture = styled.div`
    width: 45px;
    height: 45px;
    transition: 0.2s;
    padding-bottom: 0px;
    border-radius: 50%;
    overflow: hidden;
`

export const ReviewerUsername = styled.div`
    margin-bottom: 3px;
    font-size: 1rem;
    font-weight: 800;
`

export const ReviewDate = styled.span`
    font-size: 0.9rem;
    font-weight: 600;
	opacity: 0.5;
`

export const ReviewContent = styled.p`
    border-radius: 4px 15px 15px;
    display: inline-block;
    line-height: 1.4rem;
    font-size: 1.1rem!important;
    background-color: #fff;
    margin: 20px 0px 0px 0px!important;
    padding: 0px;
    width: 100%;
`