import { ErrorMessage, useField } from 'formik'
import React from 'react'

interface Props {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password',
  placeholder?: string,
  [x: string]: any
}

const MyInputText = ( {label, ...props}:Props ) => {

  /* El fiel tienes todas las acciones */

  const [field, meta] = useField(props)

  return (
    <>
      {/* <label htmlFor={props.id ||props.name}> {label} </label> */}
      <label htmlFor={props.name}> {label} </label>
      <input className='text-input' {...field} {...props} />

      <ErrorMessage name={props.name} component="span" className='hola'/>
      {/* {
        meta.touched && meta.error && (
          <span className='error'> {meta.error} </span>
        )
      } */}
    </>
  )
}

export default MyInputText