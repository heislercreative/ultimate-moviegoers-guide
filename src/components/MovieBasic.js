import React from 'react'
import { Segment, Image } from 'semantic-ui-react'

const MovieBasic = ({ title, release_date, poster, rating, overview }) => {
  return (
    <Segment floated='left' className='movie-card'>
      <Image src={poster} size='small' floated='left' className='poster-thumb'/>
      <div className='movie-basic-details'>
        <h2>{title}</h2>
        <h3>{rating}%</h3>
        <h4>{release_date}</h4>
        <p>{overview}</p>
      </div>
    </Segment>
  )
}

export default MovieBasic
