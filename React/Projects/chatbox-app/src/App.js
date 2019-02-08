import React, { Component } from 'react'
import './App.css'
import Formulaire from './components/Formulaire'
import { Message } from './components/Message';

class App extends Component {
  render () {
    return (
      <div className='box'>
        <div className="messages">
          <Message />
          <Message />
          <Message />
          <Message />
        </div>

        <Formulaire />
      </div>
    )
  }
}

export default App
