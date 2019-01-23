import React, { Component } from 'react'
import MoviesList from './MoviesList'


class SearchResults extends Component {
  render() {
    return (
      <div>
        <h2>Search Results</h2>
        <MoviesList type={'search'} />
      </div>
    )
  }
}

export default SearchResults
