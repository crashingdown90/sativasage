'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="logo" onClick={closeMenu}>
          <span className="logo-icon">🌿</span>
          Sativa Sage
        </Link>
        
        <button 
          className="mobile-menu-btn" 
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
        
        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active-link' : ''}`} onClick={closeMenu}>Home</Link>
          <Link href="/herbs" className={`nav-link ${pathname === '/herbs' ? 'active-link' : ''}`} onClick={closeMenu}>Healing Herbs</Link>
          <Link href="/wellness" className={`nav-link ${pathname === '/wellness' ? 'active-link' : ''}`} onClick={closeMenu}>Holistic Wellness</Link>
          <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active-link' : ''}`} onClick={closeMenu}>About</Link>
          <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active-link' : ''}`} onClick={closeMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
