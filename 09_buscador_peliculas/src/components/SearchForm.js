import React, {Component} from 'react'

const API_KEY = 'ee453171'

export default class SearchFrom extends Component {

    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        this.setState({inputMovie: e.target.value})
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        const {inputMovie} = this.state
        const url = `http://www.omdbapi.com/?s=${inputMovie}&apikey=${API_KEY}`
        fetch(url)
            .then(res => res.json())
             .then(results => {
                const {Search = [], totalResults = "0"} = results
                this.props.onResults(Search)
            }) 
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input" 
                            onChange={this._handleChange}
                            type="text" 
                            placeholder="Search Movies"></input>
                    </div>
                    <div className="control">
                        <button className="button is-info">Search</button>
                    </div>
                </div>
            </form>
        );
    }
}