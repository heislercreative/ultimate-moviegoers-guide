import React from 'react'
import { Card, Image } from 'semantic-ui-react'

import placeholder from '../images/placeholder.jpg'

const Video = ({ name, key, site }) => {
  return(
    <Card className='credit-card'>
      <Card.Content>
        <Card.Header className='credit-card-header'>{name}</Card.Header>
      </Card.Content>
    </Card>
  )
}

export default Video
