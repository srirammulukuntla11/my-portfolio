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
      className="relative overflow-hidden py-32 px-6 lg:px-10 bg-[#08101f]"
    >
      {/* Background Glow */}

<div className="absolute inset-0 -z-10 overflow-hidden">

  <div className="absolute top-10 left-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />

  <div className="absolute bottom-0 right-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[150px]" />

</div>
      <div className="max-w-6xl mx-auto">

        <EditableText
          value={education.title}
          onChange={(value) =>
            updateSection("education", {
              ...education,
              title: value,
            })
          }
          className="text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] text-white"
        />

        <div className="mt-6 mb-20 h-1.5 w-32 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_20px_rgba(34,211,238,0.45)]"></div>
        <div className="relative">

          {/* Timeline Line */}

          <div className="absolute left-5 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-cyan-400 via-cyan-500/40 to-transparent"></div>

          <div className="space-y-12">

            {education.items.map((item, index) => (

              <div
                key={item.id}
                className="relative flex gap-8"
              >

                {/* Timeline Dot */}

                <div className="relative z-10 flex-shrink-0">

                  <div className="w-10 h-10 rounded-full border-4 border-[#08101f] bg-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.45)]"></div>

                </div>

                {/* Card */}

                <div className="flex-1 rounded-[30px] border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-slate-800/70 p-8 md:p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">

                  <div className="flex justify-between items-start gap-5">

                    <div className="flex-1">

                      <EditableText
                        value={item.degree}
                        onChange={(value) =>
                          updateItem(index, "degree", value)
                        }
                        className="text-3xl md:text-[38px] font-black tracking-tight text-white"
                      />

                      <EditableText
                        value={item.college}
                        onChange={(value) =>
                          updateItem(index, "college", value)
                        }
                        className="block mt-4 text-xl font-semibold text-cyan-300"
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

                    <div className="flex items-center gap-3 rounded-full border border-white/10 bg-slate-800/60 px-5 py-3 backdrop-blur-md">

                      <span className="text-xl">📅</span>

                      <EditableText
                        value={item.duration}
                        onChange={(value) =>
                          updateItem(index, "duration", value)
                        }
                        className="text-white font-medium"
                      />

                    </div>

                    <div className="flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-3 backdrop-blur-md">

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