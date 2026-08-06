import { createContext, useContext, useEffect, useState } from "react";
import {
  getPortfolio,
  updatePortfolio,
} from "../api/portfolioApi";

const PortfolioContext = createContext();

export function PortfolioProvider({ children }) {
  const [portfolio, setPortfolio] = useState(null);
  const [draft, setDraft] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load portfolio from backend
  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      setLoading(true);

      const data = await getPortfolio();

      setPortfolio(data);
      setDraft(data);
    } catch (error) {
      console.error("Failed to load portfolio:", error);
    } finally {
      setLoading(false);
    }
  };

  // Update section locally
  const updateSection = (sectionName, data) => {
    setDraft((prev) => ({
      ...prev,
      [sectionName]: data,
    }));
  };

  // Save to MongoDB
  const saveChanges = async () => {
    try {
      const updated = await updatePortfolio(draft);

      setPortfolio(updated);
      setDraft(updated);

      alert("Portfolio Updated Successfully ✅");
    } catch (error) {
      console.error(error);
      alert("Failed to save changes ❌");
    }
  };

  // Cancel Changes
  const cancelChanges = () => {
    setDraft(portfolio);
  };

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Loading Portfolio...
      </div>
    );
  }

  return (
    <PortfolioContext.Provider
      value={{
        draft,
        updateSection,
        saveChanges,
        cancelChanges,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export const usePortfolio = () => useContext(PortfolioContext);