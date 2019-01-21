import React, { Component } from 'react'
import { Dropdown, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieActions'

class SortList extends Component {

  reFetch = (e, sort_by) => {
    if (this.props.type === 'now_playing') {
      this.props.actions.fetchNowPlaying(1, '&sort_by=vote_average.desc')
    }
  }

  render() {
    return(
      <Button onClick={this.reFetch}>Top Rated</Button>
    )
  }
}
function mapStateToProps(state) {}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortList)
