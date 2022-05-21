import { ReactElement } from 'react'

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[]
}

export interface Product {
  id?: string,
  title: string,
  img?: string
}

export interface ProductContext {
  counter: number,
  product: Product,
  increase: (value:number) =>void
}

export interface ProductCardHOCProps {
  ({ product, children }: Props): JSX.Element,
  Title: () => JSX.Element,
  Image: ({ url }: { url?: string}) => JSX.Element;
  Buttons: () => JSX.Element;
}