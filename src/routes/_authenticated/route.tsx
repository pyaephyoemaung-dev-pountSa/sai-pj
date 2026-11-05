import AuthLayout from '#/components/Layouts/auth-layout'
import { meQueryOptions } from '#/services/auth/queries'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({
    beforeLoad: async ({ context: { queryClient, auth } }) =>
    {
        const token = auth.token
    if(!token)
    {
        throw redirect({ to: '/login'})
    }
        try {
            await queryClient.ensureQueryData(meQueryOptions)
        } catch (error) {
            auth.clearInfo()
            throw redirect({ to: '/login'})
        }
    },
  component: AuthLayout,
})
