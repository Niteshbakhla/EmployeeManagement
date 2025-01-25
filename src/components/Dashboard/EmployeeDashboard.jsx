import { useState } from "react";
import { FiLogOut, FiMenu } from "react-icons/fi";
import TaskList from "../TaskList/TaskList";

export default function EmployeDashboard() {
            const [isSidebarOpen, setIsSidebarOpen] = useState(true);

            return (
                        <div className="flex justify-center h-screen bg-gray-100 ">
                                    {/* Sidebar */}
                                    <div className={`bg-blue-600 lg:flex-0 lg:basis-[20%]  text-white transition-all ${isSidebarOpen ? "sm:w-[45%] p-5 " : "w-[0%] sm:p-0 overflow-hidden "}`}>
                                                <h2 className="text-xl font-bold mb-6">Hello Nitesh ✌️</h2>
                                                <ul className="space-y-4">
                                                            <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">Dashboard</li>
                                                            <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">Employees</li>
                                                            <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">Projects</li>
                                                            <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">Settings</li>
                                                </ul>
                                    </div>

                                    {/* Main Content */}
                                    <div className="flex-1 flex flex-col ">
                                                <header className="bg-white shadow p-4 px-4 flex justify-between items-center">
                                                            <button className="text-blue-600 sm:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                                                        <FiMenu size={24} />
                                                            </button>
                                                            <h1 className="text-xl font-semibold">Dashboard</h1>
                                                            <button className="text-red-600 hover:text-red-800 ">
                                                                        <FiLogOut size={24} />
                                                            </button>
                                                </header>

                                                {/* Dashboard Content */}
                                                <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                                            <div className="bg-white p-5 rounded-lg shadow-lg">
                                                                        <h3 className="text-lg font-semibold text-gray-700">Total Employees</h3>
                                                                        <p className="text-3xl font-bold text-blue-600">120</p>
                                                            </div>
                                                            <div className="bg-white p-5 rounded-lg shadow-lg">
                                                                        <h3 className="text-lg font-semibold text-gray-700">Active Projects</h3>
                                                                        <p className="text-3xl font-bold text-green-600">8</p>
                                                            </div>
                                                            <div className="bg-white p-5 rounded-lg shadow-lg">
                                                                        <h3 className="text-lg font-semibold text-gray-700">Pending Tasks</h3>
                                                                        <p className="text-3xl font-bold text-red-600">25</p>
                                                            </div>
                                                </main>

                                                <TaskList />

                                    </div>
                        </div>
            );
}
