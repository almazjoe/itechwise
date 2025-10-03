import React from 'react';
import ContactForm from '../components/ContactForm.jsx';

const Contact = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="max-w-6xl mx-auto px-6 space-y-12">
        <header className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">Contact</p>
          <h1 className="text-4xl font-semibold">Book a discovery call</h1>
          <p className="text-muted">
            Share your hiring roadmap and we will design a tailored approach. Expect a shortlist of vetted candidates within 48 hours of kickoff.
          </p>
        </header>
        <ContactForm />
      </section>
    </div>
  );
};

export default Contact;
