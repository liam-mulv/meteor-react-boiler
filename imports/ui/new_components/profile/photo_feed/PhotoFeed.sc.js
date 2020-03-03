import styled from 'styled-components'


export const PhotoFeedContainer = styled.div`

`


export const FeedRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 20px;
  	position: sticky;
	top: 81px;
`

export const FeedColumn = styled.div`
    flex: calc(33.33% - 10px);
    max-width: calc(33.33% - 10px);
    padding: 5px;
`

export const ColumnCard = styled.div`
	margin-top: 8px;
  	vertical-align: middle;
  	width: 100%;

  	img {
  		border-radius: 10px;
  		width: 100%;
  	}
`

