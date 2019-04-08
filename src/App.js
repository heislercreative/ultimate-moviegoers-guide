import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import MainMenu from './components/MainMenu'
import NowPlaying from './containers/NowPlaying'
import Upcoming from './containers/Upcoming'
import SearchResults from './containers/SearchResults'
import MovieFull from './components/MovieFull'
import Person from './components/Person'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainMenu />
          <Header />
          <Switch>
            <Route exact path='/' component={NowPlaying} />
            <Route exact path='/now-playing' component={NowPlaying} />
            <Route path='/upcoming' component={Upcoming} />
            <Route path={'/movie/:movieId'} component={MovieFull} />
            <Route path={'/search/:query'} component={SearchResults} />
            <Route path={'/person/:personId'} component={Person} />
            <Route component={NowPlaying} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
