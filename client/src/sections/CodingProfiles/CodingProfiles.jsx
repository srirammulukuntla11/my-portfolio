import EditableText from "../../components/Editable/EditableText";
import { usePortfolio } from "../../context/PortfolioContext";
import { useAdmin } from "../../context/AdminContext";
import { Plus, Trash2, ExternalLink } from "lucide-react";

function CodingProfiles() {
  const { draft, updateSection } = usePortfolio();
  const { editMode } = useAdmin();

  const profiles = draft.codingProfiles;

  const saveProfiles = (items) => {
    updateSection("codingProfiles", {
      ...profiles,
      items,
    });
  };

  const updateProfile = (index, field, value) => {
    const updated = [...profiles.items];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    saveProfiles(updated);
  };

  const addProfile = () => {
    const updated = [...profiles.items];

    updated.push({
      id: Date.now(),
      platform: "New Platform",

      highlights: `Solved 250+ Problems

Top 15%

Strong in Java & DSA`,

      profile: "",
    });

    saveProfiles(updated);
  };

  const deleteProfile = (index) => {
    const updated = [...profiles.items];
    updated.splice(index, 1);
    saveProfiles(updated);
  };

  return (
  <section
    id="coding-profiles"
    className="py-24 px-6 lg:px-10 bg-slate-950"
  >
    <div className="max-w-7xl mx-auto">

      <EditableText
        value={profiles.title}
        onChange={(value) =>
          updateSection("codingProfiles", {
            ...profiles,
            title: value,
          })
        }
        className="text-4xl md:text-5xl font-bold text-white"
      />

      <div className="w-24 h-1 bg-cyan-400 rounded-full mt-4 mb-16"></div>

      <div className="grid md:grid-cols-2 gap-8">

        {profiles.items.map((item, index) => (

          <div
            key={item.id}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
          >

            <div className="flex justify-between items-start">

              <EditableText
                value={item.platform}
                onChange={(value) =>
                  updateProfile(index, "platform", value)
                }
                className="text-2xl font-bold text-white"
              />

              {editMode && (
                <button
                  onClick={() => deleteProfile(index)}
                  className="text-red-500 hover:text-red-400"
                >
                  <Trash2 size={20} />
                </button>
              )}

            </div>

            <div className="w-12 h-1 bg-cyan-400 rounded-full mt-4 mb-6"></div>

            <p className="text-sm text-gray-400 mb-2">
              Highlights & Stats
            </p>

            <EditableText
              multiline
              value={item.highlights}
              onChange={(value) =>
                updateProfile(index, "highlights", value)
              }
              className="text-slate-300 leading-8 whitespace-pre-line"
            />

            {editMode && (
              <>
                <p className="text-sm text-gray-400 mt-6 mb-2">
                  Profile Link
                </p>

                <EditableText
                  value={item.profile}
                  onChange={(value) =>
                    updateProfile(index, "profile", value)
                  }
                  className="text-cyan-300"
                />
              </>
            )}

            {!editMode && item.profile && (
              <div className="mt-8">

                <a
                  href={item.profile}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition"
                >
                  <ExternalLink size={18} />
                  Visit Profile
                </a>

              </div>
            )}

          </div>

        ))}

      </div>

      {editMode && (
        <button
          onClick={addProfile}
          className="mt-10 flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold"
        >
          <Plus size={18} />
          Add Profile
        </button>
      )}

    </div>
  </section>
);

}

export default CodingProfiles;