import React, { Component } from 'react'

import SearchBar from '../components/SearchBar'
import NowPlaying from './NowPlaying'
import Upcoming from './Upcoming'
import SearchResults from './SearchResults'

class MoviesPage extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Upcoming />
      </div>
    )
  }
}

export default MoviesPage
