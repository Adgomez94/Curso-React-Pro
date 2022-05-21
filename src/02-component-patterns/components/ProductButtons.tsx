import React, { useContext } from 'react'
import { ProductContextProps } from './ProductCard'

import styles from '../styles/styles.module.css'


export const ProductButtons = () => {

  const { counter, increase } = useContext(ProductContextProps)

  return (
    <div className={ styles.buttonsContainer }>
      <button
        onClick={ ()=>increase(-1) }
        className={styles.buttonMinus}
      >-</button>
      <div className={styles.countLabel}>
        { counter }
      </div>
      <button
        onClick={ ()=>increase(1) }
        className={styles.buttonAdd}
      >+</button>
    </div>
  )
}