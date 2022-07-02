import { useField } from 'formik'
import React from 'react'

interface Props {
  label: string;
  name: string;
  placeholder?: string,
  [x: string]: any
}

const MySelect = ( {label, ...props}:Props ) => {

  const [field, meta] = useField(props)

  return (
    <>
      <label> {label} </label>
      <select className='text-input' {...field} {...props} />
      {
        meta.touched && meta.error && (
          <span className='error'> {meta.error} </span>
        )
      }
    </>
  )
}

export default MySelect