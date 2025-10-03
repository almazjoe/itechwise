import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'Case studies', to: '/cases' },
  { name: 'Articles', to: '/articles' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 bg-[#0c0d10bf] backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between gap-6">
        <Link to="/" aria-label="ITechWise home" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-3xl bg-gold bg-[length:160%] bg-center shadow-lg shadow-brand/25" aria-hidden />
          <span className="font-semibold tracking-tight text-lg">ITechWise</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `relative transition text-muted hover:text-text pb-1 ${
                  isActive || location.pathname.startsWith(link.to) && link.to !== '/'
                    ? 'text-text'
                    : ''
                }`
              }
              end={link.to === '/'}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span
                    aria-hidden
                    className={`absolute left-0 bottom-0 h-[2px] transition-all duration-300 ${
                      isActive || (location.pathname.startsWith(link.to) && link.to !== '/')
                        ? 'w-full bg-brand'
                        : 'w-0 bg-transparent'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand text-bg font-medium px-5 py-2.5 shadow-lg shadow-brand/40 hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Get candidates in 48 hours
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
