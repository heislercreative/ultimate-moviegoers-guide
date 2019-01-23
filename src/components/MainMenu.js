import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const MainMenu = () => {
  return(
    <Menu>
      <Menu.Item
        as={Link} to='/now-playing'
        name='Now Playing'
      />
      <Menu.Item
        as={Link} to='/upcoming'
        name='Upcoming'
      />
      <Menu.Menu position='right'>
        <Menu.Item>
          <SearchBar />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default MainMenu
