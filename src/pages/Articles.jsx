import React from 'react';
import BlogList from '../components/BlogList.jsx';

const articles = [
  {
    slug: 'engineering-hiring-trends-2024',
    title: 'Engineering hiring trends for Web3, FinTech and AI in 2024',
    excerpt:
      'Salary benchmarks, hot skills and regional insights drawn from over 7 million candidates across emerging tech verticals.',
    date: 'April 2024',
  },
  {
    slug: 'building-remote-teams',
    title: 'How to build resilient remote engineering teams across timezones',
    excerpt:
      'Playbooks for hiring in EU, MENA, APAC and LATAM while keeping culture, velocity and compliance in sync.',
    date: 'February 2024',
  },
  {
    slug: 'technical-screening-playbook',
    title: 'A modern technical screening playbook for critical hires',
    excerpt: 'Interview frameworks, assessments and scorecards that uncover true strengths.',
    date: 'January 2024',
  },
  {
    slug: 'talent-intelligence',
    title: 'Turning talent intelligence into a competitive edge',
    excerpt:
      'How successful companies blend data, human insight and automation to scale hiring efficiently.',
    date: 'November 2023',
  },
];

const Articles = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="max-w-6xl mx-auto px-6 space-y-12">
        <header className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">Articles</p>
          <h1 className="text-4xl font-semibold">Insights from global hiring operators</h1>
          <p className="text-muted">
            Read our playbooks on technical recruiting, market expansion and talent operations from across Web3, FinTech, iGaming and AI.
          </p>
        </header>
        <BlogList articles={articles} />
      </section>
    </div>
  );
};

export default Articles;
