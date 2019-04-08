import React from 'react'
import { Link } from 'react-router-dom'
import { Segment, Image } from 'semantic-ui-react'

import placeholder from '../images/placeholder.jpg'

const MovieBasic = ({ id, title, release_date, poster_path, rating, overview }) => {
  return (
    <div className='movie-div'>
      <Link to={`/movie/${id}`}>
        <Segment floated='left' className='movie-card'>
          {poster_path ?
            <Image src={poster_path} size='small' floated='left' className='poster-thumb'/> :
            <Image src={placeholder} size='small' floated='left' className='poster-thumb'/>
          }
          <div className='movie-basic-details'>
            <h3>{title}</h3>
            {rating > 0 && <h4>Rating: {rating}%</h4>}
            {rating === 0 && <h4>Not Rated</h4>}
            <h4>{release_date}</h4>
            <p>{overview}</p>
          </div>
        </Segment>
      </Link>
    </div>
  )
}

export default MovieBasic
