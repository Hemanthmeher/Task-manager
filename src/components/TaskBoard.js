import React, { useState, useEffect } from 'react';
import TaskCard from './TaskCard';
import '../App.css';

function TaskBoard() {
  const avatars = [
"https://randomuser.me/api/portraits/women/44.jpg",
"https://randomuser.me/api/portraits/men/65.jpg",
"https://randomuser.me/api/portraits/men/12.jpg",
"https://randomuser.me/api/portraits/women/19.jpg",
"https://randomuser.me/api/portraits/men/45.jpg",
"https://randomuser.me/api/portraits/women/68.jpg",
"https://randomuser.me/api/portraits/men/23.jpg",
"https://randomuser.me/api/portraits/women/52.jpg",
"https://randomuser.me/api/portraits/men/77.jpg",
"https://randomuser.me/api/portraits/women/33.jpg",
"https://randomuser.me/api/portraits/men/41.jpg",
"https://randomuser.me/api/portraits/women/61.jpg",
"https://randomuser.me/api/portraits/men/56.jpg",
"https://randomuser.me/api/portraits/women/85.jpg"
  ];

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
      <h3>
        {s === 'todo' && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '8px'}}>
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          </svg>
        )}
        {s === 'inprogress' && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '8px'}}>
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        )}
        {s === 'done' && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '8px'}}>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        )}
        {label}
      </h3>
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
     <div className="topbar" style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '8px 30px',
  marginTop: '-10px'
}}>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          maxWidth: '900px',
          width: '100%',
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '9px 20px',
          gap: '12px'
        }}>
          <input 
            className="search" 
            placeholder="Search" 
            style={{
              border: 'none',
              outline: 'none',
              background: 'transparent',
              flex: 1,
              fontSize: '15px',
              color: '#64748b'
            }}
          />
          <svg width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="#a3b1c4ff" strokeWidth="2" style={{cursor: 'pointer', flexShrink: 0}}>
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </div>

        <div style={{position: 'absolute', right: '30px', display: 'flex', alignItems: 'center', gap: '16px'}}>
          <div style={{position: 'relative', cursor: 'pointer'}}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
            <div style={{position: 'absolute', top: '2px', right: '2px', width: '8px', height: '8px', background: '#ef4444', borderRadius: '50%', border: '1.5px solid white'}}></div>
          </div>
          <img
            className="profile"
            src="https://randomuser.me/api/portraits/men/20.jpg"
            alt="profile"
            style={{width: '40px', height: '40px', borderRadius: '50%'}}
          />
        </div>
      </div>

      <div className="tasks-header" style={{ marginTop: '79px' }}>
        <h1 className="page-title" style={{ fontFamily: '"Lato", "Helvetica Neue", Arial, sans-serif', fontWeight: '700', letterSpacing: '-0.01em' }}>Tasks</h1>
        <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
          <div style={{display: 'flex', gap: '30px'}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" style={{cursor: 'pointer'}}>
              <polyline points="17 1 21 5 17 9"/>
              <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
            </svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" style={{cursor: 'pointer'}}>
              <polyline points="7 1 3 5 7 9"/>
              <path d="M21 11V9a4 4 0 0 0-4-4H3"/>
            </svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" style={{cursor: 'pointer'}}>
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" style={{cursor: 'pointer'}}>
              <line x1="4" y1="21" x2="4" y2="14"/>
              <line x1="4" y1="10" x2="4" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12" y2="3"/>
              <line x1="20" y1="21" x2="20" y2="16"/>
              <line x1="20" y1="12" x2="20" y2="3"/>
              <line x1="1" y1="14" x2="7" y2="14"/>
              <line x1="9" y1="8" x2="15" y2="8"/>
              <line x1="17" y1="16" x2="23" y2="16"/>
            </svg>
          </div>
          <button className="new-task" onClick={openAdd} style={{
            padding: '11px 28px',
            fontSize: '15px',
            fontWeight: '600'
          }}>
            New task +
          </button>
        </div>
      </div>

      <section className="board">
        {renderColumn("todo", "To do", "todo")}
        {renderColumn("inprogress", "In progress", "inprogress")}
        {renderColumn("done", "Done", "done")}
      </section>

      {showModal && (
        <div className="overlay">
          <div className="modal" style={{
            borderRadius: '16px',
            padding: '28px',
            maxWidth: '420px'
          }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              marginBottom: '20px'
            }}>
              {editId ? "Edit Task" : "Add Task"}
            </h3>

            <input
              placeholder="Task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                padding: '12px 14px',
                borderRadius: '8px',
                fontSize: '14px',
                marginBottom: '16px'
              }}
            />

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              style={{
                padding: '12px 14px',
                borderRadius: '8px',
                fontSize: '14px',
                marginBottom: '24px',
                cursor: 'pointer'
              }}
            >
              <option value="todo">To Do</option>
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
            </select>

            <div className="modal-actions" style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'flex-end'
            }}>
              <button 
                onClick={() => setShowModal(false)}
                style={{
                  padding: '10px 22px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  background: 'white',
                  color: '#6b7280',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button 
                className="save" 
                onClick={saveTask}
                style={{
                  padding: '10px 22px',
                  borderRadius: '8px',
                  background: '#3b82f6',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  border: 'none'
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TaskBoard;