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
    className="relative overflow-hidden py-32 px-6 lg:px-10 bg-[#08101f]"
  >
    {/* Background Glow */}

<div className="absolute inset-0 -z-10 overflow-hidden">

  <div className="absolute top-10 left-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />

  <div className="absolute bottom-10 right-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[150px]" />

</div>
    <div className="max-w-7xl mx-auto">

      <EditableText
        value={profiles.title}
        onChange={(value) =>
          updateSection("codingProfiles", {
            ...profiles,
            title: value,
          })
        }
       className="text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] text-white"
      />

      <div className="mt-6 mb-20 h-1.5 w-32 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_20px_rgba(34,211,238,0.45)]"></div>

      <div className="grid md:grid-cols-2 gap-8">

        {profiles.items.map((item, index) => (

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

            <div className="flex justify-between items-start">

              <EditableText
                value={item.platform}
                onChange={(value) =>
                  updateProfile(index, "platform", value)
                }
                className="text-3xl font-black tracking-tight text-white"
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

            <div className="mt-4 mb-8 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>

            <p className="text-sm text-gray-400 mb-2">
              Highlights & Stats
            </p>

            <EditableText
              multiline
              value={item.highlights}
              onChange={(value) =>
                updateProfile(index, "highlights", value)
              }
              className="text-lg leading-8 tracking-[0.01em] text-slate-300 whitespace-pre-line"
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
          Add Profile
        </button>
      )}

    </div>
  </section>
);

}

export default CodingProfiles;