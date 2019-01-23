import React, { Component } from 'react'
import MoviesList from './MoviesList'


class SearchResults extends Component {
  render() {
    return (
      <MoviesList type={'search'} />
    )
  }
}

export default SearchResults
