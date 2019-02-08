import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Connexion extends Component {
    state = {
        pseudo:'',
        goToChat: false
    }

    handleChange = event => {
        const pseudo = event.target.value
        this.setState({ pseudo })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({ goToChat: true })
    }
  
    render() {
        
        if ( this.state.goToChat ){
            return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
        }
        return (
            <div className='connexionBox' onSubmit={this.handleSubmit}>
                <form className='connexion'>
                    <input 
                        value={ this.state.pseudo }
                        onChange={ this.handleChange }
                        placeholder='Pseudo' 
                        type='text' 
                        required/>
                    <button type='submit'>Go</button>
                </form>
                
            </div>
        )
    }
}
