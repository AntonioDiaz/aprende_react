import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConditionalSection from './sections/conditional'
import cars from './data/cars.json'

function Hello(props) {
  return <h4>{props.title}</h4>
}

const HelloArrow = (props) => <h4>{props.title}</h4>

class HelloComponent extends Component {
  render() {
    return <h4>{this.props.title}</h4>
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
    return <p>{this.props.text}</p>;
  }
}

Title.defaultProps = {
  text: 'titulo x defecto'
}

class ListaNumeros extends Component {
  render() {
    const numbers = [1,2,3,4,5]
    return (
      <div><h3>Lista Numeros</h3>
        {numbers.map((e, index) => {return <p key={index}>num: {e}</p>})}
      </div>
    )
  }
}

class CarItem extends Component {
  render() {
    const {car, id} = this.props
    return (
      <li>
        <p>Key: {id}</p>
        <p>Car Company: {car.company}</p>
        <p>Car Name: {car.name}</p>
        <br/>
      </li>
    )
  }
}

class ListaObjetos extends Component {
  render() {
    return (
      <div><h3>Lista Objetos</h3>
        <ul>
          {cars.map(car => {return <CarItem id={car.id} car={car}/>})}
        </ul>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
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
          title={<p>vamos ahi!</p>}></MyComponent>
      <Title text="vamos vamos!!!"></Title>
      <Contador contadorInitial={69}></Contador>
      <ConditionalSection></ConditionalSection>
      <ListaNumeros/>
      <ListaObjetos/>
    </div>
  );
}

export default App;
