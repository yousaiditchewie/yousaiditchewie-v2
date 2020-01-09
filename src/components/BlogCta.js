import React from 'react';
import Form from './Form';

const BlogCta = () => {
  return (
    <section className="BlogCta">
      <p className="BlogCta-callout">
        Find out more about my upcoming book,{' '}
        <em>
          The Working Musician's Playbook: The step-by-step guide to achieving a
          fulfilling career as a freelance&nbsp;musician.
        </em>
      </p>
      <Form />
    </section>
  );
};

export default BlogCta;
