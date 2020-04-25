import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConditionalSection from './sections/conditional'

function Hello(props) {
  return <h2>{props.title}</h2>
}

const HelloArrow = (props) => <h2>{props.title}</h2>

class HelloComponent extends Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}

class Contador extends Component {
  constructor(props) {
    super(props)
    this.state = { contador: this.props.contadorInitial}
    setInterval(() => {
      this.setState({contador: this.state.contador + 1})
    }, 1000)
  }

  render() {
    return <ContadorNumero numero={this.state.contador}></ContadorNumero>
  }
}

class ContadorNumero extends Component {
  render() {
  return <span>ContadorNumero: {this.props.numero}</span>
  }
}

class MyComponent extends Component {
  render() {
    const {title, isActivated, arrayOfProps, person, multiply} = this.props
    const arrayTranform = arrayOfProps.map(multiply)
    //title = <h3>erroraco</h3>
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

class Title extends Component {
  render() {
    return <h3>{this.props.text}</h3>;
  }
}

Title.defaultProps = {
  text: 'titulo x defecto'
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
      <Title text="vamos vamos!!!"></Title>
      <Contador contadorInitial={69}></Contador>
      <ConditionalSection></ConditionalSection>
      </header>
    </div>
  );
}

export default App;
