import EditableText from "../../components/Editable/EditableText";
import { usePortfolio } from "../../context/PortfolioContext";
import { useAdmin } from "../../context/AdminContext";
import { Plus, Trash2 } from "lucide-react";

function Education() {
  const { draft, updateSection } = usePortfolio();
  const { editMode } = useAdmin();

  const education = draft.education;

  const saveEducation = (items) => {
    updateSection("education", {
      ...education,
      items,
    });
  };

  const updateItem = (index, field, value) => {
    const updated = [...education.items];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    saveEducation(updated);
  };

  const addEducation = () => {
    const updated = [...education.items];

    updated.push({
      id: Date.now(),
      degree: "New Degree",
      college: "College Name",
      duration: "Year - Year",
      score: "CGPA",
    });

    saveEducation(updated);
  };

  const deleteEducation = (index) => {
    const updated = [...education.items];

    updated.splice(index, 1);

    saveEducation(updated);
  };

  return (
    <section
      id="education"
      className="py-24 px-6 lg:px-10 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        <EditableText
          value={education.title}
          onChange={(value) =>
            updateSection("education", {
              ...education,
              title: value,
            })
          }
          className="text-4xl md:text-5xl font-bold text-white"
        />

        <div className="w-24 h-1 bg-cyan-400 rounded-full mt-4 mb-16"></div>

        <div className="relative">

          {/* Timeline Line */}

          <div className="absolute left-5 top-0 bottom-0 w-1 bg-cyan-500/30 rounded-full"></div>

          <div className="space-y-12">

            {education.items.map((item, index) => (

              <div
                key={item.id}
                className="relative flex gap-8"
              >

                {/* Timeline Dot */}

                <div className="relative z-10 flex-shrink-0">

                  <div className="w-10 h-10 rounded-full bg-cyan-500 border-4 border-slate-950 shadow-lg shadow-cyan-500/40"></div>

                </div>

                {/* Card */}

                <div className="flex-1 bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">

                  <div className="flex justify-between items-start gap-5">

                    <div className="flex-1">

                      <EditableText
                        value={item.degree}
                        onChange={(value) =>
                          updateItem(index, "degree", value)
                        }
                        className="text-3xl md:text-4xl font-bold text-white"
                      />

                      <EditableText
                        value={item.college}
                        onChange={(value) =>
                          updateItem(index, "college", value)
                        }
                        className="block mt-4 text-xl font-medium text-cyan-400"
                      />

                    </div>

                    {editMode && (
                      <button
                        onClick={() => deleteEducation(index)}
                        className="text-red-500 hover:text-red-400"
                      >
                        <Trash2 size={20} />
                      </button>
                    )}

                  </div>

                  <div className="flex flex-wrap gap-5 mt-8">

                    <div className="flex items-center gap-3 bg-slate-800 border border-slate-700 rounded-full px-5 py-3">

                      <span className="text-xl">📅</span>

                      <EditableText
                        value={item.duration}
                        onChange={(value) =>
                          updateItem(index, "duration", value)
                        }
                        className="text-white font-medium"
                      />

                    </div>

                    <div className="flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-5 py-3">

                      <span className="text-xl">⭐</span>

                      <EditableText
                        value={item.score}
                        onChange={(value) =>
                          updateItem(index, "score", value)
                        }
                        className="text-cyan-300 font-semibold"
                      />

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

        {editMode && (
          <button
            onClick={addEducation}
            className="
mt-14
flex
items-center
gap-2
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
            <Plus size={18} />
            Add Education
          </button>
        )}

      </div>
    </section>
  );
}

export default Education;