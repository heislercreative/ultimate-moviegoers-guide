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
    const { name, profile_path, birthday, deathday, biography, gender } = this.props.person.details
    const { cast, crew } = this.props.person.credits

    return (
      <div>
      {this.state.loaded ?
        <Segment className='page-container' padded='very'  textAlign='left' >
          <h1>{name}</h1>
          <img src={profile_path} className='poster-full' alt={name}/>
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
          {(cast.length > 0 && gender === 1 ) &&
            <CreditsList credits={cast} title={'Actress'}/>
          }
          {(cast.length > 0 && gender === 2 ) &&
            <CreditsList credits={cast} title={'Actor'}/>
          }
          {crew.length > 0 &&
            <CreditsList credits={crew} title={'Crew Member'}/>
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
