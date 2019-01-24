import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

import Credit from './Credit'

const CreditsList = ({ credits }) => {
  return(
    <Card.Group itemsPerRow={4}>
      {credits.map(credit =>
        <Credit
          name={credit.name}
          character={credit.character}
          job={credit.job}
          profile_path={credit.profile_path}
        />
      )}
    </Card.Group>
  )
}

export default CreditsList
