import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Input, Icon } from 'semantic-ui-react'

class SearchBar extends Component {

  constructor() {
    super()
    this.state = {
      text: '',
      query: ''
    }
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  renderSearch = async () => {
    await this.setState({ query: this.state.text.replace(/ /g,'+') })
    if (this.state.query !== '') {
      this.props.history.push(`/search/${this.state.query}`)
      this.setState({ text: '' })
    }
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.renderSearch()
    }
  }

  handleClick = () => {
    this.renderSearch()
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

export default withRouter(SearchBar)
