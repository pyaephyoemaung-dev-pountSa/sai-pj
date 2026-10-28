import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(shop)/products/$productId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(shop)/products/$productId"!</div>
}
