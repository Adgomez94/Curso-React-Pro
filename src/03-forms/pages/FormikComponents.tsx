import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import '../styles/styles.css'

const FormikComponents = () => {

  {/* Componente para hacer formik context (Igual a lo que hicmos con la tarjetas en las sesion anteriores) */}
  return (

    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        terms: false,
        jobsType: ''
      }}
      onSubmit={ (values) => {
        console.log(values)
      }}

      validationSchema = {
        Yup.object({
          firstName: Yup.string()
            .required('Required')
            .max(15, 'Must be 15 characteres or less'),
          lastName: Yup.string()
            .required('Required')
            .max(15, 'Must be 15 characteres or less'),
          email: Yup.string()
            .required('Required')
            .email('Invalid email address'),
          terms: Yup.boolean()
            .oneOf([true], 'Es un campo requerido'),
          jobsType: Yup.string()
            .required('Requerido')
            .notOneOf(['junior'], 'No puedes seleccionarlo')
          
        })
      }
    >
      {
        formik => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            {/* Es el input solo poner el nombre para saber a cual esta ahciendo referencia */}
            <Field
              name="firstName" type="text"
            />
            {/* Los mensajes de error igual con el name */}
            <ErrorMessage name='firstName'/>

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text"/>
            <ErrorMessage name='lastName' component="span"/>

            <label htmlFor="email">Email</label>
            <Field name="email" type="text"/>
            <ErrorMessage name='email'/>

            <label htmlFor="jobsType">JobsType</label>
            <Field name="jobsType" as="select">
              <option value="">Pick somethings</option>
              <option value="dev">dev</option>
              <option value="designer">designer</option>
              <option value="senior">senior</option>
              <option value="junior">junior</option>
            </Field>
            <ErrorMessage name='jobsType' component="span"/>

            <label htmlFor="terms">
              <Field name="terms" type="checkbox"/>
              Terms and conditions
            </label>
            <ErrorMessage name='terms' component="span" />

            <button type='submit'>Submit</button>
          </Form>
        )
      }

    </Formik>
  )
}

export default FormikComponents