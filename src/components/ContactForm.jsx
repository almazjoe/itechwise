import React, { useState } from 'react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass-panel rounded-3xl border border-white/10 p-10 text-center space-y-4">
        <h2 className="text-3xl font-semibold">Thank you!</h2>
        <p className="text-muted">
          A specialist will reach out shortly to book a discovery call and align on your hiring goals.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel rounded-3xl border border-white/10 p-8 sm:p-10 space-y-6" noValidate>
      <div className="grid sm:grid-cols-2 gap-6">
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-muted">Name</span>
          <input
            type="text"
            name="name"
            required
            className="rounded-2xl bg-[#101218] border border-white/10 px-4 py-3 text-text focus:border-brand focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-muted">Work email</span>
          <input
            type="email"
            name="email"
            required
            className="rounded-2xl bg-[#101218] border border-white/10 px-4 py-3 text-text focus:border-brand focus:outline-none"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm">
        <span className="text-muted">Company</span>
        <input
          type="text"
          name="company"
          required
          className="rounded-2xl bg-[#101218] border border-white/10 px-4 py-3 text-text focus:border-brand focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm">
        <span className="text-muted">Hiring needs</span>
        <textarea
          name="message"
          required
          rows="4"
          className="rounded-2xl bg-[#101218] border border-white/10 px-4 py-3 text-text focus:border-brand focus:outline-none"
        />
      </label>
      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand text-bg font-semibold px-6 py-3 shadow-lg shadow-brand/40 hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        Submit
      </button>
      <p className="text-xs text-muted">
        By submitting this form you agree to be contacted about ITechWise services.
      </p>
    </form>
  );
};

export default ContactForm;
