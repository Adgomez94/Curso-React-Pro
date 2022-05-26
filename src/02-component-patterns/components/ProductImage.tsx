import React, { CSSProperties, useContext } from 'react'
import { ProductContextProps } from './ProductCard'

import styles from '../styles/styles.module.css'

import noImage from '../asset/no-image.jpg'

export interface Props {
  url?:string
  className?: string
  style?: CSSProperties
}

export const ProductImage = ({url = '', className}:Props) => {

  const { product } = useContext(ProductContextProps)
  let showToImg: string

  if(url) showToImg = url
  else if (product.img) showToImg = product.img
  else showToImg = noImage

  return (
    <img className={ `${styles.productImg} ${className}` } src={ showToImg } alt="Product" />
  )
}