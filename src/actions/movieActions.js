const api_key = process.env.REACT_APP_API_KEY
const proxyURL = 'https://cors-anywhere.herokuapp.com/' //Due to fetch CORS error, could be avoided if requested server-side

export function fetchNowPlaying() {
  let targetURL = `https://api.themoviedb.org/3/movie/now_playing/?api_key=${api_key}&region=US&language=en-US`

  return (dispatch) => {
    dispatch({ type: 'LOADING_MOVIES' })
    return fetch(proxyURL + targetURL)
      .then(resp => resp.json())
      .then(movies => dispatch({
        type: 'FETCH_MOVIES',
        payload: movies.results
      }))
      // .then()
      // .catch(e => {
      //   console.log(e)
      //   return e
      // })
  }
}
