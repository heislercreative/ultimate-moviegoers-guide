import React, { Component } from 'react'
import { Menu, Input, Form, Button, Icon } from 'semantic-ui-react'
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

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.actions.fetchSearchResults(1, this.state.text)
    }
  }

  handleClick = () => {
    this.props.actions.fetchSearchResults(1, this.state.text)
  }

  render() {
    return(
      <Input
        name='text'
        type='text'
        placeholder='Search for a movie'
        size='large'
        icon={<Icon name='search' link onClick={this.handleClick}/>}
        value={this.state.text}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(null, mapDispatchToProps)(SearchBar)
