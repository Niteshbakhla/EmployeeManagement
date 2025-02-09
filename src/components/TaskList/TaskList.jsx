import React from 'react';

const TaskList = () => {
            return (
                        <div className="p-6 shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                                    <div className="bg-white p-5 rounded-lg shadow-lg border border-gray-200">
                                                <h3 className="text-lg font-semibold text-gray-700">John Doe</h3>
                                                <p className="text-sm text-gray-500">Software Engineer</p>
                                                <p className="mt-2 text-gray-700">Working on Dashboard UI</p>
                                                <span className="mt-2 inline-block px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                                                            Active
                                                </span>
                                    </div>
                        </div>
            );
}

export default TaskList;
