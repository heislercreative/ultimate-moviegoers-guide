import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieActions'

import MoviesList from './MoviesList'

class Upcoming extends Component {
  constructor() {
    super()
    this.state = {
      loaded: false
    }
  }

  async componentDidMount() {
    await this.props.actions.fetchDates('upcoming')
    this.setState({ loaded: true })
  }

  render() {
    return (
      <div>
        <h2 className='title'>Upcoming Movies</h2>
        {this.state.loaded ?
          <MoviesList type={'upcoming'} /> : null
        }
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(null, mapDispatchToProps)(Upcoming)
