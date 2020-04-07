import React, {useState, useEffect} from 'react'
import {Meteor} from 'meteor/meteor'

// NPM
import styled from 'styled-components'
import HRNumbers from 'human-readable-numbers'
import ReactTooltip from 'react-tooltip'
import { Link } from 'react-router-dom'
import 'react-dropdown/style.css';
import moment from 'moment'

// Components
import Dropdown from '../../common/dropdown/Dropdown'

// React Table
import {
  useTable,
  useResizeColumns,
  useFlexLayout,
  useRowSelect,
  useSortBy,
  useGlobalFilter
} from 'react-table'

import {
  Styles, 
  ListHeader,
  ListIcon,
  Username,
  Stat,
  CheckBox,
  EditButton,
  Status,
  StyledDropdown,
  ManageButton,
  NoResults
} from './ListTable.sc'
import {Header,ListHeaderIcon, LeftHeader, RightHeader, EditListButton} from '../../common/list/List.sc'

// Icons
import EllipsisIcon from '../../../icons/ellipsis'
import TimesIcon from '../../../icons/times'
import CommentIcon from '../../../icons/comment-solid'
import HeartIcon from '../../../icons/heart-solid'
import BoltIcon from '../../../icons/bolt-solid'
import GripVertical from '../../../icons/grip-vertical'
import Ellipsis from '../../../icons/ellipsis'
import SearchIcon from '../../../icons/search'
import ChevronUpIcon from '../../../icons/chevron-up-solid'
import ChevronDownIcon from '../../../icons/chevron-down-solid'
import TrashIcon from '../../../icons/trash'

const headerProps = (props, { column }) => getStyles(props, column.align)

const cellProps = (props, { cell }) => getStyles(props, cell.column.align)

const getStyles = (props, align = 'left') => [
  props,
  {
    style: {
      justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
      alignItems: 'flex-start',
      display: 'flex',
    },
  },
]

// Remove creator on click from list
const removeCreator = (listId, creator) => {
  Meteor.call('lists.removeCreator', listId, creator )
}

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length

  return (
    <span>
      <SearchIcon/>
      <input
        value={globalFilter || ''}
        onChange={e => {
          setGlobalFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
        }}
        placeholder={`Search...`}
        style={{
          fontSize: '1.1rem',
          border: '0',
        }}
      />
      {typeof globalFilter !== 'undefined' &&<div onClick={() => setGlobalFilter(undefined)}><TimesIcon/></div>}
    </span>
  )
}

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <CheckBox>
        <input type="checkbox" ref={resolvedRef} {...rest} />
        <span className="checkmark"></span>
      </CheckBox>
    )
  }
)

function removeMultipleCreators (selectedRows) {
  let ids = selectedRows.map(c => c._id);
  Meteor.call('lists.removeMultipleCreators',selectedRows[0].listId, ids )
}


function Table({ columns, data, list, creatorsWithStatus, setSelectedRows, selectedRows, openAddCreatorToListModal, setIsEditListModalVisible }) {
  const defaultColumn = React.useMemo(
    () => ({
      // When using the useFlexLayout:
      minWidth: 30, // minWidth is only used as a limit for resizing
      width: 150, // width is used for both the flex-basis and flex-grow
      maxWidth: 200, // maxWidth is only used as a limit for resizing
    }),
    []
  )

  const { 
    getTableProps, 
    headerGroups, 
    getTableBodyProps, 
    rows, 
    prepareRow,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      autoResetSortBy: false,
      autoResetGlobalFilter: false,
    },
    useResizeColumns,
    useFlexLayout,
    useGlobalFilter, // useGlobalFilter!
    useSortBy,
    useRowSelect,
    hooks => {
      hooks.allColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          disableResizing: true,
          minWidth: 50,
          width: 50,
          maxWidth: 50,
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
      hooks.useInstanceBeforeDimensions.push(({ headerGroups }) => {
        // fix the parent group of the selection button to not be resizable
        const selectionGroupHeader = headerGroups[0].headers[0]
        selectionGroupHeader.canResize = false
      })
    }
  )

   useEffect(() => {
    setSelectedRows(selectedFlatRows.map(row => row.original));
  }, [setSelectedRows, selectedFlatRows]);

  return (
    <React.Fragment>
      <ListHeader>
          <LeftHeader>
            <ListHeaderIcon color={list.title.slice(0,1) === 'I' ? '#7fe5dd' : list.title.slice(0,1) === 'V' ? '#b8bafd' : list.title.slice(0,1) === 'N' ? '#ffc39a' : '#fdb8d0'}>
              <div>{list.title.slice(0,1)}</div>
            </ListHeaderIcon>
            <div>
              <div>
                <h1>{list.title}<span> <small>({creatorsWithStatus.length})</small></span></h1>
                <span>Created: {moment(list.timestamp).fromNow()}</span>
              </div>
            </div>
          </LeftHeader>
        <div>
          <ManageButton isVisible={selectedRows.length > 0} onClick={() => removeMultipleCreators(selectedRows)} data-tip="Remove Selected"><TrashIcon/></ManageButton>
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
          <button onClick={() => openAddCreatorToListModal(true)}>Add</button>
          <EditListButton onClick={() => setIsEditListModalVisible(true)} data-tip="Edit List">
            <Ellipsis/>
          </EditListButton>
        </div>
      </ListHeader>

      <div {...getTableProps()} className="table">
        <div>
          {headerGroups.map(headerGroup => (
            <div
              {...headerGroup.getHeaderGroupProps({
                // style: { paddingRight: '15px' },
              })}
              className="tr"
            >
              {headerGroup.headers.map(column => (
                <div {...column.getHeaderProps(column.getSortByToggleProps())} className="th">
                  {column.render('Header')}
                  {/* Use column.getResizerProps to hook up the events correctly */}
                  {column.canResize && (
                    <div
                      {...column.getResizerProps()}
                      className={`resizer ${
                        column.isResizing ? 'isResizing' : ''
                      }`}>
                      <GripVertical/>
                    </div>

                  )}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? <ChevronDownIcon/>
                          : <ChevronUpIcon/>
                        : ''}
                    </span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="tbody">
          {rows.map(row => {
            prepareRow(row)
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map(cell => {
                  return (
                    <div {...cell.getCellProps(cellProps)} className="td">
                      {cell.render('Cell')}
                    </div>
                  )
                })}
              </div>
            )
          })}
          {rows.length < 1 &&
            <NoResults>No results found</NoResults>
          }
        </div>
      </div>
    </React.Fragment>
  )
}


function App(props) {

  const columns = React.useMemo(
    () => [
      {
        Header: 'Header',
        columns: [
          {
            sortDescFirst:true,
            disableSortBy: true,
            Header: "",
            accessor: "imageUrl",
            maxWidth: 50,
            minWidth: 50,
            width: 50,
            Cell: props => <Link to={"/profile/"+props.row.original.username}><ListIcon onClick={() => console.log(props)} width={60} textColor="#fff" text="Image" data-tip={props.row.original.username}><img src={props.row.original.images}/></ListIcon></Link>
          },
          {
            sortDescFirst:true,
            Header: 'Username',
            accessor: 'username',
            Cell: props => <Link to={"/profile/"+props.row.original.username}><Username>{props.row.original.username}</Username></Link>
          },
          {
            sortDescFirst:true,
            Header: 'Followers',
            accessor: 'follower_count',
            width: 110,
            Cell: props => <Stat>{HRNumbers.toHumanString(props.row.original.follower_count)}</Stat>
          },
          {
            sortDescFirst:true,
            Header: 'Eng. Rate',
            width: 110,
            accessor: 'engagement_rate',
            Cell: props => <Stat><BoltIcon/>{props.row.original.engagement_rate.toFixed(1)+'%'}</Stat>
          },
          {
            sortDescFirst:true,
            Header: 'Avg Likes',
            width: 110,
            accessor: 'avg_likes_per_post',
            Cell: props => <Stat><HeartIcon/>{HRNumbers.toHumanString(props.row.original.avg_likes_per_post.toFixed(0))}</Stat>
          },
          {
            sortDescFirst:true,
            Header: 'Avg Comments',
            width: 135,
            minWidth: 135,
            accessor: 'avg_comments_per_post',
            Cell: props => <Stat><CommentIcon/>{HRNumbers.toHumanString(props.row.original.avg_comments_per_post.toFixed(0))}</Stat>
          },
          {
            sortDescFirst:true,
            Header: 'Status',
            width: 150,
            minWidth: 150,
            accessor: 'status',
            Cell: props => <Dropdown listId={props.row.original.listId} creatorId={props.row.original._id} value={props.row.original.status}/>
          },
          {
            sortDescFirst:true,
            disableSortBy: true,
            Header: 'Remove',
            accessor: '',
            width: 70,
            maxWidth: 70,
            minWidth: 70,
            Cell: props =>   <EditButton onClick={() => removeCreator(props.row.original.listId, props.row.original)} data-tip="Remove Creator"><ReactTooltip effect="solid" /><TimesIcon/></EditButton>
          }
        ],
      },
    ],
    []
  )

  const [selectedRows, setSelectedRows] = useState([]);
  return (
    <Styles>
      <Table columns={columns} data={props.data} list={props.list} creatorsWithStatus={props.creatorsWithStatus} setSelectedRows={setSelectedRows} selectedRows={selectedRows} openAddCreatorToListModal={props.openAddCreatorToListModal} setIsEditListModalVisible={props.setIsEditListModalVisible}/>
    </Styles>
  )
}

export default App
