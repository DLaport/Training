import React, { Component } from 'react'

export default class Formulaire extends Component {
    state = {
        message: ''
    }

    handleSubmit = event => {
        event.preventDefault()
        this.createMessage()
    }

    handleChange = event => {
        const message = event.target.value
        this.setState({ message })
    }

    createMessage = () => {
        const { addMessage, pseudo } = this.props

        const message = {
            pseudo,
            message: this.state.message
        }
        addMessage(message)

        //Reset
        this.setState({ message: '' })
    }

    render() {
        return (
            <form 
                className='form'
                onSubmit={ this.handleSubmit }>
            <textarea 
                maxLength='140' 
                required 
                onChange={ this.handleChange }
                value={ this.state.message }/>
                <div className='info'>
                    140
                </div>
            <button type='submit'>Envoyer !</button>
        </form>
        )
    }
}
