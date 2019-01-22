import React, { Component } from 'react'

import SearchBar from '../components/SearchBar'
import NowPlaying from './NowPlaying'

class MoviesPage extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <NowPlaying />
      </div>
    )
  }
}

export default MoviesPage
