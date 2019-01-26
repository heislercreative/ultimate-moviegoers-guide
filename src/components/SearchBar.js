import React, { Component } from 'react'
import { Input, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieActions'

class SearchBar extends Component {

  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  querify = (query) => {
    window.location.href = `/search/${query.replace(/ /g,'+')}`
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.querify(this.state.text)
    }
  }

  handleClick = () => {
    this.querify(this.state.text)
  }

  render() {
    return(
      <Input
        name='text'
        type='text'
        placeholder='Search movies...'
        icon={<Icon name='search' link onClick={this.handleClick}/>}
        value={this.state.text}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        className='search-bar'
      />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(null, mapDispatchToProps)(SearchBar)
