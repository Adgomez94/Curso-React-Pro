import { Form, Formik } from 'formik'
import React, { FormEvent } from 'react'

import '../styles/styles.css'
import * as Yup from 'yup'
import MyInputText from '../components/MyInputText'

const RegisterFormikPage = () => {


  return (
    <div>
      <h1>Register Formik page</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          repeatPassword: ''
        }}
        validationSchema= {
          Yup.object({
            name: Yup.string()
              .required().min(2).max(15),
            email: Yup.string()
              .required().email(),
            password: Yup.string()
              .required().min(6),
            repeatPassword: Yup.string()
              .oneOf([Yup.ref('password')], 'Passwords must match')
          })

        }
        onSubmit={ (value)=>{
          console.log(value)
        }}
      >
        {
          ({ handleReset }) =>(
            <Form>
              <MyInputText label='Name' name='name' />
              <MyInputText label='Email' name='email' type='email' />
              <MyInputText label='Password' name='password' type='password' />
              <MyInputText label='Repeat Password' type='password' name='repeatPassword' />
              <button type='submit'>Submit</button>
              <button onClick={handleReset}>Reset</button>
            </Form>
          )
        }

      </Formik>

      {/* <form onSubmit={handleSubmit} action="">
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
      </form> */}
    </div>
  )
}

export default RegisterFormikPage