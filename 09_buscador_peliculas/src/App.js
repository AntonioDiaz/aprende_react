import React, {Component} from 'react';

import {Switch, Route} from 'react-router-dom';

import {Detail} from './pages/Detail'
import {HomePage} from './pages/Home'
 
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    const url = new URL(document.location)
    const hasId = url.searchParams.has('id')

    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} ></Route>
          <Route path='/detail/:id' component={Detail}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;
