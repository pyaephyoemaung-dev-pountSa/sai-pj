import { useLoginMutation } from "#/services/auth/mutation"
import type { ILoginPayLoad } from "#/services/auth/type"
import { useState } from "react"

const Login = () =>
{
    const [formData, setFormData] = useState<ILoginPayLoad>({
            email: '',
            password:''
    })
    const login = useLoginMutation()
    return (
        <>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Register</h2>
                
                <form className="space-y-4" onSubmit={(e) =>
                {
                    e.preventDefault()
                    login.mutate(formData)
                }
                }>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                    type="email" 
                    value={formData.email}
                            onChange={(e) =>
                            {
                        setFormData((prev)=>({...prev,email:e.target.value}))
                    }}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                    required
                    />
                </div>
                <div>
                    <div className="flex justify-between items-center mb-1">
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <a href="#" className="text-xs font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                    </div>
                    <input 
                    type="password" 
                    value={formData.password}
                    onChange={(e)=>(setFormData((prev)=>({...prev,password:e.target.value})))} 
                    placeholder="••••••••"
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                    required
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                    Sign In
                </button>
                </form>
            </div>
            </div>
        </>
    )
}
export default Login