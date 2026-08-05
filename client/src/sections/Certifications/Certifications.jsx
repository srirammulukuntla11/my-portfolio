import EditableText from "../../components/Editable/EditableText";
import { usePortfolio } from "../../context/PortfolioContext";
import { useAdmin } from "../../context/AdminContext";
import { Plus, Trash2, ExternalLink } from "lucide-react";



function Certifications() {
  const { draft, updateSection } = usePortfolio();
  const { editMode } = useAdmin();



  const certifications = draft.certifications;

  const saveCertifications = (items) => {
    updateSection("certifications", {
      ...certifications,
      items,
    });
  };

  const updateCertificate = (index, field, value) => {
    const updated = [...certifications.items];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };



    saveCertifications(updated);
  };

  const addCertificate = () => {
    const updated = [...certifications.items];

    updated.push({
      id: Date.now(),
      title: "New Certificate",
      organization: "Organization",
      year: "2026",
      description: "Short description...",
      certificate: "",
      credential: "",
      project: "",
    });

    saveCertifications(updated);
  };

  const deleteCertificate = (index) => {
    const updated = [...certifications.items];
    updated.splice(index, 1);
    saveCertifications(updated);
  };

  return (
    <section id="certifications" className="relative overflow-hidden py-32 px-6 lg:px-10 bg-[#08101f]">
      {/* Background Glow */}

<div className="absolute inset-0 -z-10 overflow-hidden">

  <div className="absolute top-10 right-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />

  <div className="absolute bottom-10 left-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[140px]" />

</div>
      <div className="max-w-7xl mx-auto">

        <EditableText
          value={certifications.title}
          onChange={(value) =>
            updateSection("certifications", {
              ...certifications,
              title: value,
            })
          }
         className="text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] text-white"
        />

        <div className="mt-6 mb-20 h-1.5 w-32 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_20px_rgba(34,211,238,0.45)]"></div>

        <div className="grid md:grid-cols-2 gap-8">

          {certifications.items.map((item, index) => (

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
                  value={item.title}
                  onChange={(value) =>
                    updateCertificate(index, "title", value)
                  }
                 className="text-3xl font-black tracking-tight text-white"
                />

                {editMode && (
                  <button
                    onClick={() => deleteCertificate(index)}
                    className="text-red-500"
                  >
                    <Trash2 />
                  </button>
                )}

              </div>

              <EditableText
                value={item.organization}
                onChange={(value) =>
                  updateCertificate(index, "organization", value)
                }
                className="block mt-4 text-lg font-semibold text-cyan-300"
              />

                <EditableText
                  value={item.year}
                  onChange={(value) =>
                    updateCertificate(index, "year", value)
                  }
                  className="block mt-2 text-slate-400 font-medium"
                />
                {/* Description */}
                <EditableText
                  multiline
                  value={item.description}
                  onChange={(value) =>
                    updateCertificate(index, "description", value)
                  }
                 className="block mt-6 text-lg leading-8 tracking-[0.01em] text-slate-300"
                />



                <div className="mt-8">

                  {editMode ? (
                    <div className="space-y-4">

                      <div>
                        <p className="text-sm text-gray-400 mb-1">
                          Certificate URL
                        </p>

                        <EditableText
                          value={item.certificate}
                          onChange={(value) =>
                            updateCertificate(index, "certificate", value)
                          }
                          className="block w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-cyan-300"
                        />
                      </div>

                      <div>
                        <p className="text-sm text-gray-400 mb-1">
                          Credential URL
                        </p>

                        <EditableText
                          value={item.credential}
                          onChange={(value) =>
                            updateCertificate(index, "credential", value)
                          }
                          className="block w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-cyan-300"
                        />
                      </div>

                      <div>
                        <p className="text-sm text-gray-400 mb-1">
                          Project URL
                        </p>

                        <EditableText
                          value={item.project}
                          onChange={(value) =>
                            updateCertificate(index, "project", value)
                          }
                          className="block w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-cyan-300"
                        />
                      </div>

                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-4">

                      {item.certificate && (
                        <a
                          href={item.certificate}
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
px-5
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
                          📜 View Certificate
                        </a>
                      )}

                      {item.credential && (
                        <a
                          href={item.credential}
                          target="_blank"
                          rel="noreferrer"
                          className="
inline-flex
items-center
gap-2
rounded-xl
bg-cyan-500
px-5
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
                          🔗 View Credential
                        </a>
                      )}

                      {item.project && (
                        <a
                          href={item.project}
                          target="_blank"
                          rel="noreferrer"
                          className="
inline-flex
items-center
gap-2
rounded-xl
bg-emerald-600
px-5
py-3
font-semibold
text-white
shadow-lg
shadow-emerald-500/20
transition-all
duration-300
hover:-translate-y-1
hover:bg-emerald-500
"
                        >
                          💻 View Project
                        </a>
                      )}

                    </div>
                  )}

                </div>

            </div>

          ))}

        </div>

        {editMode && (
          <button
            onClick={addCertificate}
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
            Add Certificate
          </button>
        )}

      </div>

</section>
  );
}

export default Certifications;