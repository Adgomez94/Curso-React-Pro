import { lazy, LazyExoticComponent } from 'react'
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'

type JSXComponent = () => JSX.Element

export interface Route {
    to: string,
    path: string,
    // Component: () => JSX.Element, sin lazy
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string,

}

// LazyLoad los componentes tiene que exportados por defecto
const Lazy1 = lazy(()=> import(/* viteChunkName: "LazyPage1"*/'../01-lazyload/pages/LazyPage1'))
const Lazy2 = lazy(()=> import(/* viteChunkName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(()=> import(/* viteChunkName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3'))

const Nolazy  = lazy(()=> import(/* viteChunkName: "LazyPage1"*/'../01-lazyload/layout/LazyLayout'))

export const routes:Route[] = [
  {
    to: '/lazy1',
    path: 'lazy1',
    Component: Lazy1,
    name: 'lazy-1' 
  },
  {
    // inicar que lazyload va a tenre otras rutas hijas
    to: '/lazyload/',
    path: '/lazyload/*',
    Component: Nolazy,
    name: 'no Lazy' 
  },
  // {
  //   to: '/lazy3',
  //   path: 'lazy3',
  //   Component: Lazy3,
  //   name: 'lazy-1' 
  // },
]
