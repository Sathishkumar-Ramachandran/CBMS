// AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [company, setCompany] = useState(null);
  const [userData, setUserData] = useState(null);

  const login = (companyData, userData) => {
    setIsAuthenticated(true);
    setCompany(companyData);
    setUserData(userData);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCompany(null);
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, company, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
