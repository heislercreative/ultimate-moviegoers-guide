import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <div className="App-header">
      <Link to={'/'}>
        <img src={logo} class='logo' alt='Logo' />
      </Link>
    </div>
  )
}

export default Header
