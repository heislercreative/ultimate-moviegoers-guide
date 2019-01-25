import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieActions'
import { Segment, Divider, Dimmer, Loader } from 'semantic-ui-react'

import Rating from './Rating'
import CreditsList from './CreditsList'

class MovieFull extends Component {

  constructor() {
    super()
    this.state = {
      loaded: false
    }
  }

  async componentDidMount() {
    await this.props.actions.fetchMovieWithCredits(this.props.id)
    this.setState({ loaded: true })
  }

  render() {
    const { title, poster_path, vote_average, release_date, status, genres, runtime, overview } = this.props.movie.details
    const { cast, crew } = this.props.movie.credits

    return (
      <div>
      {this.state.loaded ?
        <Segment className='page-container' padded='very'  textAlign='left' >
          <h1>{title} ({release_date.slice(0,4)})</h1>
          <img src={poster_path} className='poster-full' alt={title}/>
          <div className='movie-details'>
            {vote_average > 0 && <Rating rating={vote_average * 10}/>}
            {vote_average === 0 && <h3>Not Rated</h3>}
            {release_date && <h3>Release Date &nbsp;|&nbsp; {release_date}</h3>}
            {status !== 'Released' && <h3>Status: {status}</h3> }
            <br/>
            <strong>Genres &nbsp;|&nbsp;</strong>
            {genres.map(genre =>
              <span> {genre.name} &nbsp;&nbsp;</span>
            )}
            <br/><br/>
            {runtime && <span><strong>Runtime &nbsp;|&nbsp;</strong> {runtime} minutes</span>}
          </div>
          {overview &&
            <div className='overview'>
              <h3>Overview</h3>
              <p>{overview}</p>
            </div>
          }
          <Divider hidden clearing/>
          {cast.length > 0 &&
            <CreditsList credits={cast} title={'Cast'}/>
          }
          {crew.length > 0 &&
            <CreditsList credits={crew} title={'Crew'}/>
          }
        </Segment>
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
    id: ownProps.match.params.movieId,
    movie: state.selected_movie
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieFull)
