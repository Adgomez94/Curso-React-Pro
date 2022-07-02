import { useField } from 'formik'
import React from 'react'

interface Props {
  label: string;
  name: string;
  [x: string]: any
}

const MyCheckBox = ( {label, ...props}:Props ) => {

  /* El fiel tienes todas las acciones y el tio */

  const [field, meta] = useField({...props /*, type: 'checkbox'*/})

  return (
    <>
      {/* <label htmlFor={props.id ||props.name}> {label} </label> */}
      <label htmlFor={props.name}>
        <input className='text-input' {...field} {...props} type='checkbox' />
        {label} 
      </label>

      {
        meta.touched && meta.error && (
          <span className='error'> {meta.error} </span>
        )
      }
    </>
  )
}

export default MyCheckBox