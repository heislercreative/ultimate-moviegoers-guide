import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieActions'

import MovieBasic from '../components/MovieBasic'
import ListNavigation from '../components/ListNavigation'

class MoviesList extends Component {

  componentDidMount() {
    this.props.actions.fetchNowPlaying()
  }

  previousPage = (e) => {
    this.props.actions.fetchNowPlaying(this.props.current_page - 1)
  }

  nextPage = (e) => {
    this.props.actions.fetchNowPlaying(this.props.current_page + 1)
  }

  render() {
    const movies = this.props.movies
    const current_page = this.props.current_page
    const total_pages = this.props.total_pages
    const total_results = this.props.total_results

    return (
      <div className='list-container'>
        <ListNavigation
          current_page={current_page}
          total_pages={total_pages}
          total_results={total_results}
          previousPage={this.previousPage}
          nextPage={this.nextPage}
        />
        {movies.map(movie =>
          <MovieBasic
            key={movie.id}
            id={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            poster={movie.poster_path}
            rating={movie.vote_average * 10}
            overview={movie.overview}
          />
        )}
        <ListNavigation
          current_page={current_page}
          total_pages={total_pages}
          total_results={total_results}
          previousPage={this.previousPage}
          nextPage={this.nextPage}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    current_page: state.current_page,
    total_results: state.total_results,
    total_pages: state.total_pages,
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)
