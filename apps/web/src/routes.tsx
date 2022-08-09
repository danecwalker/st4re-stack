import { lazy } from "solid-js"
import { useRoutes } from "@solidjs/router"

const ROUTES: Record<string, ()=> Promise<any> > = import.meta.glob('./pages/**/[a-z[]*.tsx')

export const routes = Object.keys(ROUTES).map((route) => {
  const path = route
    .replace(/\.\/pages|index|\.tsx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1')

  return { path, component: lazy(ROUTES[route])}
})

export const AppRoutes = () => {
  const Routes = useRoutes(routes);

  return (
    <Routes />
  )
}