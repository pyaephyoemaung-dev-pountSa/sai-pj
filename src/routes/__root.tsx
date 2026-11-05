import Headers from '#/components/Layouts/header.tsx'
import { Outlet, createRootRoute, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import '../styles.css'
import type { QueryClient } from '@tanstack/react-query'
import { Footer } from '#/components/Layouts/footer'
import type { IAuthStore } from '#/stores/useAuthStore'

interface MyRouterContext
{
  queryClient: QueryClient
  auth:IAuthStore
}
export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <div className='min-h-screen flex flex-col'>
      <Outlet />

     
      <Footer/>
      </div>
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'TanStack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  )
}
