import React from 'react'
import tmdb from '../images/tmdb-logo.png'

const Footer = () => {
  return (
    <a href='https://themoviedb.org' target='_blank' rel="noopener noreferrer">
      <img src={tmdb} className='tmdb-logo' alt='TMDB Logo' />
    </a>
  )
}

export default Footer
