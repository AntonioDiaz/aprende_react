import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Hello(props) {
  return <h2>{props.title}</h2>
}

const HelloArrow = (props) => <h2>{props.title}</h2>

class HelloComponent extends Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}

class MyComponent extends Component {
  render() {
    const isActivated = this.props.isActivated ? 'on' : 'off'
    const arrayTranform = this.props.arrayOfProps.map(n=>n*2)
    return (
      <div>
        <span>{this.props.text}</span> &nbsp;
        <span>{this.props.number}</span> &nbsp;
        <span>{isActivated}</span> &nbsp;
        <span>{arrayTranform.join(', ')} </span><br></br>
        <span>nombre: {this.props.person.name} tiene {this.props.person.age}</span>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello title="Ole ole ole"/>
        <HelloArrow title="Ole ole ole ARROW"/>
        <HelloComponent title="ole ole ole, COMPONENT!"></HelloComponent>
        <MyComponent 
          arrayOfProps={[3,6,9]}
          person={{name:'Atanasio', age:43}}
          isActivated={false}
          number={33} 
          text="Titulo" ></MyComponent>
      </header>
    </div>
  );
}

export default App;
