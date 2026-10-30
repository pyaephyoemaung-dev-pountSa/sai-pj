import productDetails from '#/pages/products/productDetails'
import { createFileRoute } from '@tanstack/react-router'
import z from 'zod'
import { zodValidator } from '@tanstack/zod-adapter';

export const Route = createFileRoute('/(shop)/products/$productId')({
  validateSearch: zodValidator(
    z.object({
      category : z.string().optional(),
    })
  ),
  component: productDetails,
})

