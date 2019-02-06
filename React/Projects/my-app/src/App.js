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
    famille
  }

  handleClick = ( num ) => {
    //this.state.famille.membre1.age += 1 Le state ne peut pas être modifié en l'apellant directement.React a besoin de déterter qu'il y a une modification
    const famille = { ... this.state.famille }
    famille.membre1.age += num
    this.setState({ famille })
  }

  handleChange = event => {
    const famille = { ... this.state.famille }
    const nom = event.target.value
    console.log(nom)
    famille.membre1.nom = nom
    this.setState({ famille })
  }
  
  
  render() {
    const { titre } = this.props
    const { famille } = this.state
    return (
      <Fragment> 
        <div className="App">
            <input value={ famille.membre1.nom } onChange={this.handleChange} type='text'/>
            <h1>{titre}</h1>
            <h1>React App</h1>  
        </div>
        <h2>Mon second titre</h2>
        <Membre nom={famille.membre1.nom} age={famille.membre1.age}/>
        <Membre nom={famille.membre2.nom} age={famille.membre2.age}/>
        <Membre nom={famille.membre3.nom} age={famille.membre3.age}/>
        <Membre nom={famille.membre4.nom} age={famille.membre4.age}>
          <strong>new test</strong>
        </Membre>
        <Button vieillir={() =>this.handleClick(2)}/>
      </Fragment>
    );
  }
}

export default App;
