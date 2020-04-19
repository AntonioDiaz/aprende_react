# Aprender React JS
<!-- TOC depthFrom:2 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [1. Introducción del curso](#1-introduccin-del-curso)
- [2. Configuración del entorno](#2-configuracin-del-entorno)
	- [Linter](#linter)
- [3. Conceptos básicos](#3-conceptos-bsicos)
	- [JSX](#jsx)
- [4. Renderizado condicional y listas](#4-renderizado-condicional-y-listas)
- [5. React Developer Tools](#5-react-developer-tools)
- [6. Eventos y Formularios](#6-eventos-y-formularios)
- [7. Children y PropTypes](#7-children-y-proptypes)
- [8. Ciclo de Vida de los Componentes](#8-ciclo-de-vida-de-los-componentes)
- [9. Buenas Prácticas](#9-buenas-prcticas)
- [10. PROYECTO - Buscador de películas online](#10-proyecto-buscador-de-pelculas-online)
- [11. Redux, gestionando el estado global de tu aplicación](#11-redux-gestionando-el-estado-global-de-tu-aplicacin)
- [12. Proyectos de los estudiantes](#12-proyectos-de-los-estudiantes)

<!-- /TOC -->
## 1. Introducción del curso
https://www.udemy.com/course/aprendiendo-react/

## 2. Configuración del entorno
* Install
  * NodeJS
  * Visual Studio Code
  * Create React App

* Create test app
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

## 3. Conceptos básicos
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
### JSX
Es una sintaxis para generar componentes en React
https://babeljs.io/repl
![compiler](docs/babel.png)  

* Ejemplo 01
```jsx
const element = <h1>Hello, world</h1>
```
Se convierte en:
```js
var element = React.createElement("h1", null, "Hello, world");
```

* Ejemplo 02: expresion
```jsx
const element = <h1>{2 + 2}</h1>
```
Se convierte en:
```js
var element = React.createElement("h1", null, 2 + 2);
```

* Ejemplo 03: funciones
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
* Ejemplo 04: atributos
```jsx
const image = <img src="http://aaa/image.jpg"/>
```
Se convierte en:
```js
var image = React.createElement("img", { src: "http://aaa/image.jpg" });
```
* Ejemplo 05: two elements
```jsx
const element = <div><h1>Hola mundo</h1><h2>subtitulo</h2></div>
```
Se convierte en:
```js
var element = React.createElement("div", null,
  React.createElement("h1", null, "Hola mundo"),
  React.createElement("h2", null, "subtitulo"));
```



## 4. Renderizado condicional y listas

## 5. React Developer Tools

## 6. Eventos y Formularios

## 7. Children y PropTypes

## 8. Ciclo de Vida de los Componentes

## 9. Buenas Prácticas

## 10. PROYECTO - Buscador de películas online

## 11. Redux, gestionando el estado global de tu aplicación

## 12. Proyectos de los estudiantes
