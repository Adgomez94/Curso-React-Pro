import { useEffect, useState } from 'react'
import { onChangeArgs, Product } from '../interfaces/interfaces'

interface useProductArgs {
  product: Product
  onChange?: ( args: onChangeArgs ) => void
  value?: number
}

const useProduct = ({ onChange, product, value = 0 }:useProductArgs) => {
  const [counter, setCounter] = useState(value)


  useEffect(() => {
    setCounter(value)
  }, [value])
  
  const increase = (prev: number) => {

     
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