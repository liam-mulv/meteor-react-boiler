import styled from 'styled-components'
import Dropdown from 'react-dropdown'

export const ListIcon = styled.div`
  width: 45px;
  height: 45px;
  min-width: 45px;
  min-height: 45px;
  border-radius: 5px;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  flex-direction: row!important;
  text-align: center;
  font-size: 1.5rem;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
  }

  > div {
    width: 100%;
  }
`

export const ListHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 0px 15px 0px 25px;

  > div {
    align-items: center;
    display: flex;
  }

  span {
    opacity: 1!important;
    // align-items: center;
    // display: flex;
    position: relative;
  }

  span {
    svg {
      position: absolute;
      width: 17px;
      margin: 14px 12.5px;
    }
  }
  svg {
    width: 25px;
    margin: 0px 0px 0px 16px;
  }

  input {
      font-size: 1rem;
      border: 2px solid #f2f2f2!important;
      background-color: #f2f2f2;
      border-radius: 4px;
      padding: 10px 20px 10px 42px;
      margin-right: 8px;
      transition: 0.35s;
      width: 150px;

      ::placeholder {
        color: #b1b1b1;
      }
  }

  span div {
    position: absolute;
    top: 0px;
    right: 19px;
    height: 100%;
    align-items: center;
    display: flex;

    svg {
      background-color: #eee;
      margin: 0px;
      position: initial;
      FONT-WEIGHT: 200;
      width: 10px;
      padding: 5px 8px;
      border-radius: 4px;
      opacity: 0.6;
    }

    :hover {
      cursor: pointer;

      svg {
        background-color: #ccc;
      }

    }
  }


  > div:last-child {
    display: flex;
  }

  button {
      position: relative;
      background-color: #222;
      border: 1px solid #222;
      color: #fff;
      padding: 12px 15px;
      font-size: 1rem;
      border-radius: 4px;
      font-weight: 700;
      border: 1px solid;
      height: 45px;
  }
`

export const ManageButton = styled.button`
    font-size: 1rem;
    border-radius: 4px;
    font-weight: 700;
    border: 1px solid;
    background-color: #f2f2f2!important;
    margin-right: 8px!important;
    padding: 10px 3px!important;
    opacity: ${props => props.isVisible ? '1' : '0'};
    transition: 0.35s;
    position: relative;

    svg {
      width: 21px;
    }
`

export const Username = styled.span`
  font-size: 1rem;
  font-weight: 400;
  opacity: 1!important;
`


export const Stat = styled.span`
  font-size: 1rem;
  font-weight: 600;
  opacity: 1!important;
  text-transform:uppercase;

  span {
    display: flex;
  }

  svg {
    width: 15px;
    height: 15px;
    margin: 0px 7px -3px 0px;
    opacity: 0.2;
  }
`

export const Status = styled.div`
  background-color: #b8bafd;
  padding: 6px 14px;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
`



export const StyledDropdown = styled(Dropdown)`
  .is-selected {
    background-color: ${props => props.value === 'accepted' ? '#000' : 'rgb(184, 186, 253)'};
    color: rgb(255, 255, 255);
    font-weight: 600;
    padding: 6px 14px;
    border-radius: 4px;
  }

  .status-none {

  }
  .status-contacted {
    background-color:#000;
  }
  .status-waiting {
    background-color:red;
  }
  .status-negotiation {
    
  }
  .status-accepted {
    
  }
  .status-rejected {
    
  }

  .Dropdown-control {
    background-color: #fafafa;
    border: 1px solid #fafafa;
    border-radius: 2px;
    color: #333;
    padding: 4px 31px 4px 4px;
  }
  .Dropdown-arrow {
    top: 17px;
  }
`

export const Styles = styled.div`
  background-color: #fff;
  margin: 0px;
  // width: 100%;

  padding: 1rem;
  ${'' /* These styles are suggested for the table fill all available space in its containing element */}
  display: block;
  ${'' /* These styles are required for a horizontaly scrollable table overflow */}

  .table div:first-child .tr:first-child {
    display: none!important;
  }
  .table div:first-child .tr:nth-child(2) {
    padding: 0px 10px;
    position: sticky;
    top: 70px;
    border-radius: 0px;
    overflow: hidden;
  }

  .table {
    width: 100%;
    border-spacing: 0;
    border: 0px solid black;

    .thead {
      ${'' /* These styles are required for a scrollable body to align with the header properly */}
      overflow-y: auto;
      overflow-x: hidden;
    }

    .tbody {
      ${'' /* These styles are required for a scrollable table body */}
      // overflow-y: scroll;
      // overflow-x: hidden;
      // height: 250px;
      padding: 20px 10px 0px;
      background-color: #fff;
    }

    .tr .th:hover {
      background-color: #fff; 
      cursor: pointer;
    }

    .tr {
      background-color: #fff;
      margin-bottom: 3px;
      border-radius: 4px;

      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }

    .td {
      align-items: center!important;
    }

    .th {
      font-size: 1rem;
      color: #222;
      font-weight: 400;
      padding: 12px 15px 10px 15px!important;
      font-size: 0.9rem;
      align-items: center!important;
      display: flex;
      justify-content: space-between;

      ::selection {
          color: none;
          background: none;
      }

      svg {
        width: 13px;
        opacity: 0.5;
        margin-top: 3px;
        margin-right: 4px;
      }
    }
    .th,
    .td {
      margin: 0;
      padding: 10px 0px 10px 15px!important;
      border-right: 0px solid black;

      ${'' /* In this example we use an absolutely position resizer,
       so this is required. */}
      position: relative;

      :last-child {
        border-right: 0;
      }

      .resizer {
        right: 0;
        background: #fff;
        width: 2px;
        height: 100%;
        position: absolute;
        display: flex;
        align-items: center;
        top: 0;
        z-index: 1;
        ${'' /* prevents from scrolling while dragging on touch devices */}
        touch-action :none;

        &.isResizing {
          background: #eee;
        }

        svg {
          width: 10px;
          margin-left: 4px;
          margin-right: 5px;
          fill: #dad7d7;
          opacity: 1;
          display: none;
        }
      }


    }
    .th:last-child .resizer {
        display: none;
    }

    // .tr .td:last-child {
    //   justify-content: center!important;
    //   align-items: center!important;
    // }
  }
`

export const CheckBox = styled.div`

  /////////////////////////////////////////////
  /* Create a custom checkbox */
  .checkmark {
      position: absolute;
      left: 14px;
      height: 20px;
      width: 20px;
      background-color: #eee;
      border-radius: 4px;
      opacity: 1!important;
  }

  /* On mouse-over, add a grey background color */
  :hover input ~ .checkmark {
      background-color: #ccc;
      border-radius: 4px;
      opacity: 1!important;
  }

  /* When the checkbox is checked, add a blue background */
  input:checked ~ .checkmark {
      background-color: #000000;
      border-radius: 3px;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  input:checked ~ .checkmark:after {
    display: block;
  }

  input {
    opacity: 0;
    z-index:1111;
    position: relative;
    margin: 0px;
    width: 20px;
    height: 20px;
  }

  /* Style the checkmark/indicator */
  .checkmark:after {
      left: 7px;
      top: 3px;
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
  }
`

export const EditButton = styled.div`
    // margin-left: 9px;
    display: flex;
    align-items: center;

    svg {
      width: 20px;
      height: 20px;
      fill: #000;
      opacity: 0.3;
      z-index: 111111;
      position: relative;
      padding: 5px;
    }

    :hover {
      border-radius: 4px;
      background-color: #f2f2f2;
      cursor: pointer;
    }
`

export const NoResults = styled.div`
  padding: 50px 0px;
  text-align: center;
  font-size: 1.2rem;
  opacity: 0.5;
`