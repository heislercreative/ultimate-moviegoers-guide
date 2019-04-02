import React, { Component } from 'react'
import { connect } from 'react-redux'

import MoviesList from './MoviesList'


class SearchResults extends Component {
  render() {
    const query = this.props.query

    return (
      <div>
        <h2 className='title'>Search Results</h2>
        <MoviesList type={'search'} query={query}/>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    query: ownProps.match.params.query
  }
}
export default connect(mapStateToProps, null)(SearchResults)
