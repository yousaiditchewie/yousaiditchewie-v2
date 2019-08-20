import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const SubscribeForm = () => {
  // Since `addToMailchimp` returns a promise, you
  // can handle the response in two different ways:

  // Note that you need to send an email & optionally, listFields
  // these values can be pulled from React state, form fields,
  // or wherever.  (Personally, I recommend storing in state).

  const [email, setEmail] = useState('');

  function handleChange(e) {
    console.log({
      [`${e.target.name}`]: e.target.value
    });
    // setEmail(e.target.value);
  }

  // 1. via `.then`
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    // addToMailchimp(email, listFields) // listFields are optional if you are only capturing the email address.
    //   .then(data => {
    //     // I recommend setting data to React state
    //     // but you can do whatever you want (including ignoring this `then()` altogether)
    //     console.log(data);
    //   })
    //   .catch(() => {
    //     // unnecessary because Mailchimp only ever
    //     // returns a 200 status code
    //     // see below for how to handle errors
    //   });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="email"
        name="email"
      />
      <input type="submit" />
    </form>
  );
};

export default SubscribeForm;
