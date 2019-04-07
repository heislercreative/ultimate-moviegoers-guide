import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer'
import personReducer from './personReducer'

const rootReducer = combineReducers({
  movies: moviesReducer,
  person: personReducer
});

export default rootReducer
