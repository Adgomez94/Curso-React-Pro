import React, { CSSProperties, useContext } from 'react'
import { ProductContextProps } from './ProductCard'

import styles from '../styles/styles.module.css'

export interface Props {
  className?: string,
  style?: CSSProperties
}

export const ProductButtons = ({ className }:Props) => {

  const { counter, increase } = useContext(ProductContextProps)

  return (
    <div className={ `${styles.buttonsContainer} ${className} ` }>
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