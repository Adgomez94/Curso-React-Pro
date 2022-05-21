import React, { createContext, ReactElement, useContext } from 'react'

import useProduct from '../hooks/useProduct'
import { ProductContext, Props } from '../interfaces/interfaces'

// Styles
import styles from '../styles/styles.module.css'




export const ProductContextProps = createContext({} as ProductContext)

const { Provider } = ProductContextProps


export const ProductCard = ({product, children}:Props) => {

  const { counter, increase } = useProduct()

  return (
    <Provider value={{
      counter,
      increase,
      product
    }}>
      <div className={ styles.productCard }>
        {children}
        {/* <ProductImage url = { product.img } />

      <ProductTilte title={ product.title } />

      <ProductButtons 
        counter={counter} 
        increase={increase} /> */}
      
      </div>
    </Provider>
  )
}

/* Para hacer lo la opcion que esta comentado*/

// ProductCard.Title = ProductTilte
// ProductCard.Button = ProductButtons
// ProductCard.Image = ProductImage
