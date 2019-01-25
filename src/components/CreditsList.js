import React from 'react'
import { Segment } from 'semantic-ui-react'

import Credit from './Credit'

const CreditsList = ({ credits, title }) => {
  return(
    <Segment>
      <h2>{title}</h2>
      <div className='credits-container'>
        <div className='credits-list'>
          {credits.map(credit =>
            <Credit
              key={credit.credit_id}
              name={credit.name}
              character={credit.character}
              job={credit.job}
              profile_path={credit.profile_path}
            />
          )}
        </div>
      </div>
    </Segment>
  )
}

export default CreditsList
