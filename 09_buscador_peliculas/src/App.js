import React, {Component} from 'react';
import {Title} from './components/Title'
import SearchForm from './components/SearchForm.js'

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {

  state = { results: [] }

  _renderResults() {
    const {results} = this.state
    return results.map(
      (movie, index)=> { return <div key={index}>{movie.Title}</div>})
  }

  _handleResults = (results) => {
    this.setState({results})
  }

  render() {
    return (
      <div className="App">
          <Title>Buscador de Pelis</Title>         
          <div className='SearchForm-wrapper'>
            <SearchForm onResults={this._handleResults}></SearchForm>
          </div>
          <span>
            {this.state.results.length === 0 ? "sin resultados" : this._renderResults()}
          </span>
      </div>
    )
  }
}

export default App;
