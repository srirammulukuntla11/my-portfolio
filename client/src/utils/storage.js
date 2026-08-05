const STORAGE_KEY = "portfolio-content";

export const savePortfolio = (data) => {
  console.log("Saving...", data);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const loadPortfolio = (defaultData) => {
  const saved = localStorage.getItem(STORAGE_KEY);

  console.log("Loaded...", saved);

  if (!saved) return defaultData;

  return JSON.parse(saved);
};