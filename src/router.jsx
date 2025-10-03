import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Cases from './pages/Cases.jsx';
import CaseDetail from './pages/CaseDetail.jsx';
import Articles from './pages/Articles.jsx';
import ArticleDetail from './pages/ArticleDetail.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/services', element: <Services /> },
  { path: '/cases', element: <Cases /> },
  { path: '/cases/:slug', element: <CaseDetail /> },
  { path: '/articles', element: <Articles /> },
  { path: '/articles/:slug', element: <ArticleDetail /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
];

export const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

export default routes;
