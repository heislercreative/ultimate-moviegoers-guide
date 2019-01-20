export default function moviesReducer(state = {
  current_page: '',
  total_results: '',
  total_pages: '',
  movies: []
}, action) {
  switch (action.type) {
    case 'FETCH_MOVIES':
      return {
        current_page: action.payload.page,
        total_results: action.payload.total_results,
        total_pages: action.payload.total_pages,
        movies: action.payload.results
      }

    default:
      return state
  }
}
