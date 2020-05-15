import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
    dolphin: 'https://raw.githubusercontent.com/AntonioDiaz/aprende_react/master/docs/dolphin.jpg',
    shark: 'https://raw.githubusercontent.com/AntonioDiaz/aprende_react/master/docs/shark.jpg',
    whale: 'https://raw.githubusercontent.com/AntonioDiaz/aprende_react/master/docs/whale.jpg'
}

class AnimalImage extends Component {
    state = { src: ANIMAL_IMAGES[this.props.animal] }

    //se ejecuta siempre que llegan nuevas props (que pueden ser igual que las propiedades que teniamos).
    componentWillReceiveProps(nextProps) {
        this.setState({src: ANIMAL_IMAGES[nextProps.animal]})
    }

    render() {
        console.log('render....' + this.props.animal);
        return (
            <div>
                <p>Selected {this.props.animal}</p>
                <img 
                    alt={this.props.animal}
                    src={this.state.src}
                    width='250'/>
            </div>
        )
    }
}

AnimalImage.prototypes = {
    animal: PropTypes.oneOf(['dolphin', 'shark', 'whale'])
}

AnimalImage.defaultProps = {
    animal: 'dolphin'
}

class UpdateLifeCycleExample extends Component {
    state = {animal: 'dolphin', index: 3}
    indexToAnimal (index) {
        switch (index % 3) {
            case 0: return 'dolphin'
            case 1: return 'shark'
            case 2: return 'whale'
            default: return 'dolphin'
        }
    }

    constructor() {
        super()
        setInterval(() => {
            let newIndex = this.state.index + 1;
            let newAnimal = this.indexToAnimal(newIndex)
            this.setState({animal: newAnimal, index: this.state.index + 1})
          }, 3000)
    }
    render() {
        return (
            <div>
                <h4>Update cycle, ComponentWillReceiveProps</h4>
                <AnimalImage animal={this.state.animal}></AnimalImage>
            </div>
        )
    }
}



export default UpdateLifeCycleExample
