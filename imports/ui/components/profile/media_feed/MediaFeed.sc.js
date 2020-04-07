import styled from 'styled-components'


export const PhotoFeedContainer = styled.div`
  box-shadow: ${props => props.isOffSet ? 'inset 0px 3px 6px -6px rgba(0,0,0,0.8)' : 'none'};
  transition: 0.3s;
`


export const FeedRow = styled.div`
  padding: 16px 8px;

  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -8px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 8px; /* gutter size */
    background-clip: padding-box;
  }
   
  /* Style your items */
  .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
    // background: grey;
    margin-bottom: 4px;
  }

`

export const FeedColumn = styled.div`
    flex: calc(33.33% - 10px);
    max-width: calc(33.33% - 10px);
    padding: 5px;
`

export const ColumnCard = styled.div`
	margin-bottom: 8px;
  vertical-align: middle;
  width: 100%;

  img {
		border-radius: 10px;
		width: 100%;
    object-fit: cover;
  }

  video {
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
  }

  :hover {
    cursor: pointer;
  }

`

