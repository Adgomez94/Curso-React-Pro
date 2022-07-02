import { FormikErrors, useFormik } from 'formik'
import React from 'react'
import '../styles/styles.css'

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const FormikBasicPage = () => {

  const validate = ( {email, firstName, lastName}: FormValues ) => {

    // Para saber los errores quye me dan la valdiaciones
    const errors: FormikErrors<FormValues> = {}

    if( !firstName ) errors.firstName = 'Required'
    else if( firstName.length > 15 ) errors.firstName = 'Must be 15 characteres or less'

    if( !lastName ) errors.lastName = 'Required'
    else if( lastName.length > 15 ) errors.lastName = 'Must be 15 characteres or less'

    if (!email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address'
    }

    return errors
  }

  // touched: Es para saber si se ha tocado el campo
  // Onblur: para saber si se salio del campo
  const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: values =>{
      console.log(values)
    },
    validate
  })

  return (
    <div>
      <h1>Formik Tutorial Basic</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">FirstName</label>
        <input
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
          name="firstName" 
          type="text" />
        { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

        <label htmlFor="lastName">LastName</label>
        <input
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
          name="lastName" 
          type="text" />
        { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}

        <label htmlFor="email">Email</label>
        <input
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name="email" 
          type="email" />
        { touched.email && errors.email && <span>{ errors.email }</span>} 
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormikBasicPage