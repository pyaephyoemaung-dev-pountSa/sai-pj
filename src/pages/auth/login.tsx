import { Button } from "#/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "#/components/ui/card"
import { Field, FieldError, FieldGroup, FieldLabel } from "#/components/ui/field"
import { Input } from "#/components/ui/input"
import { zodResolver } from '@hookform/resolvers/zod'
import { useLoginMutation } from "#/services/auth/mutation"

import z from "zod"
import { Controller, useForm } from 'react-hook-form'

const formSchema = z.object({
    email:z.string().email({
        message:'Invalid email'
    }),
    password:z.string().min(6),
})
const Login = () =>
{
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password:''
        }
    })
    const login = useLoginMutation()
    function onSubmit(data: z.infer<typeof formSchema>)
    {
        login.mutate(data)
    }
    return (
        <>
        <div className="flex justify-center my-auto">
      <Card className="w-full sm:max-w-md mt-7">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">Email</FieldLabel>

                    <Input
                      {...field}
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="email@gmail.com"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-description">
                      Password
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="*********"
                      autoComplete="off"
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" form="form-rhf-demo">
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
        </>
    )
}
export default Login