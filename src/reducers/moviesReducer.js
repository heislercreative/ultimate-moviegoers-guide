export default function moviesReducer(state = {
  sort_by: '',
  sort_title: 'Most Popular',
  current_page: '',
  total_results: '',
  total_pages: '',
  movies: [],
  selected_movie: {
    credits: {}
  }
}, action) {
  switch (action.type) {
    case 'FETCH_MOVIES':
      const edited = []
      action.payload.results.map(movie => {
        let m = {...movie, poster_path: `https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.poster_path}`}
        if (m.poster_path.includes('null')) {
          m = {...movie, poster_path: null}
        }
        edited.push(m)
      })
      return {
        ...state,
        current_page: action.payload.page,
        total_results: action.payload.total_results,
        total_pages: action.payload.total_pages,
        movies: edited
      }
    case 'FETCH_CREDITS':
      return {
        ...state,
        selected_movie: {
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
        sort_title = 'Release Date (Most Recent)'
      } else if (sort_by === 'release_date.asc') {
        sort_title = 'Release Date (Least Recent)'
      }
      return {
        ...state,
        sort_by: sort_by,
        sort_title: sort_title
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
