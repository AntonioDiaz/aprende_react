# Aprender React JS

<!-- TOC depthfrom:2 depthto:3 orderedlist:false -->

- [Introducción del curso](#introducci%C3%B3n-del-curso)
- [Configuracion del entorno](#configuracion-del-entorno)
    - [Linter](#linter)
- [Conceptos basicos](#conceptos-basicos)
    - [Introducción sobre los conceptos básicos de React](#introducci%C3%B3n-sobre-los-conceptos-b%C3%A1sicos-de-react)
    - [Introdución a JSX](#introduci%C3%B3n-a-jsx)
    - [Componentes en ReactJS](#componentes-en-reactjs)
    - [Entendiendo las props](#entendiendo-las-props)
    - [Funciones y elementos como props](#funciones-y-elementos-como-props)
    - [Inmutabilidad de las props](#inmutabilidad-de-las-props)
    - [Props por defecto](#props-por-defecto)
    - [Gestion del estado en ReactJS](#gestion-del-estado-en-reactjs)
    - [Actualizar estado mediante setState()](#actualizar-estado-mediante-setstate)
    - [Propagación del estado](#propagaci%C3%B3n-del-estado)
    - [Inicialización del estado mediante Props](#inicializaci%C3%B3n-del-estado-mediante-props)
- [Renderizado condicional y listas](#renderizado-condicional-y-listas)
    - [Condicionales en el método Render](#condicionales-en-el-m%C3%A9todo-render)
    - [Utilizando ternarias](#utilizando-ternarias)
    - [Trabajando con listas](#trabajando-con-listas)
    - [Listas de objetos](#listas-de-objetos)
- [React Developer Tools](#react-developer-tools)
- [Eventos y Formularios](#eventos-y-formularios)
    - [El evento onClick](#el-evento-onclick)
    - [Eventos sintéticos](#eventos-sint%C3%A9ticos)
    - [Eventos sportados](#eventos-sportados)
    - [Eventos en React](#eventos-en-react)
    - [Formularios en React](#formularios-en-react)
    - [Particularidades del atributo For](#particularidades-del-atributo-for)
    - [Entendiendo las Refs](#entendiendo-las-refs)
    - [El evento onSubmit](#el-evento-onsubmit)
    - [Componentes controlados](#componentes-controlados)
- [Children y PropTypes](#children-y-proptypes)
- [Ciclo de Vida de los Componentes](#ciclo-de-vida-de-los-componentes)
- [Buenas Practicas](#buenas-practicas)
- [PROYECTO - Buscador de peliculas online](#proyecto---buscador-de-peliculas-online)
- [Redux, gestionando el estado global de tu aplicación](#redux-gestionando-el-estado-global-de-tu-aplicaci%C3%B3n)
- [Proyectos de los estudiantes](#proyectos-de-los-estudiantes)

<!-- /TOC -->

## Introducción del curso
https://www.udemy.com/course/aprendiendo-react/

## Configuracion del entorno
* Install
  * NodeJS
  * Visual Studio Code
  * Create React App

* Create test app
https://create-react-app.dev/
```shell
$>npx create-react-app my-app  
$>npm start
```
* app.js
```js
import React from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
```

### Linter
* Instalar plugin eslint
* Crear el fichero **.eslintrc**
```json
{
    "extends": "react-app"
}
```

## Conceptos basicos

### Introducción sobre los conceptos básicos de React
* Declarativo: indicamos qué y como.
* Basado en componentes:
  * Partes mas pequeñas de la interfaz.
  * Cada componente encapsula su estado.
  * Codigo mas reusable, mantenible y pequeño.
* Programación reactiva: cambio de estado renderiza el componente.
* Virtual DOM: genera una copia del árbol de elementos del navegador para solo hacer los mínimos cambios necesarions para reglejar el estado de nuestros componentes.
* Eventos sintéticos:
  * Abstraciond de los eventos nativos de los navegadores
  * Compatibilidad cross browsing sin necesidad de más librerías.
  * Soporte para todos los eventos 1ue puedas necesitar desde click y double click, hasta eventos móviles como touchstaert y touchend.
* Server Side Rendering: el mismo codigo que se renderiza en el cliente lo tenemos en el servidor.

### Introdución a JSX
Es una sintaxis para generar componentes en React
https://babeljs.io/repl
![compiler](docs/babel.png)  

#### Ejemplo 01
```jsx
const element = <h1>Hello, world</h1>
```
Se convierte en:
```js
var element = React.createElement("h1", null, "Hello, world");
```

#### Ejemplo 02: expresion
```jsx
const element = <h1>{2 + 2}</h1>
```
Se convierte en:
```js
var element = React.createElement("h1", null, 2 + 2);
```

#### Ejemplo 03: funciones
```jsx
function multiplicar(a,b) { return a * b }
const mostrar = true
const element = <h1>{mostrar ? multiplicar(2,3) : "nada que mostrar"}</h1>
```
Se convierte en:
```js
function multiplicar(a, b) {
  return a * b;
}
var mostrar = true;
var element = React.createElement("h1", null, mostrar ? multiplicar(2, 3) : "nada que mostrar");
```

#### Ejemplo 04: atributos
```jsx
const image = <img src="http://aaa/image.jpg"/>
```
Se convierte en:
```js
var image = React.createElement("img", { src: "http://aaa/image.jpg" });
```

#### Ejemplo 05: two elements
```jsx
const element = <div><h1>Hola mundo</h1><h2>subtitulo</h2></div>
```
Se convierte en:
```js
var element = React.createElement("div", null,
  React.createElement("h1", null, "Hola mundo"),
  React.createElement("h2", null, "subtitulo"));
```

### Componentes en ReactJS

#### Componente como Function
```js
function Hello(props) {
  return <h2>{props.title}</h2>
}
```

#### Componente como Arrow Function
```js
const HelloArrow = (props) => <h2>{props.title}</h2>
```

#### Componente como clase que hereda de Component
```js
class HelloComponent extends Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}
```
* Usando los componentes
```html
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello title="Ole ole ole"/>
        <HelloArrow title="Ole ole ole ARROW"/>
        <HelloComponent title="ole ole ole, COMPONENT!"></HelloComponent>
      </header>
    </div>
  );
}
export default App;
```

### Entendiendo las props
Pasando arrays y objetos como props
```js
class MyComponent extends Component {
  render() {
    const isActivated = this.props.isActivated ? 'on' : 'off'
    const arrayTranform = this.props.arrayOfProps.map(this.props.multiply)
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
```

```js
<MyComponent 
  arrayOfProps={[3,6,9]}
  person={{name:'Atanasio', age:43}}
  isActivated={false}
  multiply={(n) => n * 4}
  number={33} 
  text="Titulo" ></MyComponent>
```

### Funciones y elementos como props

#### Funcion para multiplicar
```js
class MyComponent extends Component {
  render() {
    const arrayTranform = this.props.arrayOfProps.map(this.props.multiply)
    return (
      <div>
        <span>{arrayTranform.join(', ')} </span><br></br>
      </div>
    )
  }
}
```

```js
<MyComponent 
  arrayOfProps={[3,6,9]}
  multiply={(n) => n*4}></MyComponent>
```

#### Patrón deconstruccion
```js
    const {isActivated, arrayOfProps, person, multiply} = this.props
```
 #### Renderizar components dentro de componentes

```js
class MyComponent extends Component {
  render() {
    const {title} = this.props
    return (
      <div>
        {title}
      </div>
    )
  }
}
```

```js
<MyComponent 
  title={<h1>vamos ahi!</h1>}></MyComponent>
```
 

### Inmutabilidad de las props
* No se pueden modificar las propiedades.
* Excepcion cuando se intenta modificar una property 
>TypeError: Assignment to constant variable.


### Props por defecto
```js
class Title extends Component {
  render() {
    return <h3>{this.props.text}</h3>;
  }
}

Title.defaultProps = {
  text: 'titulo x defecto'
}
```


### Gestion del estado en ReactJS
* Ejemplo de componente con estado:
```js
class Contador extends Component {
  constructor() {
    super()
    this.state = { contador: 1}
  }

  render() {
    return <span>{this.state.contador}</span>
  }
}
```

### Actualizar estado mediante setState()
* React es declarativo y reactivo
```js
class Contador extends Component {
  constructor() {
    super()
    this.state = { contador: 1}
    setInterval(() => {
      this.setState({contador: this.state.contador + 1})
    }, 1000)
  }
  render() {
    return <span>{this.state.contador}</span>
  }
}
```

### Propagación del estado
* Cada cambio en el state padre provoca el renderiazado de todos los hijos. 
* El flujo es uniderccional.


### Inicialización del estado mediante Props
```js
class Contador extends Component {
  constructor(props) {
    super(props)
    this.state = { contador: this.props.contadorInitial}
    setInterval(() => {
      this.setState({contador: this.state.contador + 1})
    }, 1000)
  }
```

## Renderizado condicional y listas



### Condicionales en el método Render
```js
import React, {Component} from 'react'

class ComponenteA extends Component {
    render() {
        return <p>componente A</p>
    }
}

class ComponenteB extends Component {
    render() {
        return <p>componente B</p>
    }
}

function userConditional(mostrarA) {
    if (mostrarA) 
        return <ComponenteA/>
    return <ComponenteB/>
}

export default class ConditonalSection extends Component {
    constructor() {
        super()
        this.state = {mostrarA: true}
    }
    render() {
        return (
            <div>
                <h4>Conditional Rendering</h4>
                {userConditional(this.state.mostrarA)}
            </div>
        )
    }
}
```

### Utilizando ternarias
```js
const conditionalComponent = this.state.mostrarA ? <ComponenteA/> : <ComponenteB/>
```

### Trabajando con listas
```js
class Lista extends Component {
  render() {
    const numbers = [1,2,3,4,5]
    return (
      <div>Lista:
        {numbers.map((e, index) => {return <p key={index}>num: {e}</p>})}
      </div>
    )
  }
}
```

### Listas de objetos
* Definir objetos:
```json
[
    {
        "id": "7f9b3b74-8721-11ea-bc55-0242ac130003",
        "name": "CEED",
        "company": "KIA"
    },{
        "id": "1d09517b-a124-4c1f-8a32-f317dd6b368e",
        "name": "CARENS",
        "company": "KIA"
    },{
        "id": "4ef53ef2-88e2-43d7-8c45-f12a9f2010c8",
        "name": "CORSA",
        "company": "OPEL"
    }
]
```

* Definir Componentes
```js
import cars from './data/cars.json'

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
```


## React Developer Tools
* https://github.com/facebook/react
* https://www.fotocasa.es/es/

## Eventos y Formularios

### El evento onClick
```js
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <h4>Eventos</h4>
        <button onClick={() => alert("sorpresa!!")} >Click on me!!</button>
    </div>
  );
}

export default App;
```

### Eventos sintéticos
* Eventos sintenticos: recubrimientos sobre los eventos nativos para que sean compatibles en distintos navegadores.
```js
class App extends Component {
    handleClick(e) {
      console.log (e)
      console.log (e.nativeEvent)
      alert ('toma toma!!')
    }
    render() {
      return (
        <div className="App">
            <h4>Eventos</h4>
            <button onClick={this.handleClick} >Click on me!!</button>
        </div>
      );
    }
}
````

### Eventos sportados
* Hay que enlazar el evento con el contexto, esto se puede hacer:
  * Añadiendo al constuctor del componente la insturccion de enlazar:
  > this.handleMouseMove = this.handleMouseMove.bind(this)
  * Usando una **arrow function** al declarar la funcion, ya que las arrow functions enlazan siempre el contexto desde el que se declaran.
  
```js
class App extends Component {
  constructor() {
    super()
    this.state = { mouseX: 0, mouseY: 0 }
    //this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  handleMouseMove = (e) => {
    const {clientX, clientY} = e
    this.setState({mouseX: clientX, mouseY: clientY})
  }

  render() {
    return (
      <div className="App">
          <h4>Eventos</h4>
          <button onClick={this.handleClick} >Click on me!!</button>
          <div
              onMouseMove={this.handleMouseMove}
              style={{border:'1px solid #000', marginTop: 10, padding: 10}} >
            <p>{this.state.mouseX}, {this.state.mouseY}</p>
          </div>      
      </div>
    );
  }
}
```

### Eventos en React

### Formularios en React

### Particularidades del atributo For

### Entendiendo las Refs

### El evento onSubmit

### Componentes controlados

## Children y PropTypes

## Ciclo de Vida de los Componentes

## Buenas Practicas

## PROYECTO - Buscador de peliculas online

## Redux, gestionando el estado global de tu aplicación

## Proyectos de los estudiantes
