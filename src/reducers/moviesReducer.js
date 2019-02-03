export default function moviesReducer(state = {
  sort_by: '',
  sort_title: 'Most Popular',
  current_page: '',
  total_results: '',
  total_pages: '',
  min: '',
  max: '',
  movies: [],
  selected_movie: {
    details: {},
    credits: {},
    videos: {}
  }
}, action) {
  switch (action.type) {

    case 'FETCH_MOVIES':
      action.payload.results.forEach(movie => {
        if (movie.poster_path) {
          movie.poster_path = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.poster_path}`
        }
      })
      return {
        ...state,
        current_page: action.payload.page,
        total_results: action.payload.total_results,
        total_pages: action.payload.total_pages,
        movies: action.payload.results
      }

    // case 'FETCH_MOVIE':
    //   const movie = action.payload
    //   movie.poster_path = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.poster_path}`
    //   return {
    //     ...state,
    //     selected_movie: {
    //       ...state.selected_movie,
    //       details: movie
    //     }
    //   }

    case 'FETCH_MOVIE_WITH_CREDITS_AND_VIDEOS':
      const movie = action.payload[0]
      const credits = action.payload[1]
      const videos = action.payload[2]

      movie.poster_path = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.poster_path}`

      credits.cast.forEach(cast => {
        if (cast.profile_path) {
          cast.profile_path = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${cast.profile_path}`
        }
      })
      credits.crew.forEach(crew => {
        if (crew.profile_path) {
          crew.profile_path = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${crew.profile_path}`
        }
      })

      return {
        ...state,
        selected_movie: {
          details: movie,
          credits: credits,
          videos: videos.results
        }
      }

    // case 'FETCH_CREDITS':
    //   action.payload.cast.map(cast => {
    //     if (cast.profile_path) {
    //       cast.profile_path = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${cast.profile_path}`
    //     }
    //   })
    //   action.payload.crew.map(crew => {
    //     if (crew.profile_path) {
    //       crew.profile_path = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${crew.profile_path}`
    //     }
    //   })
    //   return {
    //     ...state,
    //     selected_movie: {
    //       ...state.selected_movie,
    //       credits: action.payload
    //     }
    //   }

    case 'SET_SORT_METHOD':
      let sort_title = ''
      const sort_by = action.payload
      if (sort_by === 'popularity.desc') {
        sort_title = 'Most Popular'
      } else if (sort_by === 'vote_average.desc') {
        sort_title = 'Top Rated'
      } else if (sort_by === 'release_date.desc') {
        sort_title = 'Release Date (Desc)'
      } else if (sort_by === 'release_date.asc') {
        sort_title = 'Release Date (Ascending)'
      }
      return {
        ...state,
        sort_by: sort_by,
        sort_title: sort_title
      }

    case 'FETCH_DATES':
      return {
        ...state,
        max: action.payload.maximum,
        min: action.payload.minimum
      }

    default:
      return state
  }
}
