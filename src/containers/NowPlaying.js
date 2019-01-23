import React, { Component } from 'react'
import MoviesList from './MoviesList'


class NowPlaying extends Component {
  render() {
    return (
      <div>
        <h2>Now Playing</h2>
        <MoviesList type={'now_playing'} />
      </div>
    )
  }
}

export default NowPlaying
