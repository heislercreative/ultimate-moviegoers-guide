export default function movieReducer(state = [], action) {
  switch (action.type) {

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

      videos.results.forEach(video => {
        if (video.site === 'YouTube') {
          video.embed_path = `https://youtube.com/embed/${video.key}`
          video.link_path = `https://youtube.com/watch?v=${video.key}`
        }
      })

      return {
        details: movie,
        credits: credits,
        videos: videos.results
      }

    default:
      return state
  }
}
