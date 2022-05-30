import { useEffect, useRef, useState } from 'react'
import { onChangeArgs, Product } from '../interfaces/interfaces'

interface useProductArgs {
  product: Product
  onChange?: ( args: onChangeArgs ) => void
  value?: number
}

const useProduct = ({ onChange, product, value = 0 }:useProductArgs) => {
  const [counter, setCounter] = useState(value)

  // este valor nos indica que si el padre es quien controla los componentes o no
  // eso quiere decir que si hay una sincronizacion que tanto el padre y el hijo cambian
  const isControlled =useRef(!!onChange)

  useEffect(() => {
    setCounter(value)
  }, [value])
  
  const increase = (prev: number) => {

    if(isControlled.current) {
      // esto no niega lo que esta haciendo es indicar que este valor no es undefine porque se comprobo
      // es como hacer if(isControlled.current && onChange)
      return onChange!({ counter:prev, product }) 
    }
     
    const newValue = Math.max(counter + prev, 0)
    console.log(newValue)
    setCounter(newValue)
   
    onChange && onChange({ product, counter: newValue })
  } 

  return {
    counter,
    increase
  }
}

export default useProduct