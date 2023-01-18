import React from "react";

const User = ({ parentAlert }) => {
  const userName = "Najaf Khan";
  const showUser = () => parentAlert(userName);

  return (
    <div>
      <p>User Name: </p>
      <button onClick={showUser}> Click me </button>
    </div>
  );
};

export default User;
