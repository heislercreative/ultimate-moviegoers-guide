import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

import Credit from './Credit'

const CreditsList = ({ credits, title }) => {
  return(
    <div className='credits-list'>
      <h2>{title}</h2>
        {credits.map(credit =>
          <Credit
            name={credit.name}
            character={credit.character}
            job={credit.job}
            profile_path={credit.profile_path}
          />
        )}
    </div>
  )
}

export default CreditsList
