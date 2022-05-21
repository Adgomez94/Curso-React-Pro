import { useState } from 'react'

const INITIAL_STATE = 0

const useProduct = (value: number = INITIAL_STATE) => {
  const [counter, setCounter] = useState(value)

  const increase = (prev: number) => setCounter((counter)=> Math.max(counter + prev, 0))

  return {
    counter,
    increase
  }
}

export default useProduct