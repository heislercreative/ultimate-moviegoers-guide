import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieActions'

class SortList extends Component {

  reFetch = (sort_by) => {
    this.props.actions.fetchMovies(this.props.type, 1, sort_by)
  }

  SortAndRefetch = (sort_by) => {
    this.props.actions.setSortMethod(sort_by)
    if (this.props.sort_by !== sort_by) {
      this.reFetch(sort_by)
    } else if (this.props.type === 'upcoming') {
      this.props.actions.fetchMovies(this.props.type, 1, sort_by)
    }
  }

  render() {
    return(
      <div>
        <Dropdown text='Sort By'>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => this.SortAndRefetch('popularity.desc')}>
              Most Popular
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.SortAndRefetch('vote_average.desc')}>
              Top Rated
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.SortAndRefetch('release_date.desc')}>
              Release Date (Descending)
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.SortAndRefetch('release_date.asc')}>
              Release Date (Ascending)
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    sort_by: state.sort_by
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortList)
