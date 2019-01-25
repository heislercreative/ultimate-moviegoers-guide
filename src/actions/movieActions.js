const api_key = process.env.REACT_APP_API_KEY
const proxyURL = 'https://cors-escape.herokuapp.com/' //Due to fetch CORS error, could be avoided if requested server-side

// Fetching Actions
export function fetchDates(type) {
  let targetURL = `https://api.themoviedb.org/3/movie/${type}/?api_key=${api_key}&region=US&language=en-US`

  return (dispatch) => {
    dispatch({ type: 'LOADING_MOVIES' })
    return fetch(proxyURL + targetURL)
      .then(resp => resp.json())
      .then(hash => dispatch({
        type: 'FETCH_DATES',
        payload: hash.dates
      }))
  }
}


export function fetchMovies(type, page, min, max, sort_by) {
  let targetURL = `https://api.themoviedb.org/3/discover/movie/?api_key=${api_key}&region=US&language=en-US&with_release_type=2|3&primary_release_date.gte=${min}&primary_release_date.lte=${max}&page=${page}&sort_by=${sort_by}`

  return (dispatch) => {
    dispatch({ type: 'LOADING_MOVIES' })
    return fetch(proxyURL + targetURL)
      .then(resp => resp.json())
      .then(movies => dispatch({
        type: 'FETCH_MOVIES',
        payload: movies
      }))
  }
}

export function fetchSearchResults(page, query) {
  let targetURL = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&include_adult=false&page=${page}&query=${query}`

  console.log(targetURL)

  return (dispatch) => {
    dispatch({ type: 'LOADING_MOVIES' })
    return fetch(proxyURL + targetURL)
      .then(resp => resp.json())
      .then(movies => dispatch({
        type: 'FETCH_MOVIES',
        payload: movies
      }))
  }
}

// export function fetchMovie(id) {
//   let targetURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
//
//   console.log(targetURL)
//
//   return (dispatch) => {
//     dispatch({ type: 'LOADING_MOVIE' })
//     return fetch(proxyURL + targetURL)
//       .then(resp => resp.json())
//       .then(movie => dispatch({
//         type: 'FETCH_MOVIE',
//         payload: movie
//       }))
//   }
// }

export function fetchMovieWithCredits(id) {
  const movie = fetch(proxyURL + `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
    .then(resp => resp.json())

  const credits = fetch(proxyURL + `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`)
    .then(resp => resp.json())

  return (dispatch) => {
    dispatch({ type: 'LOADING_MOVIE_WITH_CREDITS'})
    return Promise.all([ movie, credits ])
      .then(values => dispatch({
        type: 'FETCH_MOVIE_WITH_CREDITS',
        payload: values
      }))
  }
}

// export function fetchCredits(id) {
//   let targetURL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`
//
//   console.log(targetURL)
//
//   return (dispatch) => {
//     dispatch({ type: 'LOADING_CREDITS' })
//     return fetch(proxyURL + targetURL)
//       .then(resp => resp.json())
//       .then(credits => dispatch({
//         type: 'FETCH_CREDITS',
//         payload: credits
//       }))
//   }
// }

export function setSortMethod(sort_by) {
  return (dispatch) => {
    dispatch({
      type: 'SET_SORT_METHOD',
      payload: sort_by
    })
  }
}
