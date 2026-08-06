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
import api from "../api/portfolioApi";


const PortfolioContext = createContext();



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
  const [portfolio, setPortfolio] = useState(defaultPortfolio);

  const [draft, setDraft] = useState(portfolio);

  useEffect(() => {
    setDraft(portfolio);
  }, [portfolio]);
  useEffect(() => {
  const fetchPortfolio = async () => {
    try {
     let { data } = await api.get("/portfolio");

const isEmpty =
  !data.home ||
  Object.keys(data.home).length === 0;

if (isEmpty) {
  await api.put("/portfolio", defaultPortfolio);

  const response = await api.get("/portfolio");

  data = response.data;
}

      if (data) {
        const loadedPortfolio = {
          home: data.home || homeData,
          about: data.about || aboutData,
          education: data.education || educationData,
          skills: data.skills || skillsData,
          projects: data.projects || projectsData,
          certifications: data.certifications || certificationsData,
          codingProfiles: data.codingProfiles || codingProfilesData,
          experience: data.experience || experienceData,
          contact: data.contact || contactData,
        };

        setPortfolio(loadedPortfolio);
      }
    } catch (error) {
      console.error("Failed to fetch portfolio", error);
    }
  };

  fetchPortfolio();
}, []);

  const updateSection = (sectionName, data) => {
    setDraft((prev) => ({
      ...prev,
      [sectionName]: data,
    }));
  };

  const saveChanges = async () => {
  try {
    await api.put("/portfolio", draft);

    setPortfolio(draft);

    alert("✅ Portfolio updated successfully!");
  } catch (error) {
    console.error(error);

    alert("❌ Failed to save portfolio.");
  }
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