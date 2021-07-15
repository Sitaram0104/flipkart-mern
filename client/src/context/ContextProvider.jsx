import { createContext, useState } from "react";

export const LoginContext = createContext(null);

function ContextProvider({ children }) {
  const [userAccount, setUserAccount] = useState("Ajay");
  return (
    <LoginContext.Provider value={{ userAccount, setUserAccount }}>
      {children}
    </LoginContext.Provider>
  );
}

export default ContextProvider;
