import React, { Component } from 'react'

class ComponentToUnmount extends Component {
    state = { windowWidth: 0 }

    _updateStateWithWindowWidth = () => {
        this.setState({windowWidth: document.body.clientWidth})
    }

    componentDidMount() {
        this._updateStateWithWindowWidth()
         window.addEventListener('resize', this._updateStateWithWindowWidth)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._updateStateWithWindowWidth)
    }

    render() {
        return (
            <div>
                <p>Window width: {this.state.windowWidth}</p>
            </div>
        )
    }
}

class ComponentWilUnmountExample extends Component {
    state = {showComponent: true}
    render() {
        if (this.state.showComponent) {
            return (
                <div>
                    <h4>Unmount Cycle example: componentWillUnmount</h4>
                    <ComponentToUnmount/>
                    <button onClick={()=>this.setState({showComponent: false})}>
                        Unmount manually component
                    </button>
                </div>
            )                
        } else {
            return (
                <h1>Unmounted Component!</h1>
            )
        }

    }
}

export default ComponentWilUnmountExample