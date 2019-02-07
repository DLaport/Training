import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Membre from './components/Membre'
import Button from './components/Button'


const famille ={
  membre1:{
    nom:'David',
    age: 21
  },
  membre2:{
    nom:'Duvid',
    age: 22 
  },
  membre3:{
    nom:'Dovid',
    age: 23
  },
  membre4:{
    nom:'Divid',
    age: 24
  },
}


class App extends Component {
  state = {
    famille,
    isShow: false
  }

  handleClick = ( num ) => {
    //this.state.famille.membre1.age += 1 Le state ne peut pas être modifié en l'apellant directement.React a besoin de déterter qu'il y a une modification
    const famille = { ... this.state.famille }
    famille.membre1.age += num
    this.setState({ famille })
  }

  handleChange = (event, id) => {
    const famille = { ... this.state.famille }
    const nom = event.target.value
    famille[id].nom = nom
    this.setState({ famille })
  }

  handleShowDescription = () => {
    const isShow = !this.state.isShow
    this.setState({ isShow })
  }

  hideName = id => {
    const famille = { ... this.state.famille }
    famille[id].nom = 'X'
    this.setState({ famille })
  }
  
  
  
  render() {
    const { titre } = this.props
    const { famille, isShow } = this.state

    let description = null

    if(isShow){
      description = <strong>new test</strong>
    }

    const liste = Object.keys(famille) 
    .map(membre =>( //sert à faire une boucle autour d'un certain nombre de données qui sont d'un tableau
      <Membre 
        hideName={ () => this.hideName( membre ) }
        key={ membre }
        nom={ famille[membre].nom } 
        age={ famille[membre].age }
        handleChange={ event => this.handleChange( event, membre ) }/>
    ))

    console.log(liste);

    return (
        <div className="App">
          
          { liste }
          <Membre 
            nom={famille.membre4.nom} 
            age={famille.membre4.age}>
            {description}
            <button 
              onClick={this.handleShowDescription}>
              {
                isShow ? 'Cacher': 'Montrer' 
              }
            </button>    
          </Membre>
          <Button vieillir={() =>this.handleClick(2)}/> 
        </div>
    );
  }
}

export default App;
