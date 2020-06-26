import React, {Component} from 'react';
import {Title} from './components/Title'
import SearchForm from './components/SearchForm'
import {MoviesList} from './components/MoviesList'

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {

  state = { results: [] }

  _handleResults = (results) => {
    this.setState({results})
  }

  render() {
    console.log(this.state.results)
    return (
      <div className="App">
          <Title>Buscador de Pelis</Title>         
          <div className='SearchForm-wrapper'>
            <SearchForm onResults={this._handleResults}></SearchForm>
          </div>
          <span>            
            { 
            this.state.results.length === 0 
              ? <p>sin resultados</p> 
              : <MoviesList movies={this.state.results}> </MoviesList>
            }
          </span>
      </div>
    )
  }
}

export default App;
