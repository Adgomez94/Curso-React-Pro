import React, { createContext, CSSProperties, ReactElement } from 'react'

import useProduct from '../hooks/useProduct'
import { ProductContext, Product } from '../interfaces/interfaces'

// Styles
import styles from '../styles/styles.module.css'




export const ProductContextProps = createContext({} as ProductContext)

const { Provider } = ProductContextProps

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[]
  className?: string,
  style?: CSSProperties
}


export const ProductCard = ({product, children, className, style}:Props) => {

  const { counter, increase } = useProduct()

  return (
    <Provider value={{
      counter,
      increase,
      product
    }}>
      <div
        style={style} 
        className={ `${styles.productCard} ${className}` }>
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
