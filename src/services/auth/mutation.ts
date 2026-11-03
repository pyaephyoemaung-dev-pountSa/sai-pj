import type { ILoginPayLoad, IRegisterPayLoad } from "./type"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import { authApi } from "../api"
import { useNavigate } from "@tanstack/react-router"
import useAuthStore from "#/stores/useAuthStore"

const register = async (payload: IRegisterPayLoad) =>
{
    const response = await authApi.post('/register', payload)
    return response.data
}
export const useRegisterMutation = () =>
{
    const navigation = useNavigate()
    const {setInfo} = useAuthStore()
    return useMutation({
        mutationFn: (payload: IRegisterPayLoad) => register(payload),
        onSuccess: (data) =>
        {
            toast.success(data.message)
            setInfo(data.token, data.user)
            navigation({to:'/dashboard'})
            return data
        },
        onError: (data: { error: string }) =>
        {
            toast.error(data.error)
            return data
        }
    })
}
const login = async (payload: ILoginPayLoad) =>
{
    const response = await authApi.post('/login', payload)
    return response.data
}
export const useLoginMutation = () =>
{
    const navigate = useNavigate()
    const {setInfo} = useAuthStore()
    return useMutation({
        mutationFn: (payload: ILoginPayLoad) => login(payload),
        onSuccess: (data) =>
        {
            toast.success(data.message)
            setInfo(data.token,data.user)
            navigate({to:'/dashboard'})
            return data
        },
        onError: (data: { error: string }) =>
        {
            toast.error(data.error)
            return data
        }
    })
}