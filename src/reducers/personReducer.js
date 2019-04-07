export default function personReducer(state = {
  selected_person: {
    details: {},
    credits: {}
  }
}, action) {
  const base_url = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2'

  switch (action.type) {

    case 'FETCH_PERSON_WITH_CREDITS':
      const person = action.payload[0]
      const credits = action.payload[1]

      person.profile_path = base_url + movie.profile_path

      credits.cast.forEach(cast => {
        if (cast.poster_path) {
          cast.poster_path = base_url + movie.poster_path
        }
      })
      credits.crew.forEach(crew => {
        if (crew.poster_path) {
          crew.poster_path = base_url + movie.poster_path
        }
      })

      return {
        ...state,
        selected_person: {
          details: person,
          credits: credits
        }
      }

    default:
      return state
  }
}
