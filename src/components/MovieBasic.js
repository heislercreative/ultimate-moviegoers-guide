import React from 'react'

const MovieBasic = ({ title, release_date, poster, rating, overview }) => {
  return (
    <div>
      <img src={poster} alt={title} />
      <h3>{title} - {rating}</h3>
      <h4>{release_date}</h4>
      <p>{overview}</p>
    </div>
  )
}

export default MovieBasic
