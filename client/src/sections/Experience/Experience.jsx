import EditableText from "../../components/Editable/EditableText";
import { usePortfolio } from "../../context/PortfolioContext";
import { useAdmin } from "../../context/AdminContext";
import { Plus, Trash2 } from "lucide-react";

function Experience() {
  const { draft, updateSection } = usePortfolio();
  const { editMode } = useAdmin();

  const experience = draft.experience;

  const saveExperience = (items) => {
    updateSection("experience", {
      ...experience,
      items,
    });
  };

  const updateItem = (index, field, value) => {
    const updated = [...experience.items];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    saveExperience(updated);
  };

  const addExperience = () => {
    const updated = [...experience.items];

    updated.push({
  id: Date.now(),
  role: "Role",
  company: "Company Name",
  duration: "Jan 2026 • Remote",
  description: "Describe your work here...",
  certificate: "",
});

    saveExperience(updated);
  };

  const deleteExperience = (index) => {
    const updated = [...experience.items];
    updated.splice(index, 1);
    saveExperience(updated);
  };

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-32 px-6 lg:px-10 bg-[#08101f]"
    >
      {/* Background Glow */}

<div className="absolute inset-0 -z-10 overflow-hidden">

  <div className="absolute top-10 right-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />

  <div className="absolute bottom-10 left-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[140px]" />

</div>
      <div className="max-w-7xl mx-auto">

        <EditableText
          value={experience.title}
          onChange={(value) =>
            updateSection("experience", {
              ...experience,
              title: value,
            })
          }
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.04em] text-white"
        />

        <div className="mt-6 mb-20 h-1.5 w-32 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_20px_rgba(34,211,238,0.45)]"></div>

        <div className="space-y-8">

          {experience.items.map((item, index) => (

            <div
              key={item.id}
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

                <EditableText
                  value={item.role}
                  onChange={(value) =>
                    updateItem(index, "role", value)
                  }
                  className="text-2xl md:text-3xl font-bold text-white"
                />

                {editMode && (
                  <button
                    onClick={() => deleteExperience(index)}
                    className="text-red-500"
                  >
                    <Trash2 />
                  </button>
                )}

              </div>

              <EditableText
                value={item.company}
                onChange={(value) =>
                  updateItem(index, "company", value)
                }
                className="block mt-4 text-base md:text-lg font-semibold text-cyan-300"
              />

              <div className="inline-block mt-5 rounded-full border border-white/10 bg-slate-800/60 px-5 py-3 backdrop-blur-md">

  <EditableText
    value={item.duration}
    onChange={(value) =>
      updateItem(index, "duration", value)
    }
    className="text-gray-300"
  />

</div>

             <EditableText
  multiline
  value={item.description}
  onChange={(value) =>
    updateItem(index, "description", value)
  }
  className="block mt-6 text-lg leading-8 tracking-[0.01em] text-slate-300 whitespace-pre-line"
/>

{editMode && (
  <>
    <p className="text-sm text-gray-400 mt-6 mb-2">
      Certificate Link (Google Drive)
    </p>

    <EditableText
      value={item.certificate}
      onChange={(value) =>
        updateItem(index, "certificate", value)
      }
      className="block text-cyan-300"
    />
  </>
)}

{!editMode && item.certificate && (
  <a
    href={item.certificate}
    target="_blank"
    rel="noreferrer"
   className="
mt-8
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
    📜 View Certificate
  </a>
)}

            </div>

          ))}

        </div>

        {editMode && (
          <button
            onClick={addExperience}
            className="
mt-12
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
            Add Experience
          </button>
        )}

      </div>
    </section>
  );
}

export default Experience;