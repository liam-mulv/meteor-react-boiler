import React from 'react'

// NPM
import _ from 'lodash'
import Highlight from 'react-highlighter'

// Styled Components
import { ReactTagsWrapper, ReactTags, ReactTagsSelectedWrapper, ReactTagsSelected, TagButton, ReactTagsSearch, ReactTagsSuggestions, SearchWrapper } from './FilterBy.sc'
import {SkeletonText} from '../../common/Skeleton.sc'

// Icons
import SearchIcon from '../../icons/search'
import TimesIcon from '../../icons/times'

export default class FilterBy extends React.Component {
 
  constructor(props) {
    super(props)
    this.scrollRef = React.createRef()
    this.searchRef = React.createRef()
    this.wrapperRef = React.createRef()
  }

  state = {
    searchInputValue: '',
    isSearchingTag: false,
    overflowLeft: false,
    overflowRight: false,
    tags: [],
    suggestions: [
      {id: 1, name: 'Arts & Crafts'},
      {id: 2, name: 'Culture & Art'},
      {id: 3, name: 'Design'},
      {id: 4, name: 'Entertainment'},
      {id: 5, name: 'Family'},
      {id: 6, name: 'Fashion'},
      {id: 7, name: 'Finance'},
      {id: 8, name: 'Food & Drinks'},
      {id: 9, name: 'Gaming'},
      {id: 10, name: 'Health & Fitness'},
      {id: 11, name: 'Influencer'},
      {id: 12, name: 'Lifestyle'},
      {id: 13, name: 'Luxury'},
      {id: 14, name: 'Music'},
      {id: 15, name: 'Outdoor'},
      {id: 16, name: 'Pets'},
      {id: 17, name: 'Photography'},
      {id: 18, name: 'Services'},
      {id: 19, name: 'Sports'},
      {id: 20, name: 'Other'},
    ],
    filteredSuggestions: []
  }

  componentDidMount = () => {
    document.addEventListener('mousedown', this.handleClickOutside);
    if (this.scrollRef.current) {
      this.scrollRef.current.addEventListener('scroll', () => {
        this.checkOverflow()
      })
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  componentWillReceiveProps = (nextProps) => {
    if(this.props.filterByWidth !== nextProps.filterByWidth) {
      setTimeout(() => {
        this.checkOverflow()
      }, 200)
    }
  }

  handleClickOutside = (event) => {
    if (!this.wrapperRef.current.contains(event.target)) {
      this.setState({isSearchingTag: false})
      return
    }
  }

  checkOverflow = () => {
    if(this.scrollRef) {
      let distanceOfScroll = this.scrollRef.current.scrollWidth - this.scrollRef.current.clientWidth
      let distanceFromRight = distanceOfScroll - this.scrollRef.current.scrollLeft
      let distanceFromLeft = this.scrollRef.current.scrollLeft

      if(this.scrollRef.current.scrollWidth > this.scrollRef.current.clientWidth) {
        this.setState({overflowLeft: distanceFromLeft > 10, overflowRight: distanceFromRight > 10})
      } else {
        this.setState({overflowLeft: false, overflowRight: false})
      }   
    }
  }

  filterSearch = (e) => {
    this.setState({searchInputValue: e.target.value.toLowerCase()}, () => this.filterTags())
  }

  filterTags = () => {
    let query = this.state.searchInputValue
    let tags = this.state.suggestions
    tags = tags.filter((tag) => {
      return tag.name.toLowerCase().indexOf(query) != -1;
    })
    this.setState({filteredSuggestions: tags})
  }

  activateSearch = () => {
    this.setState({isSearchingTag: true})
  }
 
  handleDelete = (i) => {
    let {suggestions} = this.state
    const tags = this.state.tags.slice(0)
    // Add removed tag back into suggestions & reorder alphabetically
    const removedTag = tags[i]
    suggestions.push(removedTag)
    suggestions = _.orderBy(suggestions, ['name'], ['asc'])

    tags.splice(i, 1)
    this.setState({ tags, suggestions }, () => {
      this.checkOverflow()
      this.filterTags()
    })
  }


  handleAddition = (tag) => {
    let {suggestions} = this.state
    // remove new tag from suggestions
    let mutatedSuggestions = _.remove(suggestions, function(item) {
      return item.id === tag.id
    })
    // Add new tag to tags array
    const tags = [].concat(this.state.tags, tag)
    this.setState({ tags, suggestions }, () => {
      this.searchRef.current.blur()
      this.setState({searchInputValue:'', isSearchingTag: false})
      this.checkOverflow()
      this.filterTags()
      // this.searchRef.current.focus()
      this.scrollRef.current ? (this.scrollRef.current.scrollLeft += this.scrollRef.current.clientWidth) : null
    })
  }
 
  render () {
    const {tags, suggestions, isSearchingTag, overflowLeft, overflowRight, searchInputValue, filteredSuggestions} = this.state
    return (
      <ReactTagsWrapper>
        {!this.props.isLoading ?
            <React.Fragment>
              <h4>Filter By</h4>
              <ReactTags>
                <ReactTagsSelectedWrapper overflowLeft={overflowLeft} overflowRight={overflowRight}>
                  <ReactTagsSelected hidden={!tags.length > 0} ref={this.scrollRef}>
                    {tags.map((tag, i) => {
                      return (
                        <TagButton id={'tag-'+tag.id} key={i} onClick={() => this.handleDelete(i)}>
                          <span>{tag.name} <TimesIcon/></span>
                        </TagButton>
                      )
                    })}
                  </ReactTagsSelected>
                </ReactTagsSelectedWrapper>
                <ReactTagsSearch isFiltering={tags.length > 0} ref={this.wrapperRef}>
                  <SearchWrapper>
                    <SearchIcon/>
                    <input ref={this.searchRef} value={searchInputValue} onChange={(e) => this.filterSearch(e)} placeholder="Search Tags" focus={true} onFocus={() => this.activateSearch()}  />
                  </SearchWrapper>
                  {isSearchingTag &&
                    <ReactTagsSuggestions isFiltering={tags.length > 0}>
                      {!searchInputValue.length > 0 ?
                        <React.Fragment>
                          <ul>
                            {suggestions.map((tag, index) => {
                               return (
                                <li onClick={() => this.handleAddition(tag)}>{tag.name}</li>
                               )
                             })}
                          </ul>
                          {suggestions.length < 1 && <p>No tags left</p>}
                        </React.Fragment>
                      :
                        <React.Fragment>
                          <ul>
                            {filteredSuggestions.map((tag, index) => {
                               return (
                                <li onClick={() => this.handleAddition(tag)}><Highlight search={searchInputValue}>{tag.name}</Highlight></li>
                               )
                             })}
                          </ul>
                          {filteredSuggestions.length < 1 && <p>No tags match</p>}
                        </React.Fragment>
                      }
                    </ReactTagsSuggestions>
                  }
                </ReactTagsSearch>
              </ReactTags>
            </React.Fragment>
          :
          <SkeletonText height="35px" width="250px"/>
        }
        
      </ReactTagsWrapper>
    )
  }
}

