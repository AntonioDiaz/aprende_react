import React, {Component} from 'react'

export default class Forms extends Component {
    constructor() {
        super()
        this.state = {
            inputName: "",
            inputTwitter: "@",
            inputTerms: true
        }
    }

    //metodo para recoger los datos.
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    handleChange = (e) => {
        console.log("handleChange")
        console.log(e.target.checked)
        this.setState({inputTerms: e.target.checked})
    }
    render() {
        return (
            <div>
                <h4>Fromularios</h4>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor='name' >Nombre</label> 
                        <input 
                            id="name" 
                            placeholder="pon tu nombre"
                            ref={inputElement => this.inputName = inputElement}
                            onChange={e => this.setState({inputName: e.target.value})}
                            value={this.state.inputName}/>
                    </p>
                    <p>
                        <label htmlFor="twitter">Twitter</label>
                        <input 
                            id="twitter" 
                            ref={inputElement => this.inputTwitter = inputElement}
                            onChange={e => this.setState({inputTwitter: e.target.value})}
                            type="text" 
                            placeholder="pon tu Twitter"
                            value={this.state.inputTwitter}/>
                    </p>
                    <p>
                        <label>
                            <input 
                                onChange={this.handleChange} 
                                type="checkbox"
                                checked={this.state.inputTerms}/>
                            Vender alma a belcebú
                        </label>
                    </p>
                    <button onClick={this.handleClick}>Enviar</button>
                </form>
            </div>
        )
    }
}