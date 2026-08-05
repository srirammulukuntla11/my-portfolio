import EditableText from "../../components/Editable/EditableText";
import { usePortfolio } from "../../context/PortfolioContext";
import { useAdmin } from "../../context/AdminContext";
import { Plus, Trash2 } from "lucide-react";

function Skills() {
  const { draft, updateSection } = usePortfolio();
  const { editMode } = useAdmin();

  const skills = draft.skills;

  const saveSkills = (categories) => {
    updateSection("skills", {
      ...skills,
      categories,
    });
  };

  const updateCategoryTitle = (catIndex, value) => {
    const updated = [...skills.categories];

    updated[catIndex].title = value;

    saveSkills(updated);
  };

  const updateSkill = (catIndex, skillIndex, value) => {
    const updated = [...skills.categories];

    updated[catIndex].skills[skillIndex].name = value;

    saveSkills(updated);
  };

  const addCategory = () => {
    const updated = [...skills.categories];

    updated.push({
      id: Date.now(),
      title: "New Category",
      skills: [],
    });

    saveSkills(updated);
  };

  const deleteCategory = (catIndex) => {
    const updated = [...skills.categories];

    updated.splice(catIndex, 1);

    saveSkills(updated);
  };

  const addSkill = (catIndex) => {
    const updated = [...skills.categories];

    updated[catIndex].skills.push({
      id: Date.now(),
      name: "New Skill",
    });

    saveSkills(updated);
  };

  const deleteSkill = (catIndex, skillIndex) => {
    const updated = [...skills.categories];

    updated[catIndex].skills.splice(skillIndex, 1);

    saveSkills(updated);
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-32 px-6 lg:px-10 bg-[#08101f]"
    >
      {/* Background Glow */}

<div className="absolute inset-0 -z-10 overflow-hidden">

  <div className="absolute top-10 right-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />

  <div className="absolute bottom-10 left-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[140px]" />

</div>
      <div className="max-w-7xl mx-auto">

        <EditableText
          value={skills.title}
          onChange={(value) =>
            updateSection("skills", {
              ...skills,
              title: value,
            })
          }
          className="text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] text-white"
        />

       <div className="mt-6 mb-20 h-1.5 w-32 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_20px_rgba(34,211,238,0.45)]"></div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {skills.categories.map((category, catIndex) => (

            <div
              key={category.id}
 className="
group
rounded-[30px]
border
border-white/10
bg-gradient-to-br
from-slate-900/80
via-slate-900/70
to-slate-800/70
p-8
backdrop-blur-xl
transition-all
duration-500
hover:-translate-y-1
hover:border-cyan-400/30
hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
"
            >

              <div className="flex justify-between items-center">

                <EditableText
                  value={category.title}
                  onChange={(value) =>
                    updateCategoryTitle(catIndex, value)
                  }
                  className="text-3xl font-black tracking-tight text-white"
                />

                {editMode && (
                  <button
                    onClick={() => deleteCategory(catIndex)}
                    className="
p-2
rounded-lg
hover:bg-red-500/10
transition-all
duration-300
"
                  >
                    <Trash2 size={18} className="text-red-500 hover:text-red-400" />
                  </button>
                )}

              </div>

             <div className="mt-4 mb-8 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>

              <div className="flex flex-wrap gap-4 mt-8">

                {category.skills.map((skill, skillIndex) => (

                  <div
                    key={skill.id}
                   className="
flex
items-center
gap-2
rounded-full
border
border-cyan-400/20
bg-cyan-500/10
px-5
py-3
backdrop-blur-md
transition-all
duration-300
hover:scale-105
hover:border-cyan-400/40
hover:bg-cyan-500/20
"
                  >

                    <EditableText
                      value={skill.name}
                      onChange={(value) =>
                        updateSkill(catIndex, skillIndex, value)
                      }
                      className="font-semibold tracking-wide text-slate-200"
                    />

                    {editMode && (
                      <button
                        onClick={() =>
                          deleteSkill(catIndex, skillIndex)
                        }
                       className="
mt-8
inline-flex
items-center
gap-2
rounded-xl
border
border-cyan-400/20
bg-cyan-500/10
px-5
py-3
font-semibold
text-cyan-300
transition-all
duration-300
hover:border-cyan-400
hover:bg-cyan-500
hover:text-white
"
                      >
                        <Trash2 size={15} className="text-red-500 hover:text-red-400" />
                      </button>
                    )}

                  </div>

                ))}

              </div>

              {editMode && (
                <button
                  onClick={() => addSkill(catIndex)}
                  className="
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
                  <span>Add Skill</span>
                </button>
              )}

            </div>

          ))}

        </div>

        {editMode && (
          <div className="mt-10">

            <button
              onClick={addCategory}
              className="
bg-cyan-500
hover:bg-cyan-600
px-7
py-4
rounded-2xl
font-semibold
transition-all
duration-300
hover:scale-105
shadow-lg
shadow-cyan-500/20
"
            >
              <div className="flex items-center gap-2">
                <Plus size={18} />
                <span>Add Category</span>
              </div>
            </button>

          </div>
        )}

      </div>
    </section>
  );
}

export default Skills;