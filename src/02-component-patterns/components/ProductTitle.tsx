import React, { CSSProperties, useContext } from 'react'
import { ProductContextProps } from './ProductCard'

import styles from '../styles/styles.module.css'

export interface Props {
  className?: string,
  style?: CSSProperties
}

export const ProductTilte = ({className}:Props) => {

  const { product } = useContext(ProductContextProps)
  return (
    <span className={`${styles.productDescription} ${className}`}> { product.title} </span>
  )
}