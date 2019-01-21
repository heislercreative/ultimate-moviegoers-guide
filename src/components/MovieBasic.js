import React, { Component } from 'react'
import { Segment, Image, Button } from 'semantic-ui-react'
import MovieFull from './MovieFull'

class MovieBasic extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showComponent: false
    }
  }

  handleClick = () => {
    this.setState({
      showComponent: true
    })
  }

  render() {
    const id = this.props.id
    const title = this.props.title
    const release_date = this.props.release_date
    const poster = this.props.poster
    const rating = this.props.rating
    const overview = this.props.overview

    return (
      <div>
        <Segment floated='left' className='movie-card'>
          <Image src={poster} size='small' floated='left' className='poster-thumb'/>
          <div className='movie-basic-details'>
            <h3>{title}</h3>
            {rating > 0 && <h4>Rating: {rating}%</h4>}
            {rating === 0 && <h4>Not Rated</h4>}
            <h4>{release_date}</h4>
            <p>{overview}</p>
          </div>
        </Segment>
        <Button onClick={this.handleClick}>More Info</Button>
        {this.state.showComponent &&
          <MovieFull
            id={id}
            title={title}
            release_date={release_date}
            poster={poster}
            rating={rating}
            overview={overview}
          />
        }
      </div>
    )
  }
}

export default MovieBasic
