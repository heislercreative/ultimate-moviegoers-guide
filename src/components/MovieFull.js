import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieActions'
import { Segment, Button, Image, Dimmer, Loader } from 'semantic-ui-react'

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
    const { title, release_date, status, poster_path, vote_average, overview } = this.props.movie.details
    const { cast, crew } = this.props.movie.credits

    return (
      <div>
      {this.state.loaded ?
        <Segment className='page-container' padded='very'  textAlign='left'>
            <Segment.Group horizontal>
              <Segment>
                <Image wrapped size='large' src={poster_path} />
              </Segment>
              <Segment>
                <h1>{title}</h1>
                {vote_average > 0 && <Rating rating={vote_average * 10}/>}
                {vote_average === 0 && <h3>Not Rated</h3>}
                {release_date && <h3>Release Date: {release_date}</h3>}
                {status !== 'Released' && <h3>Status: {status}</h3> }
                <p>{overview}</p>
              </Segment>
            </Segment.Group>
          <CreditsList credits={cast} title={'Cast'}/>
          <CreditsList credits={crew} title={'Crew'}/>
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
