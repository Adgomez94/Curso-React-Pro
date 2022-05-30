import { useState } from 'react'
import { ProductInCart, Product } from '../interfaces/interfaces'


export const useShoppingCart = () => {

  const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({})
  
  const onProductCountChange = ({ counter,product }:{product: Product, counter:number}) => {

    setShoppingCart( shoppingCart =>{
      const productInCart: ProductInCart = shoppingCart[product.id] || { ...product, counter: 0 }

      if( Math.max( productInCart.counter + counter, 0 ) > 0) {
        productInCart.counter += counter
        return {
          ...shoppingCart,
          [product.id]: productInCart
        }
      }

      // Borrar producto
      const { [product.id]: deleteProduct, ...restShoppingCart  } = shoppingCart
      return restShoppingCart

    })
    
    // Forma que mas le gusta a fernando
    // setShoppingCart( shoppingCart =>{
    //   if(!counter) {
    //     const { [product.id]: deleteProduct, ...restShoppingCart  } = shoppingCart
    //     return restShoppingCart
    //   } 

    //   return {
    //     ...shoppingCart,
    //     [product.id]: {...product, counter}
    //   }
    // })
  }

  return {
    shoppingCart,
    onProductCountChange
  }

}