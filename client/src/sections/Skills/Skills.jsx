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
      className="py-24 px-6 lg:px-10 bg-[#0b1120]"
    >
      <div className="max-w-7xl mx-auto">

        <EditableText
          value={skills.title}
          onChange={(value) =>
            updateSection("skills", {
              ...skills,
              title: value,
            })
          }
          className="text-4xl md:text-5xl font-bold text-white"
        />

        <div className="w-24 h-1 bg-cyan-400 rounded-full mt-4 mb-16"></div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {skills.categories.map((category, catIndex) => (

            <div
              key={category.id}
              className="
group
bg-slate-900
border
border-slate-800
rounded-3xl
p-8
transition-all
duration-300
hover:border-cyan-400
hover:-translate-y-2
hover:shadow-2xl
hover:shadow-cyan-500/10
"
            >

              <div className="flex justify-between items-center">

                <EditableText
                  value={category.title}
                  onChange={(value) =>
                    updateCategoryTitle(catIndex, value)
                  }
                  className="text-2xl font-bold text-white"
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

              <div className="w-14 h-1 bg-cyan-400 rounded-full mt-4 mb-6"></div>

              <div className="flex flex-wrap gap-4 mt-8">

                {category.skills.map((skill, skillIndex) => (

                  <div
                    key={skill.id}
                    className="
flex
items-center
gap-2
px-5
py-3
rounded-full
bg-cyan-500/10
border
border-cyan-500/20
transition-all
duration-300
hover:bg-cyan-500/20
hover:border-cyan-400
"
                  >

                    <EditableText
                      value={skill.name}
                      onChange={(value) =>
                        updateSkill(catIndex, skillIndex, value)
                      }
                      className="font-medium text-slate-200"
                    />

                    {editMode && (
                      <button
                        onClick={() =>
                          deleteSkill(catIndex, skillIndex)
                        }
                        className="
p-1
rounded-md
hover:bg-red-500/10
transition-all
duration-300
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
mt-8
inline-flex
items-center
gap-2
px-4
py-2
rounded-xl
bg-cyan-500/10
border
border-cyan-500/20
text-cyan-300
hover:bg-cyan-500
hover:text-white
transition-all
duration-300
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