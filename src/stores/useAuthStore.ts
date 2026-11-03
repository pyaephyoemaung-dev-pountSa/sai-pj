import {create} from "zustand"
import type { MeType } from "#/services/auth/type"
import Cookie from "js-cookie"


export interface IAuthStore
{
    isAuthenticated: boolean,
    token: string | null,
    user: MeType | null,
    setInfo: (token: string, user: MeType) => void,
    clearInfo:()=>void
}

export default create<IAuthStore>((set) =>
{
    const token = Cookie.get("token") ?? null
    console.log(token)
    const userInfo = Cookie.get('user') ? JSON.parse(Cookie.get('user') as string) : null

    return {
        isAuthenticated: token ? true : false,
        token: token ?? null,
        user: userInfo,
        // eslint-disable-next-line no-shadow
        setInfo: (token: string, user: MeType) =>
        {
            Cookie.set('token', token, {
                expires:7
            }),
            Cookie.set('user', JSON.stringify(user), {
                    expires:7
            })
            set({isAuthenticated:true,token,user})
        },
        clearInfo: () =>
        {
            Cookie.remove('token')
            Cookie.remove('user')
            set({isAuthenticated:false,token:null,user:null})
        }
    }
})