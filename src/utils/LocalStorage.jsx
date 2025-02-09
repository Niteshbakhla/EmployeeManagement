const employees = [
            {
                        "id": 1,
                        "email": "john.doe@example.com",
                        "password": "password123",
                        "tasks": [
                                    {
                                                "taskTitle": "Design Dashboard",
                                                "taskDescription": "Create a responsive dashboard UI.",
                                                "active": true,
                                                "newTask": false,
                                                "completed": false,
                                                "failed": false
                                    }
                        ]
            },
            {
                        "id": 2,
                        "email": "jane.smith@example.com",
                        "password": "securepass",
                        "tasks": [
                                    {
                                                "taskTitle": "Fix Login Issue",
                                                "taskDescription": "Debug and fix authentication errors.",
                                                "active": false,
                                                "newTask": true,
                                                "completed": false,
                                                "failed": false
                                    }
                        ]
            },
            {
                        "id": 3,
                        "email": "michael.brown@example.com",
                        "password": "mikepass456",
                        "tasks": [
                                    {
                                                "taskTitle": "API Integration",
                                                "taskDescription": "Integrate third-party APIs.",
                                                "active": false,
                                                "newTask": false,
                                                "completed": true,
                                                "failed": false
                                    }
                        ]
            },
            {
                        "id": 4,
                        "email": "sarah.wilson@example.com",
                        "password": "sarahpass789",
                        "tasks": [
                                    {
                                                "taskTitle": "Database Migration",
                                                "taskDescription": "Migrate data to the new database.",
                                                "active": false,
                                                "newTask": false,
                                                "completed": false,
                                                "failed": true
                                    }
                        ]
            },
            {
                        "id": 5,
                        "email": "david.jones@example.com",
                        "password": "davidsecure",
                        "tasks": [
                                    {
                                                "taskTitle": "Write Documentation",
                                                "taskDescription": "Prepare documentation for the project.",
                                                "active": true,
                                                "newTask": false,
                                                "completed": false,
                                                "failed": false
                                    }
                        ]
            },
            {
                        "id": 6,
                        "email": "emma.taylor@example.com",
                        "password": "emma9876",
                        "tasks": [
                                    {
                                                "taskTitle": "Optimize Performance",
                                                "taskDescription": "Improve website load time.",
                                                "active": false,
                                                "newTask": true,
                                                "completed": false,
                                                "failed": false
                                    }
                        ]
            }
];


const admin = [
            {
                        "id": 1,
                        "email": "admin@example.com",
                        "password": "123"
            }
]


export const setLocalStorage = () => {
            localStorage.setItem("employees", JSON.stringify(employees))
            localStorage.setItem("admin", JSON.stringify(admin))
}


export const getLocalStorage = () => {

            const employeeData = JSON.parse(localStorage.getItem("employees"))
            const adminData = JSON.parse(localStorage.getItem("admin"))

            console.log(employeeData,adminData)
}