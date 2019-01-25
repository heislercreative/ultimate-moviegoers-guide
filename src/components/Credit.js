import React from 'react'
import { Card, Image } from 'semantic-ui-react'

import placeholder from '../images/placeholder.jpg'

const Credit = ({ name, character, profile_path, job }) => {
  return(
    <Card className='credit-card'>
      {profile_path ?
        <Image src={profile_path} /> :
        <Image src={placeholder} />
      }

      <Card.Content>
        <Card.Header className='credit-card-header'>{name}</Card.Header>
        <Card.Meta className='credit-card-meta'>{character}</Card.Meta>
        <Card.Meta className='credit-card-meta'>{job}</Card.Meta>
      </Card.Content>
    </Card>
  )
}

export default Credit
