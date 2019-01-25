import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieActions'

import MoviesList from './MoviesList'

class NowPlaying extends Component {
  constructor() {
    super()
    this.state = {
      loaded: false
    }
  }

  async componentDidMount() {
    await this.props.actions.fetchDates('now_playing')
    this.setState({ loaded: true })
  }

  render() {
    return (
      <div>
        <h2>Now Playing</h2>
        {this.state.loaded ?
          <MoviesList type={'now_playing'} /> : null
        }
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(null, mapDispatchToProps)(NowPlaying)
