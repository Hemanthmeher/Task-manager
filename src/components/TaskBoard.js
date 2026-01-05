import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import {
  FiSearch,
  FiBell,
  FiUsers,
  FiSliders
} from "react-icons/fi";

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/65.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
  "https://randomuser.me/api/portraits/men/77.jpg"
];

export default function TaskBoard() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo");
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const openAdd = () => {
    setTitle("");
    setStatus("todo");
    setEditId(null);
    setShowModal(true);
  };

  const openEdit = (task) => {
    setTitle(task.title);
    setStatus(task.status);
    setEditId(task.id);
    setShowModal(true);
  };

  const saveTask = () => {
    if (!title.trim()) return;

    if (editId) {
      setTasks(tasks.map(t =>
        t.id === editId ? { ...t, title, status } : t
      ));
    } else {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title,
          status,
          avatar: avatars[Math.floor(Math.random() * avatars.length)]
        }
      ]);
    }

    setShowModal(false);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const renderColumn = (s, label, cls) => (
    <div className={`column ${cls}`}>
      <h3>{label}</h3>
      {tasks.filter(t => t.status === s).map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={() => openEdit(task)}
          onDelete={() => deleteTask(task.id)}
        />
      ))}
    </div>
  );

  return (
    <>
      <div className="topbar">
        <div className="search-box">
          <FiSearch className="search-icon" />
          <input className="search" placeholder="Search" />
        </div>

        <div className="top-actions">
          <FiUsers className="top-icon" />
          <FiSliders className="top-icon" />
          <FiBell className="top-icon" />
          <img
            className="profile"
            src="https://randomuser.me/api/portraits/men/10.jpg"
            alt="profile"
          />
        </div>
      </div>

      <div className="tasks-header">
        <h1 className="page-title">Tasks</h1>
        <button className="new-task" onClick={openAdd}>
          New task +
        </button>
      </div>

      <section className="board">
        {renderColumn("todo", "To Do", "todo")}
        {renderColumn("inprogress", "In Progress", "inprogress")}
        {renderColumn("done", "Done", "done")}
      </section>

      {showModal && (
        <div className="overlay">
          <div className="modal">
            <h3>{editId ? "Edit Task" : "Add Task"}</h3>

            <input
              placeholder="Task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="todo">To Do</option>
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
            </select>

            <div className="modal-actions">
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button className="save" onClick={saveTask}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
