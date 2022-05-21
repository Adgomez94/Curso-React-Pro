import { ProductCard as ProductCardHOC } from './ProductCard'
import { ProductTilte } from './ProductTitle'
import { ProductImage } from './ProductImage'
import { ProductButtons } from './ProductButtons'
import { ProductCardHOCProps } from '../interfaces/interfaces'

export { ProductButtons } from './ProductButtons'
export { ProductImage } from './ProductImage'
// export { ProductCard } from './ProductCard'
export { ProductTilte } from './ProductTitle'

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC,{
  Title: ProductTilte,
  Image: ProductImage,
  Buttons: ProductButtons
})
