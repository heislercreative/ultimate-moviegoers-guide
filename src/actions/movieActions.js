const api_key = process.env.REACT_APP_API_KEY
const proxyURL = 'https://cors-anywhere.herokuapp.com/' //Due to fetch CORS error, could be avoided if requested server-side

// Fetching Actions
export function fetchMovies(type, page, sort_by) {
  let targetURL = `https://api.themoviedb.org/3/movie/${type}/?api_key=${api_key}&region=US&language=en-US`

  console.log(targetURL)

  return (dispatch) => {
    dispatch({ type: 'LOADING_MOVIES' })
    return fetch(proxyURL + targetURL)
      .then(resp => resp.json())
      .then(hash => {
        let targetURL = `https://api.themoviedb.org/3/discover/movie/?api_key=${api_key}&region=US&language=en-US&with_release_type=2|3&primary_release_date.gte=${hash.dates.minimum}&primary_release_date.lte=${hash.dates.maximum}&page=${page}&sort_by=${sort_by}`

        console.log(targetURL)

        return fetch(proxyURL + targetURL)
          .then(resp => resp.json())
          .then(movies => dispatch({
            type: 'FETCH_MOVIES',
            payload: movies
          }))
      })
  }
}

export function fetchSearchResults(page, query) {
  let q = query.replace(' ','+')
  let targetURL = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&include_adult=false&page=${page}&query=${q}`

  console.log(targetURL)

  return (dispatch) => {
    dispatch({
      type: 'SET_QUERY',
      payload: q
    })

    dispatch({ type: 'LOADING_MOVIES' })
    return fetch(proxyURL + targetURL)
      .then(resp => resp.json())
      .then(movies => dispatch({
        type: 'FETCH_MOVIES',
        payload: movies
      }))
  }
}

export function fetchCredits(id) {
  let targetURL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`

  console.log(targetURL)

  return (dispatch) => {
    dispatch({ type: 'LOADING_CREDITS' })
    return fetch(proxyURL + targetURL)
      .then(resp => resp.json())
      .then(credits => dispatch({
        type: 'FETCH_CREDITS',
        payload: credits
      }))
  }
}

// Sorting Action(s)
export function setSortMethod(sort_by) {
  return (dispatch) => {
    dispatch({
      type: 'SET_SORT_METHOD',
      payload: sort_by
    })
  }
}


// export function fetchNowPlaying(min, max, page) {
//   let targetURL = `https://api.themoviedb.org/3/discover/movie/?api_key=${api_key}&region=US&language=en-US&with_release_type=2|3&release_date.gte=${min}&release_date.lte=${max}&page=${page}`
//
//   console.log(targetURL)
//
//   return (dispatch) => {
//     dispatch({ type: 'LOADING_MOVIES' })
//     return fetch(proxyURL + targetURL)
//       .then(resp => resp.json())
//       .then(movies => dispatch({
//         type: 'FETCH_MOVIES',
//         payload: movies
//       }))
//       // .then()
//       // .catch(e => {
//       //   console.log(e)
//       //   return e
//       // })
//   }
// }
//
//
// export function fetchNowPlayingDates() {
//   let targetURL = `https://api.themoviedb.org/3/movie/now_playing/?api_key=${api_key}&region=US&language=en-US`
//
//   return (dispatch) => {
//     dispatch({ type: 'LOADING_MOVIES' })
//     return fetch(proxyURL + targetURL)
//       .then(resp => resp.json())
//       .then(hash => dispatch({
//         type: 'FETCH_NOW_PLAYING_DATES',
//         payload: hash.dates
//       }))
//       // .then()
//       // .catch(e => {
//       //   console.log(e)
//       //   return e
//       // })
//   }
// }
