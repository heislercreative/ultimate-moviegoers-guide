import React from 'react'
import { Segment } from 'semantic-ui-react'

const shape = { width: 95, height: 95 }

const Rating = ({ rating }) => {
  return(
    <Segment className='rating-badge' circular style={shape}>
      <h3>{rating}%</h3>
    </Segment>
  )
}

export default Rating
