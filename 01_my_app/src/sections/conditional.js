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

export default class ConditonalSection extends Component {
    constructor() {
        super()
        this.state = {mostrarA: true}
    }
    render() {
        const conditionalComponent = this.state.mostrarA ? <ComponenteA/> : <ComponenteB/>
        return (
            <div>
                <h4>Conditional Rendering</h4>
                {conditionalComponent}
            </div>
        )
    }

}