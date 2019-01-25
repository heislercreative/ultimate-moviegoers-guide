import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieActions'
import { Dimmer, Loader } from 'semantic-ui-react'

import MovieBasic from '../components/MovieBasic'
import ListNavigation from '../components/ListNavigation'

class MoviesList extends Component {

  constructor() {
    super()
    this.state = {
      loaded: false
    }
  }

  async componentDidMount() {
    if (this.props.type === 'search') {
      await this.props.actions.fetchSearchResults(1, this.props.query)
    } else {
      await this.props.actions.fetchMovies(this.props.type, 1, this.props.min, this.props.max, this.props.sort_by)
    }
    this.setState({ loaded: true })
  }

  previousPage = async (e) => {
    this.setState({ loaded: false })
    if (this.props.type === 'search') {
      await this.props.actions.fetchSearchResults(this.props.current_page - 1, this.props.query)
    } else {
      await this.props.actions.fetchMovies(this.props.type, this.props.current_page - 1, this.props.min, this.props.max, this.props.sort_by)
    }
    this.setState({ loaded: true })
  }

  nextPage = async (e) => {
    this.setState({ loaded: false })
    if (this.props.type === 'search') {
      await this.props.actions.fetchSearchResults(this.props.current_page + 1, this.props.query)
    } else {
      await this.props.actions.fetchMovies(this.props.type, this.props.current_page + 1, this.props.min, this.props.max, this.props.sort_by)
    }
    this.setState({ loaded: true })
  }

  render() {
    const { type, movies, current_page, total_pages, total_results, sort_title } = this.props

    return (
      <div>
      {this.state.loaded ?
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
              poster_path={movie.poster_path}
              rating={movie.vote_average * 10}
              overview={movie.overview}
              type={type}
              status={movie.status}
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
        :
        <Dimmer active inverted>
          <Loader />
        </Dimmer>
      }
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    sort_by: state.sort_by,
    sort_title: state.sort_title,
    current_page: state.current_page,
    total_results: state.total_results,
    total_pages: state.total_pages,
    min: state.min,
    max: state.max,
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)
