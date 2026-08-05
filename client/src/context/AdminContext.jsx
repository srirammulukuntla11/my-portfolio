import { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const login = (password) => {
    if (password === "sriram123") {
      setIsAdmin(true);
      setEditMode(true);
      return true;
    }

    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    setEditMode(false);
  };

  return (
    <AdminContext.Provider
      value={{
        isAdmin,
        editMode,
        login,
        logout,
        setEditMode,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export const useAdmin = () => useContext(AdminContext);