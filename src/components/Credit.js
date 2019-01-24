import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Credit = ({ name, character, profile_path, job }) => {
  return(
    <Card>
      <Image src={profile_path} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{character}</Card.Meta>
        <Card.Meta>{job}</Card.Meta>
      </Card.Content>
    </Card>
  )
}

export default Credit
