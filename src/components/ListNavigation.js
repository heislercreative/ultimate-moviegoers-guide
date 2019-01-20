import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ListNavigation = ({ current_page, total_pages, total_results, previousPage, nextPage }) => {
  return (
    <div>
      <h3>Page {current_page} of {total_pages} &nbsp;&nbsp;({total_results} results)</h3>

      {(current_page > 1) &&
        <Button icon labelPosition='left' onClick={previousPage}>
          <Icon name='left arrow' />
          Previous
        </Button>}
      {(current_page >= 1 && current_page < total_pages) &&
         <Button icon labelPosition='right' onClick={nextPage}>
         <Icon name='right arrow' />
          Next
         </Button>}
    </div>
  )
}

export default ListNavigation
