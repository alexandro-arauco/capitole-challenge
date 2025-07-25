/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as WishlistIndexRouteImport } from './routes/wishlist/index'
import { Route as DetailIdRouteImport } from './routes/detail/$id'

const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const WishlistIndexRoute = WishlistIndexRouteImport.update({
  id: '/wishlist/',
  path: '/wishlist/',
  getParentRoute: () => rootRouteImport,
} as any)
const DetailIdRoute = DetailIdRouteImport.update({
  id: '/detail/$id',
  path: '/detail/$id',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/detail/$id': typeof DetailIdRoute
  '/wishlist': typeof WishlistIndexRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/detail/$id': typeof DetailIdRoute
  '/wishlist': typeof WishlistIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/detail/$id': typeof DetailIdRoute
  '/wishlist/': typeof WishlistIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/detail/$id' | '/wishlist'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/detail/$id' | '/wishlist'
  id: '__root__' | '/' | '/detail/$id' | '/wishlist/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DetailIdRoute: typeof DetailIdRoute
  WishlistIndexRoute: typeof WishlistIndexRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/wishlist/': {
      id: '/wishlist/'
      path: '/wishlist'
      fullPath: '/wishlist'
      preLoaderRoute: typeof WishlistIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/detail/$id': {
      id: '/detail/$id'
      path: '/detail/$id'
      fullPath: '/detail/$id'
      preLoaderRoute: typeof DetailIdRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DetailIdRoute: DetailIdRoute,
  WishlistIndexRoute: WishlistIndexRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
