# Aprender React JS

<!-- TOC depthfrom:2 orderedlist:false -->

- [Introducción del curso](#introducci%C3%B3n-del-curso)
- [Configuracion del entorno](#configuracion-del-entorno)
    - [Linter](#linter)
- [Conceptos basicos](#conceptos-basicos)
    - [Introducción sobre los conceptos básicos de React](#introducci%C3%B3n-sobre-los-conceptos-b%C3%A1sicos-de-react)
    - [Introdución a JSX](#introduci%C3%B3n-a-jsx)
        - [Ejemplo 01](#ejemplo-01)
        - [Ejemplo 02: expresion](#ejemplo-02-expresion)
        - [Ejemplo 03: funciones](#ejemplo-03-funciones)
        - [Ejemplo 04: atributos](#ejemplo-04-atributos)
        - [Ejemplo 05: two elements](#ejemplo-05-two-elements)
    - [Componentes en ReactJS](#componentes-en-reactjs)
        - [Componente como Function](#componente-como-function)
        - [Componente como Arrow Function](#componente-como-arrow-function)
        - [Componente como clase que hereda de Component](#componente-como-clase-que-hereda-de-component)
    - [Entendiendo las props](#entendiendo-las-props)
    - [Funciones y elementos como props](#funciones-y-elementos-como-props)
        - [Funcion para multiplicar](#funcion-para-multiplicar)
        - [Patrón deconstruccion](#patr%C3%B3n-deconstruccion)
    - [Inmutabilidad de las props](#inmutabilidad-de-las-props)
    - [Props por defecto](#props-por-defecto)
    - [Gestion del estado en ReactJS](#gestion-del-estado-en-reactjs)
    - [Actualizar estado mediante setState()](#actualizar-estado-mediante-setstate)
    - [Propagación del estado](#propagaci%C3%B3n-del-estado)
    - [Inicialización del estado mediante Props](#inicializaci%C3%B3n-del-estado-mediante-props)
- [Renderizado condicional y listas](#renderizado-condicional-y-listas)
- [React Developer Tools](#react-developer-tools)
- [Eventos y Formularios](#eventos-y-formularios)
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

### Props por defecto

### Gestion del estado en ReactJS

### Actualizar estado mediante setState()

### Propagación del estado

### Inicialización del estado mediante Props

## Renderizado condicional y listas

## React Developer Tools

## Eventos y Formularios

## Children y PropTypes

## Ciclo de Vida de los Componentes

## Buenas Practicas

## PROYECTO - Buscador de peliculas online

## Redux, gestionando el estado global de tu aplicación

## Proyectos de los estudiantes
