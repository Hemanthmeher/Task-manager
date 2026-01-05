import { useState, useEffect } from "react";

export default function TaskModal({ isOpen, onClose, onSave, task }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setStatus(task.status);
    } else {
      setTitle("");
      setStatus("todo");
    }
  }, [task]);

  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <h3>{task ? "Edit Task" : "Add Task"}</h3>

        <input
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="todo">To Do</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button className="save" onClick={() => onSave({ title, status })}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
