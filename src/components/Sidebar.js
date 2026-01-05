export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">🔷 TaskMinder</h2>

      <nav className="sidebar-nav">
        <a className="nav-item">Dashboard</a>
        <a className="nav-item">Projects</a>
        <a className="nav-item active">Tasks</a>
        <a className="nav-item">Calendar</a>
      </nav>

      <button className="logout">Log out</button>
    </aside>
  );
}
