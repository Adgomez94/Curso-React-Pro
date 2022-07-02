import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import '../styles/styles.css'
// import MyInputText from '../components/MyInputText'
// import MySelect from '../components/MySelect'
// import MyCheckBox from '../components/MyCheckBox'

import { MyCheckBox, MyInputText, MySelect } from '../components'

const FormikAbstract = () => {

  {/* Componente para hacer formik context (Igual a lo que hicmos con la tarjetas en las sesion anteriores) */}
  return (
    <div>
      <h1>Formik Abstract</h1>
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
              <MyInputText name="firstName" label="first Name" />
              <MyInputText name="lastName" label="last Name" />
              <MyInputText name="email" label="Email" />

              <MySelect label="Jobs Type" name="jobsType" >
                <option value="">Pick somethings</option>
                <option value="dev">dev</option>
                <option value="designer">designer</option>
                <option value="senior">senior</option>
                <option value="junior">junior</option>
              </MySelect>

              <MyCheckBox label="Terms & Condition" name="terms" />

              <button type='submit'>Submit</button>
            </Form>
          )
        }

      </Formik>
    </div>

  )
}

export default FormikAbstract