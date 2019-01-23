import React, { Component } from 'react'
import MoviesList from './MoviesList'


class NowPlaying extends Component {
  render() {
    return (
      <MoviesList type={'now_playing'} />
    )
  }
}

export default NowPlaying
