import { Props as ProductCardProps } from '../components/ProductCard'
import { Props as PropTitleProps} from '../components/ProductTitle'
import { Props as PropImageProps} from '../components/ProductImage'
import { Props as PropButtonProps} from '../components/ProductButtons'


export interface Product {
  id?: string,
  title?: string,
  img?: string
}

export interface ProductContext {
  counter: number,
  product: Product,
  increase: (value:number) =>void
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element,
  Title: (Props: PropTitleProps) => JSX.Element,
  Image: (Props: PropImageProps) => JSX.Element;
  Buttons: (Props: PropButtonProps) => JSX.Element;
}