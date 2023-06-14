import React from "react";
import { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [navToggle, setNavToggle] = useState(false);

  const handleToggle = () => {
    setNavToggle(!navToggle);
  };

  return (
    <AppContext.Provider
      value={{
        handleToggle,
        navToggle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
