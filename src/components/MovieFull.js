import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieActions'
import { Modal, Button, Image } from 'semantic-ui-react'

import Credits from './Credits'

class MovieFull extends Component {

  componentDidMount() {
    this.props.actions.fetchCredits(this.props.id)
  }

  render() {
    const id = this.props.id
    const title = this.props.title
    const release_date = this.props.release_date
    const poster = this.props.poster
    const rating = this.props.rating
    const overview = this.props.overview
    const cast = this.props.cast
    const crew = this.props.crew

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
            <Credits cast={cast} crew={crew}/>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

function mapStateToProps(state) {
  return {
    cast: state.selected_movie.credits.cast,
    crew: state.selected_movie.credits.crew
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieFull)
