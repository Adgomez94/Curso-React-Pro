import React from 'react'
import { ProductCard, ProductImage, ProductTilte, ProductButtons } from '../components'


import '../styles/custom-styles.css'
import { products } from '../data/product'

const product = products[0]

const ShoppingPage = () => {


  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

       

      <ProductCard
        key={product.id}
        className="bg-dark"
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({count, increaseBy, isMaxCountReached, product, reset, maxCounter}) =>(
            <>
            
              <ProductImage className='custom-image' />
              <ProductTilte className='text-white' />
              <ProductButtons className='custom-button'/>

              <button onClick={reset} >Reset</button>
              <button onClick={()=> increaseBy(-2)}>-2</button>
              {
                (!isMaxCountReached && <button onClick={()=> increaseBy(+2)}>+2</button>)
              }
              
              <span>{count} </span>
            </>
          )
        }
      </ProductCard>

    </div>
  )
}

export default ShoppingPage