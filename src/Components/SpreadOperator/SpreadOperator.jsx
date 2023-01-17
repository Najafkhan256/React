import React, { useState } from "react";

const citrus = ["Lime", "Lemon", "Orange"];
const fruit = ["Apple", "Banana", "Coconut", ...citrus];

const fullName = {
  fName: "James",
  lName: "Bond",
};

const user = {
  ...fullName,
  id: 1,
  userName: "Jamesbond007",
};

console.log(user);

console.log(fruit);

const SpreadOperator = () => {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  //   function handleSubmit(e) {
  //     e.preventDefault();
  //   }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
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

export default SpreadOperator;
