import React from 'react'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <div className="App-header">
    <h1>Ultimate Moviegoers Guide</h1>
    <a href='https://themoviedb.org' target='_blank' rel="noopener noreferrer">
      <img src={logo} className='logo' alt='Logo' />
    </a>
    </div>
  )
}

export default Header
