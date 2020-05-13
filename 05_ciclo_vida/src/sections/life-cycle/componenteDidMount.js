import React, {Component} from 'react'

class EjemploDeComponenteDidMount extends Component {

    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {scroll: 0}
    }

    componentDidMount(){
        console.log('componentDidMount'); 
        document.addEventListener('scroll', () => {
            console.log(window.scrollY)
            this.setState({scroll: window.scrollY})
        })       
    }

    render() {
        console.log('render ComponenteDidUnmount')
        return (
            <div style={{textAlign:'center'}}>

            <h3>Ciclo de montaje REACT</h3>
            <p>My Scroll: {this.state.scroll}</p>
            <div style={{display:'inline-block', width:'200px'}}>
            <p>Este es un componente para demostrar el uso del método componentDidMount</p>
            <p>
            Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.                
            </p>
            </div>
            </div>
        )
    }
}

export default EjemploDeComponenteDidMount