import { createContext, useContext, useEffect, useState } from "react";

import homeData from "../content/home";
import aboutData from "../content/about";
import educationData from "../content/education";
import skillsData from "../content/skills";
import projectsData from "../content/projects";
import certificationsData from "../content/certifications";
import codingProfilesData from "../content/codingProfiles";
import experienceData from "../content/experience";
import contactData from "../content/contact";


const PortfolioContext = createContext();

const STORAGE_KEY = "portfolio-data";

const defaultPortfolio = {
  home: homeData,
  about: aboutData,
  education: educationData,
  skills: skillsData,
  projects: projectsData,
  certifications: certificationsData,
  codingProfiles: codingProfilesData,
  experience: experienceData,
  contact: contactData,
};
export function PortfolioProvider({ children }) {
  const [portfolio, setPortfolio] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return defaultPortfolio;

    const parsed = JSON.parse(saved);

   return {
  home: parsed.home || homeData,
  about: parsed.about || aboutData,
  education: parsed.education || educationData,
  skills: parsed.skills || skillsData,
  projects: parsed.projects || projectsData,
  certifications: parsed.certifications || certificationsData,
  codingProfiles: parsed.codingProfiles || codingProfilesData,
  experience: parsed.experience || experienceData,
  contact: parsed.contact || contactData,
};
  });

  const [draft, setDraft] = useState(portfolio);

  useEffect(() => {
    setDraft(portfolio);
  }, [portfolio]);

  const updateSection = (sectionName, data) => {
    setDraft((prev) => ({
      ...prev,
      [sectionName]: data,
    }));
  };

  const saveChanges = () => {
    setPortfolio(draft);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
  };

  const cancelChanges = () => {
    setDraft(portfolio);
  };

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