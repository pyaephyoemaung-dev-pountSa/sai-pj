import { queryOptions } from "@tanstack/react-query"
import { authApi } from "../api"
import { meSchema } from "./schema"
import Cookie from "js-cookie"

const me = async () =>
{
    const token = Cookie.get('token')

    const response = await authApi.get('/me', {
        headers: {
            Authorization:`Bearer ${token}`,
        }
    })
    return meSchema.parse(response.data)
}
export const meQueryOptions = queryOptions({
    queryKey: ['me'],
    queryFn: me,
    select:(data)=>data.user
})