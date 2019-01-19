import React, { Component } from 'react'

import MovieBasic from '../components/MovieBasic'

class MoviesList extends Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    // Move fetch logic to Redux action
    const api_key = process.env.REACT_APP_API_KEY
    const proxyURL = 'https://cors-anywhere.herokuapp.com/' //Due to fetch CORS error, could be avoided if requested server-side
    let targetURL = `https://api.themoviedb.org/3/movie/now_playing/?api_key=${api_key}`
    fetch(proxyURL + targetURL)
      .then(resp => resp.json())
      .then(movies => {
        this.setState({
          movies: movies.results
        })
        console.log(this.state.movies)
      })
      .then()
      .catch(e => {
        console.log(e)
        return e
      })
  }

  render() {
    return (
      <div>
        <MovieBasic />
      </div>
    )
  }
}

export default MoviesList
