import React, { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'

import '../styles/styles.css'

const RegisterPage = () => {

  const { handleInputChange,
    isValidEmail,
    resetForm,
    email,
    name,
    password,
    password2
  } = useForm({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const handleSubmit = (event:FormEvent<HTMLFormElement> ) => {
    event.preventDefault()
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} action="">
        <input 
          type="text"
          className={`${ name.trim().length <= 0 && 'has-error' }`}
          value={ name }
          name="name"
          onChange={ handleInputChange }
          placeholder='Name' />
        { name.trim().length <= 0 && <span>Este campo es necesario</span> }
        <input 
          name='email'
          onChange={ handleInputChange }
          type="email"
          value={ email }
          placeholder='Email' />
        { isValidEmail(email) && <span>Este campo es necesario</span> }
        <input 
          type="password"
          name='password'
          value={password}
          onChange={ handleInputChange }
          placeholder='Password' />
        <input 
          name='password2'
          type="password"
          value={ password2 }
          onChange={ handleInputChange }
          placeholder='Repeat Password' />

        <button
          type='submit'
        >
          Create
        </button>

        <button
          onClick={resetForm} 
          type='button'>Reset</button>
      </form>
    </div>
  )
}

export default RegisterPage