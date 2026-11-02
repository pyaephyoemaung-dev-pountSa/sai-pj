import HomePage from '#/pages/home'
import { createFileRoute } from '@tanstack/react-router'
import z from 'zod'


const validateSearch = z.object({
    category: z.string().default("all")
})
export const Route = createFileRoute('/(shop)/')({ validateSearch, component: HomePage })
