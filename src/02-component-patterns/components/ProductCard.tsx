import React, { createContext, CSSProperties, ReactElement } from 'react'

import useProduct from '../hooks/useProduct'
import { ProductContext, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces'

// Styles
import styles from '../styles/styles.module.css'




export const ProductContextProps = createContext({} as ProductContext)

const { Provider } = ProductContextProps

export interface Props {
  product: Product;
  children: (args: ProductCardHandlers)=> JSX.Element
  className?: string,
  style?: CSSProperties,
  onChange?: ( args: onChangeArgs ) => void,
  value?: number,
  initialValues?: InitialValues
}


export const ProductCard = ({product, children, className, style, onChange, value, initialValues}:Props) => {

  const { counter, increase, maxCount, isMaxCountReached, reset } = useProduct({ product, onChange, value, initialValues })

  return (
    <Provider value={{
      counter,
      increase,
      product,
      maxCount
    }}>
      <div
        style={style} 
        className={ `${styles.productCard} ${className}` }>
        {
          children({
            count: counter,
            isMaxCountReached,
            reset,
            maxCounter: maxCount,
            product,
            increaseBy: increase
          })
        }
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
