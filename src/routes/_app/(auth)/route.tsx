import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/(auth)')({
    beforeLoad: async ({ context: { auth } }) =>
    {
        const token = auth.token
        if (token)
        {
            throw redirect({to:'/'})
        }
    },
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet/>
}
