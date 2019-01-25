import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'

class Rating extends Component {

  constructor() {
    super()
    this.state = {
      color: ''
    }
  }

  componentDidMount() {
    const r = this.props.rating
    if (r >= 70) {
      this.setState({ color: 'green' })
    } else if (r >= 50) {
      this.setState({ color: 'yellow' })
    } else {
      this.setState({ color: 'red' })
    }
  }

  render() {
    const rating = this.props.rating

    return(
      <Segment className={'rating-badge'} circular  color={this.state.color} >
        <h3>{rating}%</h3>
      </Segment>
    )
  }
}

export default Rating
