import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = [
  {
    title: 'Services',
    items: [
      { label: 'Executive search', to: '/services' },
      { label: 'Embedded recruitment', to: '/services' },
      { label: 'Technical assessments', to: '/services' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', to: '/about' },
      { label: 'Case studies', to: '/cases' },
      { label: 'Articles', to: '/articles' },
    ],
  },
  {
    title: 'Contact',
    items: [
      { label: 'hello@itechwise.com', to: 'mailto:hello@itechwise.com' },
      { label: 'LinkedIn', to: 'https://www.linkedin.com/company/itechwise/' },
      { label: 'Book a call', to: '/contact' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/5 bg-[#0b0c10]/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-3xl bg-gold bg-[length:160%] bg-center shadow-lg shadow-brand/25" aria-hidden />
            <span className="font-semibold tracking-tight text-lg">ITechWise</span>
          </div>
          <p className="text-sm text-muted max-w-sm">
            Predictable hiring for Web3, FinTech, iGaming and AI. We combine market intelligence, human touch and automation to deliver talent at speed.
          </p>
        </div>
        {footerLinks.map((column) => (
          <div key={column.title} className="space-y-4">
            <p className="text-sm font-semibold text-text/80 uppercase tracking-[0.3em]">{column.title}</p>
            <ul className="space-y-2 text-sm text-muted">
              {column.items.map((item) => (
                <li key={item.label}>
                  {item.to.startsWith('http') || item.to.startsWith('mailto') ? (
                    <a
                      href={item.to}
                      target={item.to.startsWith('http') ? '_blank' : undefined}
                      rel={item.to.startsWith('http') ? 'noreferrer' : undefined}
                      className="hover:text-text"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.to} className="hover:text-text">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} ITechWise. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
