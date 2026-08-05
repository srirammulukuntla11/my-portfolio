const projectsData = {
  title: "Projects",

items: [
  {
    id: 1,
    featured: true,

    title: "Forecast Pro",

    description:
      "Machine Learning Forecasting System\n\n• Developed a machine learning forecasting system to analyze historical datasets and predict future trends.\n• Implemented data preprocessing, feature engineering, and model training using Python ML libraries.\n• Built visualization outputs to interpret predictive analytics and support decision making.",

    github: "",
    demo: "",

    tech: [
      { id: 1, name: "Python" },
      { id: 2, name: "Scikit-learn" },
      { id: 3, name: "Pandas" },
      { id: 4, name: "NumPy" },
      { id: 5, name: "Matplotlib" }
    ]
  },

  {
    id: 2,
    featured: true,

    title: "Instance Segmentation using Mask R-CNN",

    description:
      "• Implemented pixel-level object detection and instance segmentation using Mask R-CNN with OpenCV's DNN module.\n• Utilized a COCO-pretrained model to detect multiple objects simultaneously in images.\n• Optimized preprocessing and inference pipeline for accurate mask overlay visualization.",

    github: "",
    demo: "",

    tech: [
      { id: 1, name: "Python" },
      { id: 2, name: "Mask R-CNN" },
      { id: 3, name: "OpenCV" },
      { id: 4, name: "Deep Learning" }
    ]
  },

  {
    id: 3,
    featured: true,

    title: "TriageFLOW",

    description:
      "Smart Emergency Triage System\n\n• Developed a web-based hospital coordination platform for dynamic patient prioritization.\n• Implemented rule-based severity scoring to classify emergency cases efficiently.\n• Designed dashboard interfaces to support faster decision making in emergency response scenarios.",

    github: "",
    demo: "",

    tech: [
      { id: 1, name: "React" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Express.js" },
      { id: 4, name: "MongoDB" }
    ]
  }
]
};

export default projectsData;