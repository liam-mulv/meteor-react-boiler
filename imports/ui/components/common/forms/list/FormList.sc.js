import styled from 'styled-components'

export const List = styled.div`
    background-color: #ffffff;
    max-height: 200px;
    overflow-y: scroll;
    margin-top: 16px;
    border-top: 1px solid #eee;



    ::-webkit-scrollbar-thumb {
      background-color: rgba(0,0,0,0.35)!important;
    }
`

export const ListItem = styled.div`
    align-items: center;
    display: flex;
    font-size: 1rem;
    padding: 10px;
    border-bottom: 1px solid #eee;
    justify-content: space-between;
    display: flex;
    align-items: center;

    > div {
      display: flex;
      align-items: center;
    }
    > div svg {
      width: 15px;
      height: 15px;
      opacity: 0.4;

      :hover {
        cursor: pointer;
      }
    }

    span {
      font-size: 1.3rem;
      margin-bottom: -6px;
      opacity: 0.4;
    }
`


