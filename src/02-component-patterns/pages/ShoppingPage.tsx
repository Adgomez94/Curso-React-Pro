import React from 'react'
import { ProductCard, ProductImage, ProductTilte, ProductButtons } from '../components'


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
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={PRODUCT}>
          <ProductImage />
          <ProductTilte />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  )
}

export default ShoppingPage