import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import '../styles/styles.css'

const FormikYupPage = () => {

  // touched: Es para saber si se ha tocado el campo
  // Onblur: para saber si se salio del campo
  // getFieldProps: Hace las funcionalidades de handleBlur, handleChange, value y name
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: values =>{
      console.log(values)
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('Required')
        .max(15, 'Must be 15 characteres or less'),
      lastName: Yup.string()
        .required('Required')
        .max(15, 'Must be 15 characteres or less'),
      email: Yup.string()
        .required('Required')
        .email('Invalid email address')
        
    })
  })

  return (
    <div>
      <h1>Formik Tutorial Yup</h1>




      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">FirstName</label>
        <input
          {...getFieldProps('firstName')}
          type="text" />
        { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

        <label htmlFor="lastName">LastName</label>
        <input
          {...getFieldProps('lastName')}
          type="text" />
        { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}

        <label htmlFor="email">Email</label>
        <input
          {...getFieldProps('email')}
          type="email" />
        { touched.email && errors.email && <span>{ errors.email }</span>} 
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormikYupPage