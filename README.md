# Task Manager

A responsive Task Manager web application built with React for efficient task organization and management. Features a Kanban-style board with full CRUD operations for seamless task tracking.

## ✨ Features

- **Task Management**: Create, read, update, and delete tasks
- **Kanban Board**: Organize tasks across three status columns:
  - To Do
  - In Progress
  - Done
- **Persistent Storage**: Tasks are saved locally and persist across sessions
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Intuitive UI**: Clean interface with easy-to-use controls

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Styling**: Custom CSS
- **Icons**: React Icons
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Storage**: Browser localStorage

## 📂 Project Structure

```
src/
├── components/
│   ├── Sidebar.js
│   ├── TaskBoard.js
│   ├── TaskCard.js
│   └── TaskModal.js
├── App.js
├── App.css
└── index.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd task-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the application**
   ```bash
   npm start
   ```

4. **Access the app**
   
   Open your browser and navigate to `http://localhost:3000`

## 📱 Responsive Design

The application is fully responsive and provides an optimal experience across all device sizes:

- **Mobile**: Streamlined single-column layout
- **Tablet**: Adaptive grid layout
- **Desktop**: Full Kanban board view with sidebar navigation

The design includes horizontal scrolling support for the task board on smaller screens.

## 💡 Implementation Details

- **Component-based architecture**: Modular and reusable React components
- **Local storage integration**: All task data persists in the browser
- **No backend dependency**: Fully functional client-side application
- **Clean code structure**: Organized and maintainable codebase

## 🎨 Design Features

The UI includes:

- Sidebar navigation for easy access
- Search functionality with icons
- Interactive task cards with edit/delete actions
- Modern dashboard layout
- Smooth transitions and hover effects

## 🔮 Future Enhancements

Potential features for future iterations:

- Drag-and-drop functionality for task reordering
- Task filtering and advanced search
- Backend integration with API
- User authentication and multiple user support
- Task due dates and priority levels
- Dark mode toggle

## 👨‍💻 Developer

**Imandi Hemanth Meher Sri Ram Kumar**  
B.Tech Student | Frontend Developer | UI/UX Designer

## 📝 Development Notes

This project was built as part of an academic assignment with the following requirements:

- ✅ UI matching provided mock-up design
- ✅ Full CRUD operations
- ✅ Runs locally without backend
- ✅ Responsive across all devices
- ✅ Built with modern frontend framework (React)

## 📄 License

This project is available for educational purposes.

---

*Built with React and dedication to clean, functional design.*
