import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieActions'

import MovieBasic from '../components/MovieBasic'
import ListNavigation from '../components/ListNavigation'

class MoviesList extends Component {

  componentDidMount() {
    if (this.props.type !== 'search') {
      this.props.actions.fetchMovies(this.props.type, 1, this.props.sort_by)
    }
  }

  previousPage = (e) => {
    if (this.props.type === 'search') {
      this.props.actions.fetchSearchResults(this.props.current_page - 1, this.props.query)
    } else {
      this.props.actions.fetchMovies(this.props.type, this.props.current_page - 1, this.props.sort_by)
    }
  }

  nextPage = (e) => {
    if (this.props.type === 'search') {
      this.props.actions.fetchSearchResults(this.props.current_page + 1, this.props.query)
    } else {
      this.props.actions.fetchMovies(this.props.type, this.props.current_page + 1, this.props.sort_by)
    }
  }

  render() {
    const type = this.props.type
    const movies = this.props.movies
    const current_page = this.props.current_page
    const total_pages = this.props.total_pages
    const total_results = this.props.total_results
    const sort_title = this.props.sort_title

    return (
      <div className='list-container'>
        {type !== 'search' && <h3>{sort_title}</h3>}
        <ListNavigation
          current_page={current_page}
          total_pages={total_pages}
          total_results={total_results}
          previousPage={this.previousPage}
          nextPage={this.nextPage}
          type={type}
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
          type={type}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    sort_by: state.sort_by,
    sort_title: state.sort_title,
    query: state.query,
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
