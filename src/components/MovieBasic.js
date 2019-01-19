import React from 'react'

const MovieBasic = ({ title, release_date, poster, rating, overview }) => {
  return (
    <div className='movie-div'>
      <img src={poster} alt={title} className='poster-thumb'/>
      <div className='movie-basic-details'>
        <h3>{title} - {rating}</h3>
        <h4>{release_date}</h4>
        <p>{overview}</p>
      </div>
    </div>
  )
}

export default MovieBasic
