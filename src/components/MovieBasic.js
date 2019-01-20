import React from 'react'
import { Segment, Image } from 'semantic-ui-react'

const MovieBasic = ({ title, release_date, poster, rating, overview }) => {
  return (
    <Segment floated='left' className='movie-card'>
      {poster && <Image src={poster} size='small' floated='left' className='poster-thumb'/>}
      <div className='movie-basic-details'>
        <h3>{title}</h3>
        {rating > 0 && <h4>Rating: {rating}%</h4>}
        {rating === 0 && <h4>Not Rated</h4>}
        <h4>{release_date}</h4>
        <p>{overview}</p>
      </div>
    </Segment>
  )
}

export default MovieBasic
