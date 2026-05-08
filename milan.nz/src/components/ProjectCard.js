import { useState } from 'react';
import './ProjectCard.css';

function ProjectCard({ label, children }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(o => !o);
  const handleKey = e => { if (e.key === 'Enter' || e.key === ' ') toggle(); };

  return (
    <div className="project-card">
      <div
        className="project-card-header"
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={toggle}
        onKeyDown={handleKey}
      >
        <div className="project-card-label">{label}</div>
        <span className={`project-card-chevron${open ? ' open' : ''}`}>▶</span>
      </div>
      {open && <div className="project-card-body">{children}</div>}
    </div>
  );
}

export default ProjectCard;
