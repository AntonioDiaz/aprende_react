import React, { Component } from 'react'

class ButtonThrowsException extends Component {
    state = {throwError: false}
    render() {
        if (this.state.throwError) {
            throw new Error('Error thrown by the button')
        }
        return (
            <button onClick={()=>this.setState({throwError: true})}>throws exception</button>
        )
    }
}

class ComponentDidCatchExample extends Component {
    state = {hasError: false, errorMsg: ''}
    componentDidCatch(error, errorInfo) {
        console.log('error ');
        console.log({error, errorInfo})
        this.setState({hasError: true, errorMsg: error.toString()})
        
    }
    render() {
        if (this.state.hasError) {
            return (
                <div>
                    ERRORACO: {this.state.errorMsg}                
                    <br/>
                    <button onClick={()=>this.setState({hasError: false})}>change state so render again!!</button>                    
                </div>
            )
        }
        return (
            <div>
                ComponentDidCatchExample
                <br/>
                <ButtonThrowsException></ButtonThrowsException>
            </div>
        )
    }
}

export default ComponentDidCatchExample