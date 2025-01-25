import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function LoginPage() {
            const [email, setEmail] = useState("");
            const [password, setPassword] = useState("");
            const [showPassword, setShowPassword] = useState(false);
            const [error, setError] = useState("");
            const [loading, setLoading] = useState(false);

            const handleSubmit = (e) => {
                        e.preventDefault();
                        setError("");
                        setLoading(true);

                        setTimeout(() => {
                                    if (email === "admin@example.com" && password === "password") {
                                                alert("Login Successful!");
                                    } else {
                                                setError("Invalid email or password");
                                    }
                                    setLoading(false);
                        }, 1500);
            };

            return (
                        <div className="flex items-center justify-center min-h-screen bg-gray-100">
                                    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                                                <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Employee Login</h2>
                                                <form onSubmit={handleSubmit} className="space-y-4">
                                                            <div>
                                                                        <label className="block text-gray-700 font-medium">Email</label>
                                                                        <input
                                                                                    type="email"
                                                                                    value={email}
                                                                                    onChange={(e) => setEmail(e.target.value)}
                                                                                    required
                                                                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                                        />
                                                            </div>
                                                            <div className="relative ">
                                                                        <label className="block text-gray-700 font-medium">Password</label>
                                                                        <input
                                                                                    type={showPassword ? "text" : "password"}

                                                                                    value={password}
                                                                                    onChange={(e) => setPassword(e.target.value)}
                                                                                    required
                                                                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                                        />
                                                                        <button
                                                                                    type="button"
                                                                                    className="absolute right-3 top-11 text-gray-600"
                                                                                    onClick={() => setShowPassword(!showPassword)}
                                                                        >
                                                                                    {showPassword ? <FiEyeOff /> : <FiEye />}
                                                                        </button>
                                                            </div>
                                                            {error && <p className="text-red-500 text-sm">{error}</p>}
                                                            <button
                                                                        type="submit"
                                                                        disabled={loading}
                                                                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                                                            >
                                                                        {loading ? "Logging in..." : "Login"}
                                                            </button>
                                                </form>
                                    </div>
                        </div>
            );
}
