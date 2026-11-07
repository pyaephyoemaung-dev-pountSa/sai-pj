import { meQueryOptions } from '#/services/auth/queries'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/(shop)')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet/>
}
