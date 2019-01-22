import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import SortList from '../components/SortList'

const ListNavigation = ({ current_page, total_pages, total_results, previousPage, nextPage, type }) => {

  return (
    <Menu size='mini'>
      <Menu.Item>
        Page {current_page} of {total_pages} &nbsp;&nbsp;({total_results} results)
      </Menu.Item>
      {(current_page > 1) &&
        <Menu.Item onClick={previousPage}>
          <Icon name='left arrow' />
        </Menu.Item>
      }
      {(current_page >= 1 && current_page < total_pages) &&
        <Menu.Item onClick={nextPage}>
          <Icon name='right arrow' />
         </Menu.Item>
       }
       <Menu.Menu position='right'>
         <Menu.Item>
            <SortList type={type}/>
         </Menu.Item>
        </Menu.Menu>
    </Menu>
  )
}

export default ListNavigation
