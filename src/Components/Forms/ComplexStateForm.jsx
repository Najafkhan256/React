import React, { useState } from "react";

const ComplexStateForm = () => {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    // const newValue = event.target.value;
    // const inputName = event.target.name;

    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
    // console.log(newValue);
    // console.log(inputName);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          name="fName"
          type="text"
          placeholder="What's Your First Name"
          onChange={handleChange}
          value={fullName.fName}
        />
        <input
          name="lName"
          type="text"
          placeholder="What's Your Last Name"
          onChange={handleChange}
          value={fullName.lName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ComplexStateForm;
