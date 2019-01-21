export default function moviesReducer(state = {
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
          m = {...movie, poster_path: 'https://heislercreative.com/wp-content/uploads/2019/01/blank_poster.jpg'}
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
