import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'

class Box extends Component {
  render() {
    return (
      <div style={{border:'1px solid #000', margin:5, padding: 5}}>
        {this.props.children}
      </div>
    );
  }
}

class Article extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired
  }
  constructor(props) {
    super(props)
  }
  render() {
      const {author, children, date, title} = this.props
      return(
        <section>
          <h2>{title}</h2>
          {author && <p><em>Escrito por {author}</em></p>}
          <Box>{date}</Box>
          <article>
            {children}
          </article>
        </section>
      )
  }
}

/*
Article.PropTypes = {
  author: PropTypes.string
}
*/

function App() {
  return (
    <div className="App">
      <h4>Children Props</h4>
      <Article
        author="Wikipedia"
        date={new Date().toLocaleDateString()}
        title="Articulo de React JS">
          <p><strong>React</strong> (también llamada React.js o ReactJS) es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.</p>
      </Article> 
      <hr></hr> 
      <Article
        author="Antoine"
        date={new Date().toLocaleDateString()}
        title="Articulo de Angular JS">
          <p><strong>AngularJS</strong> (comúnmente llamado Angular.js o AngularJS 1), es un framework de JavaScript de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página.</p>
      </Article>  
    </div>
  );
}

export default App;
