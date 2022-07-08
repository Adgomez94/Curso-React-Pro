import { Form, Formik } from 'formik'
import React from 'react'
import { MyInputText, MySelect } from '../components'

import formJson from '../data/custom-form.json'
import * as Yup from 'yup'

const initialValue: {[key: string]: any} = {}
const validationValue: {[key: string]: any} = {}

for (const input of formJson) {
  initialValue[input.name] = input.value

  if(!input.validation) continue

  let schema = Yup.string()

  for (const rules of input.validation) {
    if(rules.type === 'required') {
      schema = schema.required('Esto campo es requerido')
    }

    if(rules.type === 'minLength') {
      schema = schema.min( (rules as any).value || 1, 'debe tenr un minimo')
    }

    if ( rules.type === 'email' ) {
      schema = schema.email( 'Revise el formato del email')
    }
  }



  validationValue[input.name] = schema
}

const validationSchema = Yup.object({...validationValue})

const DynamicForm = () => {
  return (
    <div>
      <h1>DynamicForm</h1>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={(values)=>{
          console.log(values)
        }}
      >
        {
          (formik)=> (
            <Form>
              {
                formJson.map(({label,name, placeholder, type, options})=>{

                  if(type === 'input' || type === 'password' || type === 'email') {

                    return (
                      <MyInputText
                        key={name} 
                        type={(type as any)}
                        label={label}
                        name={name} placeholder={placeholder} />
                    )
                  } else if (type === 'select') {
                    return (
                      <MySelect key={name} label={label} name={name}>
                        <option value="">Eligue una opcion</option>
                        {
                          options?.map(opt =>(
                            <option key={opt.id} value={opt.id} >{opt.label}</option>
                          ))
                        }
                      </MySelect>
                    )
                  }

                  return <span key={name} >No es soportado</span>

                })
              }

              <button type="submit">Enviar</button>
            </Form>

          )
        }
      </Formik>
    </div>
  )
}

export default DynamicForm