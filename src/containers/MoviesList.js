import React from 'react'

import MovieBasic from '../components/MovieBasic'
import ListNavigation from '../components/ListNavigation'

const MoviesList = ({ movies, current_page, total_pages, total_results, previousPage, nextPage }) => {

  return (
    <div className='list-container'>
      <ListNavigation
        current_page={current_page}
        total_pages={total_pages}
        total_results={total_results}
        previousPage={previousPage}
        nextPage={nextPage}
      />
      {movies.map(movie =>
        <MovieBasic
          key={movie.id}
          id={movie.id}
          title={movie.title}
          release_date={movie.release_date}
          poster={movie.poster_path}
          rating={movie.vote_average * 10}
          overview={movie.overview}
        />
      )}
      <ListNavigation
        current_page={current_page}
        total_pages={total_pages}
        total_results={total_results}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </div>
  )
}

export default MoviesList
