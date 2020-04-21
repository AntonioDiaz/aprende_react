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
    const {title, isActivated, arrayOfProps, person, multiply} = this.props
    const arrayTranform = arrayOfProps.map(multiply)
    return (
      <div>
        <span>{this.props.text}</span> &nbsp;
        <span>{this.props.number}</span> &nbsp;
        <span>{isActivated}</span> &nbsp;
        <span>{arrayTranform.join(', ')} </span><br></br>
        <span>*nombre: {person.name} tiene {person.age}</span>
        {title}
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
          multiply={(n) => n*4}
          number={33} 
          text="Titulo" 
          title={<h1>vamos ahi!</h1>}></MyComponent>
      </header>
    </div>
  );
}

export default App;
