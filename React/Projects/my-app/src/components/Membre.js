import React, { Fragment } from 'react'

//Component Stateless

const Membre = ({ nom, children , age, hideName , handleChange }) =>{
    return (
        <Fragment>
            
            <h2 style={{
                backgroundColor: age <= 22 ? 'yellow' : 'purple',
                color: age <= 22 ? 'black' : 'white'
            }}>{nom.toUpperCase()} : {age} 
            </h2>
            <input 
                value={ nom } 
                onChange={ handleChange } 
                type='text'/>
            <button onClick={ hideName }>X</button>
            { children ? <p>{ children }</p> : <Fragment />}         
        </Fragment>
        
    )
}

export default Membre