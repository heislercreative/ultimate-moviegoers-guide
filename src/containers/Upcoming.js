import React, { Component } from 'react'
import MoviesList from './MoviesList'


class Upcoming extends Component {
  render() {
    return (
      <div>
        <h2>Upcoming Movies</h2>
        <MoviesList type={'upcoming'} />
      </div>
    )
  }
}

export default Upcoming
