import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ArticleLayout from '../components/ArticleLayout.jsx';

const articles = {
  'engineering-hiring-trends-2024': {
    title: 'Engineering hiring trends for Web3, FinTech and AI in 2024',
    date: 'April 2024',
    body: [
      'The market for emerging technology talent has normalized after the rapid swings of 2022–23. Companies are doubling down on senior engineers capable of shipping complex systems with lean teams.',
      'Rust and Go remain the most requested backend languages in Web3 and trading, while Python and Scala dominate data and ML pipelines. AI teams increasingly require applied scientists who can translate research into production.',
      'Compensation expectations vary by region: senior Rust engineers in the EU now command €110k–€150k base, while LATAM specialists often accept USD 80k–120k with token upside. Hybrid and remote flexibility is a non-negotiable demand.',
      'Successful teams invest in tailored outreach, transparent processes and structured assessments to win top talent quickly.',
    ],
  },
  'building-remote-teams': {
    title: 'How to build resilient remote engineering teams across timezones',
    date: 'February 2024',
    body: [
      'Building distributed teams starts with designing overlapping hours and reliable async rituals. We recommend splitting squads into pod structures anchored around product areas.',
      'Hiring from EU, MENA, APAC and LATAM enables 24/5 coverage, but requires thoughtful documentation culture, robust security practices and localized benefits.',
      'Employers that invest in onboarding playbooks, mentorship and regular on-sites see retention gains even in highly competitive markets.',
    ],
  },
  'technical-screening-playbook': {
    title: 'A modern technical screening playbook for critical hires',
    date: 'January 2024',
    body: [
      'The best technical interviews simulate real-world work. Replace abstract puzzles with collaborative code reviews, architecture discussions and scenario-based assessments.',
      'ITechWise runs structured scorecards that cover technical depth, communication and leadership signals, providing clients with clear recommendations.',
      'Candidates value transparency—sharing timelines, expectations and feedback loops reduces drop-off and improves employer brand.',
    ],
  },
  'talent-intelligence': {
    title: 'Turning talent intelligence into a competitive edge',
    date: 'November 2023',
    body: [
      'Talent intelligence blends market data, human relationships and automation to prioritize hiring bets. Start by mapping target personas and regions, then layering in compensation and competitor signals.',
      'Weekly dashboards keep founders and talent leaders aligned while embedded recruiters translate insights into outreach campaigns.',
      'Companies that operationalize these loops fill roles faster and create better candidate experiences.',
    ],
  },
};

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = articles[slug];

  if (!article) {
    return (
      <div className="pt-24 pb-20 max-w-3xl mx-auto px-6 text-center space-y-6">
        <h1 className="text-3xl font-semibold">Article not found</h1>
        <p className="text-muted">Explore more insights from our team.</p>
        <Link to="/articles" className="inline-flex rounded-full border border-white/10 px-5 py-2 text-sm hover:text-text">
          Back to articles
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6 space-y-10">
        <ArticleLayout title={article.title} date={article.date}>
          {article.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </ArticleLayout>
        <Link to="/articles" className="inline-flex rounded-full border border-white/10 px-5 py-2 text-sm hover:text-text">
          Back to articles
        </Link>
      </div>
    </div>
  );
};

export default ArticleDetail;
