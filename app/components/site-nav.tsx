import { MoonIcon, SunIcon } from "./icons";

export default function SiteNav() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <a className="brand" href="#top">
        <span>Anthonia Akouete</span>
      </a>
      <input className="nav-switch-input" id="nav-switch" type="checkbox" aria-label="Toggle navigation" />
      <div className="nav-links">
        <a className="nav-home" href="#top">Home</a>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="nav-controls">
        <div className="theme-control">
          <input className="theme-switch-input" id="theme-switch" type="checkbox" aria-label="Toggle dark theme" />
          <label className="theme-toggle" htmlFor="theme-switch" title="Toggle dark theme">
            <MoonIcon /><SunIcon /><span className="sr-only">Toggle dark theme</span>
          </label>
        </div>
        <label className="menu-toggle" htmlFor="nav-switch" aria-hidden="true">
          <svg className="icon menu-open-icon" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
          <svg className="icon menu-close-icon" viewBox="0 0 24 24" fill="none"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
          <span className="sr-only">Open or close navigation</span>
        </label>
      </div>
    </nav>
  );
}
