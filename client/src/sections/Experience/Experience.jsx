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
      className="py-24 px-6 lg:px-10 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        <EditableText
          value={experience.title}
          onChange={(value) =>
            updateSection("experience", {
              ...experience,
              title: value,
            })
          }
          className="text-4xl md:text-5xl font-bold text-white"
        />

        <div className="w-24 h-1 bg-cyan-400 rounded-full mt-4 mb-16"></div>

        <div className="space-y-8">

          {experience.items.map((item, index) => (

            <div
              key={item.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
            >

              <div className="flex justify-between">

                <EditableText
                  value={item.role}
                  onChange={(value) =>
                    updateItem(index, "role", value)
                  }
                  className="text-2xl font-bold text-white"
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
                className="block mt-4 text-cyan-400"
              />

              <div className="inline-block mt-4 px-4 py-2 rounded-full bg-slate-800 border border-slate-700">

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
  className="block mt-6 text-gray-300 leading-8 whitespace-pre-line"
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
    className="inline-flex items-center gap-2 mt-8 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition"
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
            className="mt-10 flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold"
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