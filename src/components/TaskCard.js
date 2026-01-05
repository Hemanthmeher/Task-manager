import { FaEdit, FaTrash } from "react-icons/fa";

export default function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div className="task-card">
      <div className="task-header">
        <img src={task.avatar} className="avatar" alt="user" />
        <div className="task-actions">
          <FaEdit className="icon edit" onClick={onEdit} />
          <FaTrash className="icon delete" onClick={onDelete} />
        </div>
      </div>
      <p className="task-title">{task.title}</p>
    </div>
  );
}
