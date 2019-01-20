import React from 'react'
import { Segment, Image } from 'semantic-ui-react'

const MovieBasic = ({ title, release_date, poster, rating, overview }) => {
  return (
    <Segment floated='left' className='movie-card'>
      {poster && <Image src={poster} size='small' floated='left' className='poster-thumb'/>}
      <div className='movie-basic-details'>
        <h2>{title}</h2>
        {rating > 0 && <h3>Rating: {rating}%</h3>}
        {rating == 0 && <h3>Not Rated</h3>}
        <h4>{release_date}</h4>
        <p>{overview}</p>
      </div>
    </Segment>
  )
}

export default MovieBasic
