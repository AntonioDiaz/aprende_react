import React, {Component} from 'react'

class ComponentWillMount extends Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = { mensaje: 'mensaje inicial' }
    }

    /*
    componentWillMount() {
        this.state = { mensaje: 'mensaje modificado' }
        console.log('componentWillMount')
    }
    */

    render() {
        console.log('render')
        return (
            <div>
                <h4>Ciclo de montaje: ComponentWillMount</h4>
                <p>{this.state.mensaje}</p>
            </div>
        )
    }
}

export default ComponentWillMount