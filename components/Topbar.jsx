// components/Topbar.jsx
export default function Topbar() {
  return (
    <div className="topbar" role="navigation">
      <nav className="nav" aria-label="Primary">
        <a href="/home" aria-current="page">Home</a>
        <a href="#work">Work</a>
        <a href="#" target="_blank" rel="noopener">About</a>
        <a href="#" target="_blank" rel="noopener">Contact</a>
      </nav>
    </div>
  );
}
