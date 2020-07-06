import React, { Component } from 'react'

import {Title} from '../components/Title'
import SearchForm from '../components/SearchForm'
import {MoviesList} from '../components/MoviesList'


export class HomePage extends Component {

    state = {usedSearch: false, results: [] }

    _handleResults = (results) => {
      this.setState({results, usedSearch:true})
    }
  
    _renderResults = () => {
      return this.state.results.length === 0 
          ? <p>No results 😢</p> 
          : <MoviesList movies={this.state.results}> </MoviesList>
    }
  

    render() {
        return(
            <div className="App">
                <Title>Buscador de Pelis</Title>         
                <div className='SearchForm-wrapper'>
                    <SearchForm onResults={this._handleResults}></SearchForm>
                </div>
                <span>  
                    { this.state.usedSearch ? this._renderResults() : <small>Use the form to search movies</small> } 
                </span>
            </div>
        )
    }
}