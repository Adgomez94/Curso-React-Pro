import React, { useContext } from 'react'
import { ProductContextProps } from './ProductCard'

import styles from '../styles/styles.module.css'


export const ProductTilte = () => {

  const { product } = useContext(ProductContextProps)
  return (
    <span className={styles.productDescription}> { product.title} </span>
  )
}