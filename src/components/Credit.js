import React from 'react'
import { Card, Image } from 'semantic-ui-react'

import placeholder from '../images/placeholder.jpg'

const Credit = ({ name, character, profile_path, job }) => {
  return(
    <Card>
      {profile_path ?
        <Image src={profile_path} /> :
        <Image src={placeholder} />
      }

      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{character}</Card.Meta>
        <Card.Meta>{job}</Card.Meta>
      </Card.Content>
    </Card>
  )
}

export default Credit
