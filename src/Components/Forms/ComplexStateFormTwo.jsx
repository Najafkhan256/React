import React, { useState } from "react";

const ComplexStateFormTwo = () => {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    /* Destructuring the event.target object. */
    const { value, name } = event.target;

    /* A callback function that is called when the state is updated. */
    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email,
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value,
        };
      }
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={handleSubmit}>
        <input
          name="fName"
          type="text"
          placeholder="What's Your First Name"
          onChange={handleChange}
          value={contact.fName}
        />
        <input
          name="lName"
          type="text"
          placeholder="What's Your Last Name"
          onChange={handleChange}
          value={contact.lName}
        />
        <input
          name="email"
          type="text"
          placeholder="Your Email address"
          onChange={handleChange}
          value={contact.email}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ComplexStateFormTwo;
