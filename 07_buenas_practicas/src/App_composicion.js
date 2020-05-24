import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class MyButton extends Component {
  render(){
    return (
      <button style={{borderColor: this.props.borderColor, display:'block'}}>
          {this.props.label}
      </button>
    )
  }
}

MyButton.defaultProps = {
  borderColor: 'blue'
}

class MyButtonDanger extends Component {
  render(){
    return (
      <MyButton borderColor='red' label={this.props.label} />
    )
  }
} 

class MyButtonWithLegend extends Component {
  render(){
    return (
      <div>
      <MyButton label={this.props.label} borderColor={this.props.borderColor}/>
      <small>{this.props.legend}</small>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Composición VS Herencia</h1>
        <MyButton borderColor='#335EFF' label='father button'></MyButton>
        <hr/>
        <MyButtonDanger label='danger button'></MyButtonDanger>
        <hr/>
        <MyButtonWithLegend borderColor='green' label='legend button' legend='do it now' ></MyButtonWithLegend>
      </div>
    );
  } 
}

export default App;
