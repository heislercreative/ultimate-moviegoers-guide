import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieActions'
import { Modal, Button, Image } from 'semantic-ui-react'

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
    // this.props.actions.fetchMovie(this.props.id)
    // this.props.actions.fetchCredits(this.props.id)
  }

  render() {
    const { title, release_date, poster_path, rating, overview } = this.props.movie.details
    const { id, cast, crew } = this.props.movie.credits

    return (
      <Modal defaultOpen={true}>
        <Modal.Content image>
          <Image wrapped size='huge' src={poster_path} />
          <Modal.Description>
            <h1>{title}</h1>
            {rating > 0 && <h3>Rating: {rating}%</h3>}
            {rating === 0 && <h3>Not Rated</h3>}
            <h4>{release_date}</h4>
            <p>{overview}</p>
            {this.state.loaded ?
              <div>
                <CreditsList credits={cast} title={'Cast'}/>
                <CreditsList credits={crew} title={'Crew'}/>
              </div>
              : null
            }

          </Modal.Description>
        </Modal.Content>
      </Modal>
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
