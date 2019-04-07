const base_url = 'https://api.themoviedb.org/3'
const api_key = process.env.REACT_APP_API_KEY

// Fetch person details for individual profiles
export function fetchPerson(id) {
  const movie = fetch(`${base_url}/person/${id}?api_key=${api_key}`)
    .then(resp => resp.json())

  const credits = fetch(`${base_url}/person/${id}/movie_credits?api_key=${api_key}`)
    .then(resp => resp.json())

  return (dispatch) => {
    dispatch({ type: 'LOADING_PERSON_WITH_CREDITS'})
    return Promise.all([ movie, credits ])
      .then(values => dispatch({
        type: 'FETCH_PERSON_WITH_CREDITS',
        payload: values
      }))
  }
}

// Person search (potential future feature)
