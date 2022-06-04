import { Props as ProductCardProps } from '../components/ProductCard'
import { Props as PropTitleProps} from '../components/ProductTitle'
import { Props as PropImageProps} from '../components/ProductImage'
import { Props as PropButtonProps} from '../components/ProductButtons'


export interface Product {
  id: string,
  title?: string,
  img?: string
}

export interface ProductContext {
  counter: number,
  product: Product,
  increase: (value:number) =>void,
  maxCount?: number
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element,
  Title: (Props: PropTitleProps) => JSX.Element,
  Image: (Props: PropImageProps) => JSX.Element;
  Buttons: (Props: PropButtonProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product,
  counter: number
}

export interface ProductInCart extends Product {
  counter: number
}

export interface InitialValues {
  count: number,
  maxCount:number
}

export interface ProductCardHandlers {
  count: number,
  isMaxCountReached: boolean,
  maxCounter?: number,
  product: Product,

  increaseBy: ( value:number) => void
  reset: () => void
}