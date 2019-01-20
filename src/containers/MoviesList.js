import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieActions'
import { Button, Icon } from 'semantic-ui-react'

import MovieBasic from '../components/MovieBasic'

class MoviesList extends Component {

  componentWillMount() {
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
        {movies.map(movie =>
          <MovieBasic
            key={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            poster={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.poster_path}`}
            rating={movie.vote_average * 10}
            overview={movie.overview}
          />
        )}
        <h3>Page {current_page} of {total_pages} &nbsp;&nbsp;({total_results} results)</h3>

        {(current_page > 1) &&
          <Button icon labelPosition='left' onClick={this.previousPage}>
            <Icon name='left arrow' />
            Previous
          </Button>}
        {(current_page >= 1 && current_page < total_pages) &&
           <Button icon labelPosition='right' onClick={this.nextPage}>
           <Icon name='right arrow' />
            Next
           </Button>}
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
