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

  async componentDidUpdate(previousProps) {
    if (previousProps.query !== this.props.query) {
      this.setState({ loaded: false })
      await this.props.actions.fetchSearchResults(1, this.props.query)
      this.setState({ loaded: true })
    }
  }

  navigate = async (direction) => {
    this.setState({ loaded: false })
    if (this.props.type === 'search') {
      await this.props.actions.fetchSearchResults(this.props.current_page + direction, this.props.query)
    } else {
      await this.props.actions.fetchMovies(this.props.type, this.props.current_page + direction, this.props.min, this.props.max, this.props.sort_by)
    }
    this.setState({ loaded: true })
  }

  render() {
    const { type, results, current_page, total_pages, total_results, sort_title } = this.props

    return (
      <div>
      {this.state.loaded ?
        <div className='list-container'>
          {type !== 'search' && <h3>{sort_title}</h3>}
          <ListNavigation
            current_page={current_page}
            total_pages={total_pages}
            total_results={total_results}
            previousPage={() => this.navigate(-1)}
            nextPage={() => this.navigate(1)}
            type={type}
          />
          {results.map(movie =>
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
          {(type === 'search' && results.length === 0) && <h3>Sorry, no results matched your search.</h3>}
          <ListNavigation
            current_page={current_page}
            total_pages={total_pages}
            total_results={total_results}
            previousPage={() => this.navigate(-1)}
            nextPage={() => this.navigate(1)}
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
    sort_by: state.movies.sort_by,
    sort_title: state.movies.sort_title,
    current_page: state.movies.current_page,
    total_results: state.movies.total_results,
    total_pages: state.movies.total_pages,
    min: state.movies.min,
    max: state.movies.max,
    results: state.movies.results
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)
