import React from 'react'
import { ProductCard, ProductImage, ProductTilte, ProductButtons } from '../components'

import { useShoppingCart } from '../hooks/useShoppingCart'
import '../styles/custom-styles.css'
import { products } from '../data/product'

const ShoppingPage = () => {

  const { onProductCountChange, shoppingCart } = useShoppingCart()

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        {/* ESTA ES UNA FORMA DE HACERLO */}

        {
          products.map(product =>(

            <ProductCard
              key={product.id}
              className="bg-dark"
              product={product}
              onChange = {  onProductCountChange }
              value={shoppingCart[product.id]?.counter || 0}
            >
              <ProductImage className='custom-image' />
              <ProductTilte className='text-white' />
              <ProductButtons className='custom-button'/>
            </ProductCard>
          ))
        }

        <div className='shopping-cart'>

          {
            Object.keys(shoppingCart).map(id =>(
              <ProductCard
                key={id}
                className="bg-dark"
                product={shoppingCart[id]}
                value={shoppingCart[id].counter}
                onChange = {  onProductCountChange }
                style={{
                  width: '100px'
                }}
              >
                <ProductImage className='custom-image' />
                <ProductButtons 
                  className='custom-button'
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                />
              </ProductCard>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default ShoppingPage