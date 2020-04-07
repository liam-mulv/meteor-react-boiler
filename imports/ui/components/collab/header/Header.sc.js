import styled from 'styled-components'



export const ListHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 16px 16px 35px;
  background-color: #fff;
  z-index: 11;
  // position: ${props => props.sticky ? 'sticky' : 'initial'};
  // top: ${props => props.stickyPosition && props.stickyPosition};


  h1 {
    margin: 0px;
    padding-bottom: 8px;
    font-size: 1.7rem;
  }

  > div {
    align-items: center;
    display: flex;
  }

  span {
    opacity: 1!important;
    position: relative;
  }

  > div:last-child {
    display: flex;
  }

  svg {
    width: 25px;
    margin: 0px 16px;
  }
`


export const ListHeaderIcon = styled.div`
  width: 55px;
  height: 55px;
    background-color: ${props => props.color ? props.color : '#fdb8d0'};
  border-radius: 5px;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  flex-direction: row!important;
  text-align: center;
  font-size: 1.9rem;
  margin-right: 16px;

  > div {
      width: 100%;
      margin-bottom: -5px;
  }
`


export const LeftHeader = styled.div`
  display: flex;
  flex-direction: row!important;

  > div {
    display: flex;
      align-items: center;
  }
`