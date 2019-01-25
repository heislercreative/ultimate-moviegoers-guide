import React, { Component } from 'react'
import { Segment, Image, Button } from 'semantic-ui-react'

import MovieFull from './MovieFull'
import placeholder from '../images/placeholder.jpg'

class MovieBasic extends Component {

// Change to const format?
  render() {
    const { id, title, release_date, poster_path, rating, overview, type } = this.props

    return (
      <div className='movie-div'>
        <a href={`/movies/${id}`}>
          <Segment floated='left' className='movie-card'>
            {poster_path ?
              <Image src={poster_path} size='small' floated='left' className='poster-thumb'/> :
              <Image src={placeholder} size='small' floated='left' className='poster-thumb'/>
            }
            <div className='movie-basic-details'>
              <h3>{title}</h3>
              {rating > 0 && <h4>Rating: {rating}%</h4>}
              {rating === 0 && <h4>Not Rated</h4>}
              <h4>Released: {release_date}</h4>
              <p>{overview}</p>
            </div>
          </Segment>
        </a>
      </div>
    )
  }
}

export default MovieBasic
