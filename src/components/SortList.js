import React, { Component } from 'react'
import { Dropdown, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieActions'

class SortList extends Component {

  reFetch = (sort_by) => {
    if (this.props.type === 'now_playing') {
      this.props.actions.fetchNowPlaying(1, sort_by)
    }
  }

  SortAndRefetch = (sort_by) => {
    this.props.actions.setSortMethod(sort_by)
    this.reFetch(sort_by)
  }

  render() {
    return(
      <div>
        <Button onClick={() => this.SortAndRefetch('vote_average.desc')}>
          Top Rated
        </Button>
      </div>
    )
  }
}
function mapStateToProps(state) {}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortList)
