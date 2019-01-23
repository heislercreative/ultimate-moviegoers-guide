import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieActions'
import { Modal, Button, Image } from 'semantic-ui-react'

import Credits from './Credits'

class MovieFull extends Component {

  componentDidMount() {
    this.props.actions.fetchMovie(this.props.id)
  }

  render() {
    const title = this.props.movie.details.title
    const release_date = this.props.movie.details.release_date
    const poster = this.props.movie.details.poster
    const rating = this.props.movie.details.rating
    const overview = this.props.movie.details.overview
    // const cast = this.props.movie.credits.cast
    // const crew = this.props.movie.credits.crew

    return (
      <Modal defaultOpen={true}>
        <Modal.Content image>
          <Image wrapped size='huge' src={poster} />
          <Modal.Description>
            <h1>{title}</h1>
            {rating > 0 && <h3>Rating: {rating}%</h3>}
            {rating === 0 && <h3>Not Rated</h3>}
            <h4>{release_date}</h4>
            <p>{overview}</p>
            {/*<Credits cast={cast} crew={crew}/>*/}
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
