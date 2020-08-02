import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
    dolphin: 'https://raw.githubusercontent.com/AntonioDiaz/aprende_react/master/docs/dolphin.jpg',
    shark: 'https://raw.githubusercontent.com/AntonioDiaz/aprende_react/master/docs/shark.jpg',
    whale: 'https://raw.githubusercontent.com/AntonioDiaz/aprende_react/master/docs/whale.jpg'
}

const ANIMAL_KEYS = Object.keys(ANIMAL_IMAGES)

class AnimalImage extends PureComponent {
    state = { 
        animalIndex: this.props.animalIndex
    }
    //se ejecuta siempre que llegan nuevas props (que pueden ser igual que las propiedades que teniamos).
    componentWillReceiveProps(nextProps) {
        this.setState({
            animalIndex: nextProps.animalIndex
        })
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("");
        const img = document.querySelector('img')
        img.animate(
            [{filter: 'blur(0px)'},{filter: 'blur(2px)'}], 
            {duration: 500, easing: 'ease'})
    }

    componentDidUpdate(prevProps, prevState) {
        const img = document.querySelector('img')
        img.animate(
            [{filter: 'blur(2px)'},{filter: 'blur(1px)'}], 
            {duration: 1500, easing: 'ease'})

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
                    className="carrusel"
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
