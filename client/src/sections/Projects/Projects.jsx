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
     className="relative overflow-hidden py-32 px-6 lg:px-10 bg-[#08101f]"
    >
      {/* Background Glow */}

<div className="absolute inset-0 -z-10 overflow-hidden">

  <div className="absolute top-10 left-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />

  <div className="absolute bottom-10 right-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[150px]" />

</div>
      <div className="max-w-7xl mx-auto">

        <EditableText
          value={projects.title}
          onChange={(value) =>
            updateSection("projects", {
              ...projects,
              title: value,
            })
          }
          className="text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] text-white"
        />

       <div className="mt-6 mb-20 h-1.5 w-32 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_20px_rgba(34,211,238,0.45)]"></div>

        <div className="space-y-10">

          {projects.items.map((project, index) => (

            <div
  key={project.id}
  className="
rounded-[30px]
border
border-white/10
bg-gradient-to-br
from-slate-900/80
via-slate-900/70
to-slate-800/70
p-8
md:p-10
backdrop-blur-xl
transition-all
duration-500
hover:-translate-y-1
hover:border-cyan-400/30
hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
"
>

              <div className="flex justify-between">

                <div>

                  <EditableText
                    value={project.title}
                    onChange={(value) =>
                      updateProject(index, "title", value)
                    }
                   className="text-3xl md:text-4xl font-black tracking-tight text-white"
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
text-lg
leading-8
tracking-[0.01em]
text-slate-300
whitespace-pre-line
"
                />

              </div>

              <div className="flex flex-wrap gap-3 mt-8">

                {project.tech.map((tech, techIndex) => (

  <div
    key={tech.id}
   className="
flex
items-center
gap-2
rounded-full
border
border-cyan-400/20
bg-cyan-500/10
px-5
py-2.5
font-medium
text-cyan-300
backdrop-blur-md
transition-all
duration-300
hover:scale-105
hover:border-cyan-400/40
hover:bg-cyan-500/20
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
                      className="
inline-flex
items-center
gap-2
rounded-xl
border
border-white/10
bg-slate-800/80
px-6
py-3
font-semibold
text-white
transition-all
duration-300
hover:-translate-y-1
hover:border-cyan-400/30
hover:bg-slate-700
"
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
                      className="
inline-flex
items-center
gap-2
rounded-xl
bg-cyan-500
px-6
py-3
font-semibold
text-white
shadow-lg
shadow-cyan-500/20
transition-all
duration-300
hover:-translate-y-1
hover:bg-cyan-400
"
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
               className="
flex
items-center
gap-2
rounded-2xl
bg-cyan-500
px-7
py-4
font-semibold
text-white
shadow-lg
shadow-cyan-500/20
transition-all
duration-300
hover:-translate-y-1
hover:bg-cyan-400
"
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