export default function moviesReducer(state = {
  sort_title: 'Most Popular',
  sort_by: 'popularity.desc'
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
        results: action.payload.results
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
