import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieActions'

import MoviesList from './MoviesList'


class NowPlaying extends Component {

  componentDidMount() {
    this.props.actions.fetchNowPlaying(1, this.props.sort_by)
  }

  previousPage = (e) => {
    this.props.actions.fetchNowPlaying(this.props.current_page - 1, this.props.sort_by)
  }

  nextPage = (e) => {
    this.props.actions.fetchNowPlaying(this.props.current_page + 1, this.props.sort_by)
  }

  render() {
    const movies = this.props.movies
    const current_page = this.props.current_page
    const total_pages = this.props.total_pages
    const total_results = this.props.total_results

    return (
      <MoviesList
        type={'now_playing'}
        movies={movies}
        current_page={current_page}
        total_pages={total_pages}
        total_results={total_results}
        reFetch={this.reFetch}
        previousPage={this.previousPage}
        nextPage={this.nextPage}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    sort_by: state.sort_by,
    current_page: state.current_page,
    total_results: state.total_results,
    total_pages: state.total_pages,
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying)
