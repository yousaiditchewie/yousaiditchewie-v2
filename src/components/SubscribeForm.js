import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const SubscribeForm = () => {
  // Since `addToMailchimp` returns a promise, you
  // can handle the response in two different ways:

  // Note that you need to send an email & optionally, listFields
  // these values can be pulled from React state, form fields,
  // or wherever.  (Personally, I recommend storing in state).

  const [email, setEmail] = useState('');
  const [strangerDanger, setStrangerDanger] = useState(false);
  const [mailchimpResponse, setMailchimpResponse] = useState({});

  function handleChange(e) {
    if (e.target.name === 'birthday') {
      setStrangerDanger(true);
      return;
    }
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (strangerDanger) return;

    addToMailchimp(email)
      .then(responseData => {
        /*
         * responseData will take this shape:
         * {
         *  result: String, "success" or "error"
         *  msg: String
         * }
         */
        setMailchimpResponse(responseData);
      })
      .catch(responseError => {
        setMailchimpResponse(responseError);
      });
  }

  return (
    <section id="sign-up" className="SubscribeForm">
      <div className="SubscribeForm-container container">
        <h3 className="SubscribeForm-copy">
          Sign up to get my weekly newsletter and latest articles.
        </h3>
        <form onSubmit={handleSubmit}>
          <input
            className="SubscribeForm-email"
            type="text"
            onChange={handleChange}
            placeholder="email"
            name="email"
          />
          <input
            className="birthday"
            type="text"
            onChange={handleChange}
            name="birthday"
          />
          <input
            className="SubscribeForm-submit"
            type="submit"
            value="Subscribe"
          />
        </form>
        {mailchimpResponse.result === 'success' ? (
          <p
            className="SubscribeForm-success"
            dangerouslySetInnerHTML={{ __html: mailchimpResponse.msg }}
          />
        ) : (
          ''
        )}
        {mailchimpResponse.result === 'error' ? (
          <p
            className="SubscribeForm-error"
            dangerouslySetInnerHTML={{ __html: mailchimpResponse.msg }}
          />
        ) : (
          ''
        )}
      </div>
    </section>
  );
};

export default SubscribeForm;
