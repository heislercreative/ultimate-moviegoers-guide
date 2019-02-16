import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Input, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieActions'

class SearchBar extends Component {

  constructor() {
    super()
    this.state = {
      text: '',
      query: '',
      redirect: false
    }
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  setQuery = () => {
    this.setState({
      query: this.state.text.replace(/ /g,'+'),
      redirect: true
    })
  }

  renderRedirect = () => {
    this.setState({
      text: '',
      redirect: false
    })
    return <Redirect to={`/search/${this.state.query}`}/>
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.setQuery()
    }
  }

  handleClick = () => {
    this.setQuery()
  }

  render() {

    return(
      <div>
        {this.state.redirect && this.renderRedirect()}
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
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(null, mapDispatchToProps)(SearchBar)
