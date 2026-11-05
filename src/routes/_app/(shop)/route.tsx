import { meQueryOptions } from '#/services/auth/queries'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/(shop)')({
    beforeLoad: async ({ context:{ queryClient, auth }})=> {
        const token = auth.token
        if (!token)
        {
            throw redirect({to:'/login'})
        }
        try {
            await queryClient.ensureQueryData(meQueryOptions)
        } catch (error) {
            auth.clearInfo()
            throw redirect({to:'/login'})
        }
    },
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet/>
}
