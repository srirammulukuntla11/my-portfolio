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
    <section id="certifications" className="py-24 px-6 lg:px-10 bg-[#0b1120]">
      <div className="max-w-7xl mx-auto">

        <EditableText
          value={certifications.title}
          onChange={(value) =>
            updateSection("certifications", {
              ...certifications,
              title: value,
            })
          }
          className="text-4xl md:text-5xl font-bold text-white"
        />

        <div className="w-24 h-1 bg-cyan-400 rounded-full mt-4 mb-16"></div>

        <div className="grid md:grid-cols-2 gap-8">

          {certifications.items.map((item, index) => (

            <div
              key={item.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition"
            >

              <div className="flex justify-between">

                <EditableText
                  value={item.title}
                  onChange={(value) =>
                    updateCertificate(index, "title", value)
                  }
                  className="text-2xl font-bold text-white"
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
                className="block mt-4 text-cyan-400"
              />

                <EditableText
                  value={item.year}
                  onChange={(value) =>
                    updateCertificate(index, "year", value)
                  }
                  className="block mt-2 text-gray-400"
                />
                {/* Description */}
                <EditableText
                  multiline
                  value={item.description}
                  onChange={(value) =>
                    updateCertificate(index, "description", value)
                  }
                  className="block mt-5 text-slate-300 leading-7"
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
                          className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700"
                        >
                          📜 View Certificate
                        </a>
                      )}

                      {item.credential && (
                        <a
                          href={item.credential}
                          target="_blank"
                          rel="noreferrer"
                          className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600"
                        >
                          🔗 View Credential
                        </a>
                      )}

                      {item.project && (
                        <a
                          href={item.project}
                          target="_blank"
                          rel="noreferrer"
                          className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700"
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
            className="mt-10 flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold"
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