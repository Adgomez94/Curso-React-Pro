import React from 'react'
import { ProductCard, ProductImage, ProductTilte, ProductButtons } from '../components'
import '../styles/custom-styles.css'


const PRODUCT = {
  id: '1',
  title: 'Coffe Mug - Card'
}

const ShoppingPage = () => {
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

        <ProductCard product={PRODUCT}>
          <ProductCard.Image className='custom-image' />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard
          style={{

          }} 
          className="bg-dark"
          product={PRODUCT}>
          <ProductImage className='custom-image' />
          <ProductTilte className='text-white' />
          <ProductButtons className='custom-button'/>
        </ProductCard>

        <ProductCard
          style={{
            backgroundColor: '#70D1F8'
          }} 
          product={PRODUCT}>
          <ProductImage  />
          <ProductTilte  />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  )
}

export default ShoppingPage