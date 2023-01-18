import React from "react";
import CompA from "./CompA";
import { UserProvider } from "./userContext";

// Create context value
// Provide context value
// Consume the context value
/* const UserContext = React.createContext();

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer; */

const FinalCom = () => {
  return (
    <UserProvider value="Najaf Khan">
      <CompA />
    </UserProvider>
  );
};

export default FinalCom;
