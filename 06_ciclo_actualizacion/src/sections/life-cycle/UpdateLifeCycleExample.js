import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
    dolphin: 'https://raw.githubusercontent.com/AntonioDiaz/aprende_react/master/docs/dolphin.jpg',
    shark: 'https://raw.githubusercontent.com/AntonioDiaz/aprende_react/master/docs/shark.jpg',
    whale: 'https://raw.githubusercontent.com/AntonioDiaz/aprende_react/master/docs/whale.jpg'
}

const ANIMAL_KEYS = Object.keys(ANIMAL_IMAGES)

class AnimalImage extends Component {
    state = { 
        animalIndex: this.props.animalIndex
    }
    //se ejecuta siempre que llegan nuevas props (que pueden ser igual que las propiedades que teniamos).
    componentWillReceiveProps(nextProps) {
        this.setState({
            animalIndex: nextProps.animalIndex
        })
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.animalIndex !== this.state.animalIndex
    }

    render() {
        let animalName = ANIMAL_KEYS[this.state.animalIndex]
        let animalUrl = ANIMAL_IMAGES[animalName]
        console.log('render....' + this.props.animalIndex);
        return (
            <div>
                <p>Selected {animalName}</p>
                <img 
                    alt={animalName}
                    src={animalUrl}
                    width='250'/>
            </div>
        )
    }
}

AnimalImage.prototypes = {
    animal: PropTypes.oneOf(ANIMAL_KEYS)
}

class UpdateLifeCycleExample extends Component {
    state = {index: 0}

    indexToAnimal = (myIndex) => {
        return ANIMAL_KEYS[myIndex % ANIMAL_KEYS.length]
    }

    renderAnimalButton = (newAnimal) => {
        let newAnimalIndex = ANIMAL_KEYS.indexOf(newAnimal);
        let colorButton = '';
        if (newAnimalIndex === this.state.index) {
            colorButton = 'yellow'
        }
        return(
            <button 
                    key={newAnimalIndex} 
                    onClick={()=> this.setState({index: newAnimalIndex})} 
                    style={{background: colorButton}} > 
                {newAnimal}
            </button>
        )
    }
  
    constructor() {
        super()
        setInterval(() => {
            let newIndex = (this.state.index + 1) % ANIMAL_KEYS.length;
            this.setState({index: newIndex})
          }, 5000)
    }
    render() {
        return (
            <div>
                <h4>Update cycle, ComponentWillReceiveProps</h4>
                {ANIMAL_KEYS.map(this.renderAnimalButton)}
                <AnimalImage animalIndex={this.state.index}></AnimalImage>
            </div>
        )
    }
}

export default UpdateLifeCycleExample
