import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class MyButton extends Component {
  constructor(props) {
    super(props)
    this.borderColor='blue'
  }
  render(){
    return (
      <button style={{borderColor: this.borderColor}} className="Button">
          {this.props.label}
      </button>
    )
  }
}

class MyButtonDanger extends MyButton {
  constructor(props) {
    super(props)
    this.borderColor='red'
  }
  render(){
    return (
      <button style={{borderColor: this.borderColor}} className="Button">
        {this.props.label}
      </button>
    )
  }
}

class MyButtonWithLegend extends MyButton {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div>
        {super.render()}
        <br></br>
        <small>{this.props.legend}</small>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Composición VS Herencia</h3>
        <MyButton label='father button'></MyButton>
        <br/>
        <MyButtonDanger label='danger button'></MyButtonDanger>
        <br/>
        <MyButtonWithLegend label='legend button' legend='*Clicka el boton...'></MyButtonWithLegend>
      </div>
    );
  } 
}

export default App;
