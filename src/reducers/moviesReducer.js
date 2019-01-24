export default function moviesReducer(state = {
  sort_by: '',
  sort_title: 'Most Popular',
  query: '',
  current_page: '',
  total_results: '',
  total_pages: '',
  movies: [],
  selected_movie: {
    details: {},
    credits: {}
  }
}, action) {
  switch (action.type) {

    case 'FETCH_MOVIES':
      let movies = []
      action.payload.results.map(movie => {
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

    case 'FETCH_MOVIE_WITH_CREDITS':
      const movie = action.payload[0]
      const credits = action.payload[1]

      movie.poster_path = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.poster_path}`

      credits.cast.map(cast => {
        if (cast.profile_path) {
          cast.profile_path = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${cast.profile_path}`
        }
      })
      credits.crew.map(crew => {
        if (crew.profile_path) {
          crew.profile_path = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${crew.profile_path}`
        }
      })

      return {
        ...state,
        selected_movie: {
          details: movie,
          credits: credits
        }
      }


    case 'FETCH_CREDITS':
      action.payload.cast.map(cast => {
        if (cast.profile_path) {
          cast.profile_path = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${cast.profile_path}`
        }
      })
      action.payload.crew.map(crew => {
        if (crew.profile_path) {
          crew.profile_path = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${crew.profile_path}`
        }
      })
      return {
        ...state,
        selected_movie: {
          ...state.selected_movie,
          credits: action.payload
        }
      }

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

    case 'SET_QUERY':
      return {
        ...state,
        query: action.payload
      }

    // case 'FETCH_NOW_PLAYING_DATES':
    //   return {
    //     ...state,
    //     now_playing_max: action.payload.maximum,
    //     now_playing_min: action.payload.minimum
    //   }

    default:
      return state
  }
}
