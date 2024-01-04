import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storedClientData = localStorage.getItem('clientData');
  const storedToken = localStorage.getItem('token');
  const storedAgent = localStorage.getItem('agent');
  const storedListRecip = localStorage.getItem('listRecip');
  const storedInfoTransf = localStorage.getItem('infoTransf');

  const [clientData, setClientData] = useState(storedClientData || null);
  const [token, setToken] = useState(storedToken || null);
  const [agent, setAgent] = useState(storedAgent || null);
  const [listRecip, setListRecip] = useState(storedListRecip || null);
  const [infoTransf, setInfoTransf] = useState(storedInfoTransf || null);

  useEffect(() => {
    localStorage.setItem('clientData', clientData);
    localStorage.setItem('token', token);
    localStorage.setItem('agent', agent);
    localStorage.setItem('listRecip', listRecip);
    localStorage.setItem('infoTransf', infoTransf);
  }, [clientData, token, agent, listRecip, infoTransf]);

  return (
    <AuthContext.Provider value={{ clientData, setClientData, token, setToken, agent, setAgent, listRecip, setListRecip, infoTransf, setInfoTransf}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
