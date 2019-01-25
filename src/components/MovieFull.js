import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieActions'
import { Segment, Button, Image, Dimmer, Loader } from 'semantic-ui-react'

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
    const { title, release_date, poster_path, rating, overview } = this.props.movie.details
    const { cast, crew } = this.props.movie.credits

    return (
      <div>
      {this.state.loaded ?
        <Segment className='page-container' padded='very'  textAlign='left'>
          <Image wrapped size='huge' src={poster_path} />
            <h1>{title}</h1>
            {rating > 0 && <h3>Rating: {rating}%</h3>}
            {rating === 0 && <h3>Not Rated</h3>}
            <h4>{release_date}</h4>
            <p>{overview}</p>
            <div>
              <CreditsList credits={cast} title={'Cast'}/>
            </div>
            <div>
              <CreditsList credits={crew} title={'Crew'}/>
            </div>
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
