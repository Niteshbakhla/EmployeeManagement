import { useState } from "react";
import { FiMenu, FiLogOut } from "react-icons/fi";

export default function AdminPanel() {
            const [isSidebarOpen, setIsSidebarOpen] = useState(true);

            return (
                        <div className="flex h-screen bg-gray-100">
                                    {/* Sidebar */}
                                    <div className={`bg-blue-600 text-white w-64 p-5 transition-all ${isSidebarOpen ? "block" : "hidden"} sm:block`}>
                                                <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
                                                <ul className="space-y-4">
                                                            <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">Dashboard</li>
                                                            <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">Employees</li>
                                                            <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">Tasks</li>
                                                            <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">Settings</li>
                                                </ul>
                                    </div>

                                    {/* Main Content */}
                                    <div className="flex-1 flex flex-col ">
                                                <header className="bg-white shadow p-4 flex justify-between items-center">
                                                            <button className="text-blue-600 sm:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                                                        <FiMenu size={24} />
                                                            </button>
                                                            <h1 className="text-xl font-semibold">Admin Dashboard</h1>
                                                            <button className="text-red-600 hover:text-red-800">
                                                                        <FiLogOut size={24} />
                                                            </button>
                                                </header>

                                                {/* Create Task Form */}
                                                <div className="p-6 bg-white  shadow-lg rounded-lg m-6 h-screen  ">
                                                            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Create Task</h2>
                                                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                                                        <div>
                                                                                    <label className="block text-gray-700 font-medium">Task Title</label>
                                                                                    <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400" />
                                                                        </div>
                                                                        <div className="h-[500px] mb-10 lg:h-[100px]">
                                                                                    <label className="block text-gray-700 font-medium">Description</label>
                                                                                    <textarea className="w-full h-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 "></textarea>
                                                                        </div>
                                                                        <div>
                                                                                    <label className="block text-gray-700 font-medium">Date</label>
                                                                                    <input type="date" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400" />
                                                                        </div>
                                                                        <div>
                                                                                    <label className="block text-gray-700 font-medium">Assign To</label>
                                                                                    <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400" />
                                                                        </div>
                                                                        <div>
                                                                                    <label className="block text-gray-700 font-medium">Category</label>
                                                                                    <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400" />
                                                                        </div>
                                                                        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                                                                                    Create Task
                                                                        </button>
                                                            </form>
                                                </div>
                                    </div>
                        </div>
            );
}
