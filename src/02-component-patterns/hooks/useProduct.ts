import { useEffect, useRef, useState } from 'react'
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces'

interface useProductArgs {
  product: Product
  onChange?: ( args: onChangeArgs ) => void
  value?: number,
  initialValues?: InitialValues
}

const useProduct = ({ onChange, product, value = 0, initialValues }:useProductArgs) => {
  const [counter, setCounter] = useState<number>( initialValues?.count || value)

  console.log(initialValues)

  const isMounted = useRef(false)

  useEffect(() => {
    if(!isMounted.current) return
    setCounter(value)
  }, [value])

  useEffect(() => {
    isMounted.current = true
  }, [])

  const reset = () => {
    setCounter(initialValues?.count || value)
  }
  
  const increase = (prev: number) => {

     
    let newValue = Math.max(counter + prev, 0)

    if(initialValues?.maxCount ) newValue = Math.min(newValue, initialValues.maxCount)
    setCounter(newValue)
   
    onChange && onChange({ product, counter: newValue })
  } 

  return {
    counter,
    increase,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
    reset
  }
}

export default useProduct