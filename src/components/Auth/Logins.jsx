import { useState } from 'react'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'

export default function LoginPage() {
            const [showPassword, setShowPassword] = useState(false)

            return (
                        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 p-4">
                                    <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-2xl transform transition-all hover:scale-105 duration-500">
                                                <div className="text-center">
                                                            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Welcome back</h2>
                                                            <p className="mt-2 text-sm text-gray-600">Please sign in to your account</p>
                                                </div>
                                                <form className="mt-8 space-y-6" action="#" method="POST">
                                                            <input type="hidden" name="remember" value="true" />
                                                            <div className="rounded-md shadow-sm -space-y-px">
                                                                        <div>
                                                                                    <label htmlFor="email-address" className="sr-only">Email address</label>
                                                                                    <div className="relative">
                                                                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                                                                            <Mail className="h-5 w-5 text-gray-400" />
                                                                                                </div>
                                                                                                <input
                                                                                                            id="email-address"
                                                                                                            name="email"
                                                                                                            type="email"
                                                                                                            autoComplete="email"
                                                                                                            required
                                                                                                            className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                                                                                            placeholder="Email address"
                                                                                                />
                                                                                    </div>
                                                                        </div>
                                                                        <div>
                                                                                    <label htmlFor="password" className="sr-only">Password</label>
                                                                                    <div className="relative">
                                                                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                                                                            <Lock className="h-5 w-5 text-gray-400" />
                                                                                                </div>
                                                                                                <input
                                                                                                            id="password"
                                                                                                            name="password"
                                                                                                            type={showPassword ? "text" : "password"}
                                                                                                            autoComplete="current-password"
                                                                                                            required
                                                                                                            className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                                                                                            placeholder="Password"
                                                                                                />
                                                                                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                                                                                            <button
                                                                                                                        type="button"
                                                                                                                        onClick={() => setShowPassword(!showPassword)}
                                                                                                                        className="text-gray-400 focus:outline-none focus:text-gray-500"
                                                                                                            >
                                                                                                                        {showPassword ? (
                                                                                                                                    <EyeOff className="h-5 w-5" />
                                                                                                                        ) : (
                                                                                                                                    <Eye className="h-5 w-5" />
                                                                                                                        )}
                                                                                                            </button>
                                                                                                </div>
                                                                                    </div>
                                                                        </div>
                                                            </div>

                                                            <div className="flex items-center justify-between">
                                                                        <div className="flex items-center">
                                                                                    <input
                                                                                                id="remember-me"
                                                                                                name="remember-me"
                                                                                                type="checkbox"
                                                                                                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                                                                                    />
                                                                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                                                                                Remember me
                                                                                    </label>
                                                                        </div>

                                                                        <div className="text-sm">
                                                                                    <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                                                                                                Forgot your password?
                                                                                    </a>
                                                                        </div>
                                                            </div>

                                                            <div>
                                                                        <button
                                                                                    type="submit"
                                                                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300"
                                                                        >
                                                                                    Sign in
                                                                        </button>
                                                            </div>
                                                </form>
                                                <div className="text-center">
                                                            <p className="text-sm text-gray-600">
                                                                        Don't have an account?{' '}
                                                                        <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                                                                                    Sign up
                                                                        </a>
                                                            </p>
                                                </div>
                                    </div>
                        </div>
            )
}