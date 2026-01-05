# Simple Task Manager

A responsive **Task Manager web application** built using **React** and **Bootstrap**.  
The application allows users to manage tasks efficiently using a **Kanban-style board** with full **CRUD operations**, as per the given assignment requirements.

---

## 🚀 Features

- Add new tasks  
- View tasks by status  
- Edit existing tasks  
- Delete tasks  
- Task categorization:
  - To Do
  - In Progress
  - Done
- Data persistence using **localStorage**
- Fully responsive for all devices (mobile, tablet, desktop)

---

## 🛠️ Tech Stack

- **Frontend:** React.js  
- **Styling :** Custom CSS  
- **Icons:** React Icons  
- **State Management:** React Hooks (`useState`, `useEffect`)  
- **Storage:** Browser Local Storage  

---

## 📂 Project Structure

src/
│
├── components/
│ ├── Sidebar.js
│ ├── TaskBoard.js
│ └── TaskCard.js
| └── TaskModal.js
│
├── App.js
├── App.css
└── index.js

yaml
Copy code

---

## ▶️ How to Run Locally

1. Clone the repository:
```bash
git clone <your-github-repository-link>
Navigate to the project directory:

bash
Copy code
cd task-manager
Install dependencies:

bash
Copy code
npm install
Start the application:

bash
Copy code
npm start
The application will run on:

arduino
Copy code
http://localhost:3000
📱 Responsive Design
Uses Bootstrap grid system for responsive layout

Kanban board supports horizontal scrolling on smaller screens

Optimized for:

Mobile devices

Tablets

Laptops

Desktops

💡 Design Implementation
The UI is developed to closely match the shared mock-up design, including:

Sidebar navigation

Search bar with icons

Task cards with edit and delete actions

Clean and modern dashboard layout

🧠 Key Highlights
No backend used (as per assignment requirement)

All task data stored using localStorage

Modular and reusable React components

Clean and readable code structure

📌 Future Enhancements (Optional)
Drag and drop functionality for tasks

Backend integration

User authentication

Advanced filtering and search

👤 Author
Singamsetti Syamanth Uma Sai Kiran
B.Tech Student | Frontend Developer

✅ Assignment Checklist
UI matches the provided mock-up

CRUD operations implemented

Application runs locally

Responsive across all devices

Uses preferred frontend framework

