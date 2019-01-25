import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import MainMenu from './components/MainMenu'
import SearchBar from './components/SearchBar'
import MovieFull from './components/MovieFull'
import NowPlaying from './containers/NowPlaying'
import Upcoming from './containers/Upcoming'
import SearchResults from './containers/SearchResults'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainMenu />
          <Route exact path='/' component={NowPlaying} />
          <Route exact path='/now-playing' component={NowPlaying} />
          <Route exact path='/upcoming' component={Upcoming} />
          <Route path={'/movies/:movieId'} component={MovieFull} />
          {/* Possibly remove search component */}
          <Route exact path='/search-results' component={SearchResults} />
        </div>
      </Router>
    );
  }
}

export default App;
