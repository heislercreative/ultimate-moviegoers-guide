import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieActions'

import MovieBasic from '../components/MovieBasic'

class MoviesList extends Component {

  componentWillMount() {
    this.props.actions.fetchNowPlaying()
  }

  render() {
    return (
      <div className='list-container'>
        {this.props.movies.map(movie =>
          <MovieBasic
            key={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            poster={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.poster_path}`}
            rating={movie.vote_average}
            overview={movie.overview}
          />
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { movies: state.movies }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)
