import React, {Component} from 'react';

import Home from './Home';
import Games from './Games';
import GamesRow from './GamesRow';
import Game from './Game';
import Contact from './Contact';


import Header from './Header';
import Footer from './Footer';
import Search from './Search';

import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';



import './App.css';

class App extends Component {
  render () {
    return (
      <div>
      <Header></Header>
        <Route render = {({location}) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={300} classNames="fade">
              <Switch location={location}>
                <Route exact path='/' component={Home} />
                <Route path='/games' component={Games} />
                <Route path='/contact' component={Contact} />
                <Route path='/search' component={Search} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
        <Footer></Footer>
      </div>
    );
  }
}

export default App;