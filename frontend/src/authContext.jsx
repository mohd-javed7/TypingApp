import { createContext, useState, useEffect, useContext } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("username");
    if (token && name) {
      setIsLoggedIn(true);
      setUsername(name);
    }
  }, []);

  const login = (token, name) => {
    localStorage.setItem("token", token);
    localStorage.setItem("username", name);
    setIsLoggedIn(true);
    setUsername(name);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, username, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
