import React from 'react'

import Credit from './Credit'

const CreditsList = ({ credits, title }) => {
  return(
    <div className='credits-list'>
      <h2>{title}</h2>
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
  )
}

export default CreditsList
