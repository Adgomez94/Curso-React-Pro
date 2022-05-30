import { useState } from 'react'
import { ProductInCart, Product } from '../interfaces/interfaces'


export const useShoppingCart = () => {

  const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({})
  
  const onProductCountChange = ({ counter,product }:{product: Product, counter:number}) => {

    
    // Forma que mas le gusta a fernando
    setShoppingCart( shoppingCart =>{
      if(!counter) {
        const { [product.id]: deleteProduct, ...restShoppingCart  } = shoppingCart
        return restShoppingCart
      } 

      return {
        ...shoppingCart,
        [product.id]: {...product, counter}
      }
    })
  }

  return {
    shoppingCart,
    onProductCountChange
  }

}