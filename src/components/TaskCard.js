import React from 'react';

function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div className="task-card">
      <div className="task-header">
        <img src={task.avatar} className="avatar" alt="user" />
        <div className="task-actions">
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#64748b" 
            strokeWidth="2" 
            style={{cursor: 'pointer'}} 
            onClick={onEdit}
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#64748b" 
            strokeWidth="2" 
            style={{cursor: 'pointer'}} 
            onClick={onDelete}
          >
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
          </svg>
        </div>
      </div>
      <p className="task-title">{task.title}</p>
    </div>
  );
}

export default TaskCard;