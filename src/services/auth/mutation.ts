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
            toast.success(data.message("Registration successful!"))
            setInfo(data.token, data.user)
            navigation({to:'/'})
            return data
        },
        onError: (data: { error: string }) =>
        {
            toast.error("Fail to register!! please try again")
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
            toast.success(data.message("Login successful!"))
            setInfo(data.token,data.user)
            navigate({to:'/'})
            return data
        },
        onError: (data: { error: string }) =>
        {
            toast.error("Login fail!! please try again")
            return data
        }
    })
}