import React, { Component } from 'react'
import PropTypes from 'prop-types'

const API_KEY = 'ee453171'

export class Detail extends Component {

    static propTypes = {
        id: PropTypes.string
    }

    state = {movie: {}}

    _fetchMovie({id}) {
        const url = `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
        fetch(url)
            .then(res => res.json())
             .then(movie => {
                console.log(movie)
                this.setState({movie})
            }) 
    }

    componentDidMount() {
        const {id} = this.props
        this._fetchMovie({id})
    }
 
    render() {
        const {Title, Poster, Actors, Metascore, Plot} = this.state.movie
        return ( 
            <div>
                <h1>{Title}</h1>
                <img src={Poster} alt={Title}/>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
                <button onClick={this._goBack}>Back</button>
            </div>
          )
    }
}
