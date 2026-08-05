import EditableText from "../../components/Editable/EditableText";
import { usePortfolio } from "../../context/PortfolioContext";
import { useAdmin } from "../../context/AdminContext";
import { Plus, Trash2, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const { draft, updateSection } = usePortfolio();
  const { editMode } = useAdmin();

  const projects = draft.projects;

  const saveProjects = (items) => {
    updateSection("projects", {
      ...projects,
      items,
    });
  };

  const updateProject = (index, field, value) => {
    const updated = [...projects.items];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    saveProjects(updated);
  };
  const addProject = () => {
  const updated = [...projects.items];

  updated.push({
    id: Date.now(),
    featured: false,
    title: "New Project",
    description: "Project Description",
    github: "",
    demo: "",
    tech: [],
  });

  saveProjects(updated);
};

const deleteProject = (index) => {
  const updated = [...projects.items];

  updated.splice(index, 1);

  saveProjects(updated);
};

const toggleFeatured = (index) => {
  const updated = [...projects.items];

  updated[index].featured = !updated[index].featured;

  saveProjects(updated);
};

const addTech = (projectIndex) => {
  const updated = [...projects.items];

  updated[projectIndex].tech.push({
    id: Date.now(),
    name: "New Tech",
  });

  saveProjects(updated);
};

const updateTech = (projectIndex, techIndex, value) => {
  const updated = [...projects.items];

  updated[projectIndex].tech[techIndex].name = value;

  saveProjects(updated);
};

const deleteTech = (projectIndex, techIndex) => {
  const updated = [...projects.items];

  updated[projectIndex].tech.splice(techIndex, 1);

  saveProjects(updated);
};

  return (
    <section
      id="projects"
      className="py-24 px-6 lg:px-10 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        <EditableText
          value={projects.title}
          onChange={(value) =>
            updateSection("projects", {
              ...projects,
              title: value,
            })
          }
          className="text-4xl md:text-5xl font-bold text-white"
        />

        <div className="w-24 h-1 bg-cyan-400 rounded-full mt-4 mb-16"></div>

        <div className="space-y-10">

          {projects.items.map((project, index) => (

            <div
              key={project.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition"
            >

              <div className="flex justify-between">

                <div>

                  <EditableText
                    value={project.title}
                    onChange={(value) =>
                      updateProject(index, "title", value)
                    }
                    className="text-3xl font-bold text-white"
                  />

                </div>

                {editMode && (

                  <button
                    onClick={() => deleteProject(index)}
                    className="text-red-500"
                  >
                    <Trash2 />
                  </button>

                )}

              </div>

              <div className="mt-6">

                <EditableText
                  multiline
                  value={project.description}
                  onChange={(value) =>
                    updateProject(index, "description", value)
                  }
                  className="
                    text-slate-300
                    leading-9
                    whitespace-pre-line
                  "
                />

              </div>

              <div className="flex flex-wrap gap-3 mt-8">

                {project.tech.map((tech, techIndex) => (

  <div
    key={tech.id}
    className="
px-5
py-2.5
rounded-full
bg-slate-800
border
border-slate-700
text-cyan-300
font-medium
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500/10
flex items-center gap-2
"
  >
    <EditableText
      value={tech.name}
      onChange={(value) =>
        updateTech(index, techIndex, value)
      }
      className="text-cyan-300"
    />

    {editMode && (
      <button
        onClick={() =>
          deleteTech(index, techIndex)
        }
        className="text-red-500"
      >
        <Trash2 size={15} />
      </button>
    )}
  </div>

))}
{editMode && (
  <button
    onClick={() => addTech(index)}
    className="mt-5 flex items-center gap-2 text-cyan-400"
  >
    <Plus size={16} />
    Add Technology
  </button>
)}

              </div>

              {!editMode ? (
                <div className="flex flex-wrap gap-4 mt-8">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition flex items-center gap-2 text-white"
                    >
                      <FaGithub size={18} />
                      View GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition flex items-center gap-2 text-white"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}

                </div>
              ) : (
                <div className="flex items-center flex-wrap gap-5 mt-8 w-full">

                  <div className="flex items-center gap-2 bg-slate-800 px-5 py-3 rounded-xl text-white w-full sm:w-auto min-w-[200px]">
                    <FaGithub size={18} className="flex-shrink-0" />
                    <EditableText
                      value={project.github}
                      onChange={(value) =>
                        updateProject(index, "github", value)
                      }
                      className="text-white text-sm"
                    />
                  </div>

                  <div className="flex items-center gap-2 bg-cyan-500 px-5 py-3 rounded-xl text-white w-full sm:w-auto min-w-[200px]">
                    <ExternalLink size={18} className="flex-shrink-0" />
                    <EditableText
                      value={project.demo}
                      onChange={(value) =>
                        updateProject(index, "demo", value)
                      }
                      className="text-white text-sm"
                    />
                  </div>

                  <button
                    onClick={() => toggleFeatured(index)}
                    className="ml-auto px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold flex items-center gap-2"
                  >
                    {project.featured ? "★ Featured" : "☆ Make Featured"}
                  </button>

                </div>
              )}

            </div>

          ))}

          {editMode && (
            <div className="mt-12">
              <button
                onClick={addProject}
                className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold text-white"
              >
                <Plus size={18} />
                Add Project
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default Projects;