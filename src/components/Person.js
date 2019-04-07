import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/personActions'
import { Segment, Divider, Dimmer, Loader } from 'semantic-ui-react'

import CreditsList from './CreditsList'

class Person extends Component {

  constructor() {
    super()
    this.state = {
      loaded: false
    }
  }

  async componentDidMount() {
    await this.props.actions.fetchPerson(this.props.id)
    this.setState({ loaded: true })
  }

  render() {
    const { name, profile_path, birthday, deathday, biography } = this.props.movie.details
    const { cast, crew } = this.props.movie.credits
    const videos = this.props.movie.videos

    return (
      <div>
      {this.state.loaded ?
        <Segment className='page-container' padded='very'  textAlign='left' >
          <h1>{name} ({release_date.slice(0,4)})</h1>
          <img src={profile_path} className='poster-full' alt={title}/>
          <div className='movie-details'>
            <span><strong>Born &nbsp;|&nbsp;</strong> {birthday}</span>
            <br/><br/>
            {deathday && <span><strong>Died &nbsp;|&nbsp;</strong> {deathday}</span>}
          </div>
          {biography &&
            <div className='overview'>
              <h3>Biography</h3>
              <p>{biography}</p>
            </div>
          }
          <Divider hidden clearing/>
          {cast.length > 0 &&
            <CreditsList credits={cast} title={'Cast'}/>
          }
          {crew.length > 0 &&
            <CreditsList credits={crew} title={'Crew'}/>
          }
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
    id: ownProps.match.params.personId,
    person: state.selected_person
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Person)
