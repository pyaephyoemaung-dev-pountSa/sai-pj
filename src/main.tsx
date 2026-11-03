import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import useAuthStore from './stores/useAuthStore'

  const queryClient = new QueryClient()
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: false,
  context: {
    queryClient,
    auth:undefined!
  }
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () =>
{
  const auth = useAuthStore()
  return   <RouterProvider router={router} context={{auth}} />
}

const rootElement = document.getElementById('app')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)

  root.render(
    <QueryClientProvider client={queryClient}>
    <App/>
    </QueryClientProvider>,
  )
}
