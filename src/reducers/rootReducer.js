import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer'
import movieReducer from './movieReducer'
import personReducer from './personReducer'

const rootReducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  person: personReducer
});

export default rootReducer
