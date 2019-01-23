import React, { Component } from 'react'
import MoviesList from './MoviesList'


class Upcoming extends Component {
  render() {
    return (
      <MoviesList type={'upcoming'} />
    )
  }
}

export default Upcoming
