import React, { Component } from 'react'

import SearchBar from '../components/SearchBar'
import NowPlaying from './NowPlaying'
import SearchResults from './SearchResults'

class MoviesPage extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <SearchResults />
      </div>
    )
  }
}

export default MoviesPage
