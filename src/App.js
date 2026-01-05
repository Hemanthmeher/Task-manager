import Sidebar from "./components/Sidebar";
import TaskBoard from "./components/TaskBoard";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <TaskBoard />
      </div>
    </div>
  );
}
