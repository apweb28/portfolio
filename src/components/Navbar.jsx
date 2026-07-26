import { leftNavLinks, rightNavLinks } from '../data/navLinks.js';

export default function Navbar({ isSticky, isMenuOpen, onToggleMenu }) {
  return (
    <header className={`site-header${isSticky ? ' sticky' : ''}`}>
      <div className="container">
        <nav className={`navbar${isMenuOpen ? ' menu-open' : ''}`}>
          <ul className="nav-menu left-menu">
            {leftNavLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={link.active ? 'active' : undefined}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="logo-wrapper">
            <div className="logo">
              <img src="/images/logo.png" alt="AP Logo" />
            </div>
          </div>

          <ul className="nav-menu right-menu">
            {rightNavLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <button className="mobile-toggle" onClick={onToggleMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
}
