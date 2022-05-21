import React, { useContext } from 'react'
import { ProductContextProps } from './ProductCard'

import styles from '../styles/styles.module.css'

import noImage from '../asset/no-image.jpg'


export const ProductImage = ({ url = '' }:{ url?: string }) => {

  const { product } = useContext(ProductContextProps)
  let showToImg: string

  if(url) showToImg = url
  else if (product.img) showToImg = product.img
  else showToImg = noImage

  return (
    <img className={ styles.productImg } src={ showToImg } alt="Product" />
  )
}