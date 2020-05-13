import React, { Component } from 'react';
import './App.css';
import ComponentWillMount from './sections/life-cycle/componentWillMount'
import EjemploDeComponenteDidMount from './sections/life-cycle/componenteDidMount'

class App extends Component {
 
  constructor(props) {
    super(props)
    this.state = { mensajeInicial: 'mensaje inicial' }
  }

  handleClick = () => {
    this.setState({mensajeInicial: 'nuevo mensaje'})
  } 

  render() {
    return (
      <div className="App">
        <br/>
        <h1>Jugando con el ciclo de vida de los componentes en React</h1>
        {this.state.mensajeInicial}
        <br/>
        <button onClick={this.handleClick}>
          Cambiar mensaje
        </button>
        <hr></hr>
        <ComponentWillMount/>
        <hr/>
        <EjemploDeComponenteDidMount/>
      </div>
    );
  }
}

export default App;
