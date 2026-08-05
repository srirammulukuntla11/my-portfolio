import { useState } from "react";
import EditableText from "../../components/Editable/EditableText";
import { usePortfolio } from "../../context/PortfolioContext";
import { useAdmin } from "../../context/AdminContext";
import {
  Mail,
  Phone,
  MapPin,
  FileText,
  Copy,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const { draft, updateSection } = usePortfolio();
  const { editMode } = useAdmin();

  const contact = draft.contact;
  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
  navigator.clipboard.writeText(contact.email);

  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
};

  const update = (field, value) => {
    updateSection("contact", {
      ...contact,
      [field]: value,
    });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 lg:px-10 bg-[#0b1120]"
    >
      <div className="max-w-5xl mx-auto">

        

        <div className="space-y-8">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

  {/* LEFT SIDE */}

  <div>

   <EditableText
  value={contact.title}
  onChange={(value) => update("title", value)}
  className="text-3xl font-bold text-white"
/>

    <div className="mt-6">
  <EditableText
  multiline
  value={contact.subtitle}
  onChange={(value) => update("subtitle", value)}
  className="mt-8 text-lg text-gray-400 leading-8"
/>
</div>
    {editMode && (
  <div className="space-y-5 mt-8">

    <div>
      <p className="text-sm text-gray-400 mb-2">
        GitHub URL
      </p>

      <EditableText
        value={contact.github}
        onChange={(value) => update("github", value)}
        className="text-cyan-300"
      />
    </div>

    <div>
      <p className="text-sm text-gray-400 mb-2">
        LinkedIn URL
      </p>

      <EditableText
        value={contact.linkedin}
        onChange={(value) => update("linkedin", value)}
        className="text-cyan-300"
      />
    </div>

    <div>
      <p className="text-sm text-gray-400 mb-2">
        Resume URL
      </p>

      <EditableText
        value={contact.resume}
        onChange={(value) => update("resume", value)}
        className="text-cyan-300"
      />
    </div>

  </div>
)}

  </div>

  {/* RIGHT SIDE */}

  <div className="space-y-6">

    {/* Email */}

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-cyan-400 transition">

      <div className="flex justify-between items-center">

        <div className="flex items-center gap-3">

          <Mail className="text-cyan-400" />

          <div>

            <p className="text-sm text-gray-400">
              Email
            </p>

            <EditableText
              value={contact.email}
              onChange={(value) => update("email", value)}
              className="text-white"
            />

          </div>

        </div>

        <div className="flex items-center gap-2">

  {copied && (
    <span className="text-green-400 text-sm">
      Copied!
    </span>
  )}

  <button
    onClick={copyEmail}
    className="text-cyan-400 hover:text-cyan-300"
  >
    <Copy size={18} />
  </button>

</div>
          

      </div>

    </div>

    {/* Phone */}

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-cyan-400 transition">

      <div className="flex items-center gap-3">

        <Phone className="text-cyan-400" />

        <div>

          <p className="text-sm text-gray-400">
            Phone
          </p>

          <EditableText
            value={contact.phone}
            onChange={(value) => update("phone", value)}
            className="text-white"
          />

        </div>

      </div>

    </div>

    {/* Location */}

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-cyan-400 transition">

      <div className="flex items-center gap-3">

        <MapPin className="text-cyan-400" />

        <div>

          <p className="text-sm text-gray-400">
            Location
          </p>

          <EditableText
            value={contact.location}
            onChange={(value) => update("location", value)}
            className="text-white"
          />

        </div>

      </div>

    </div>

    {/* Buttons */}

    <div className="flex flex-wrap gap-4 mt-8">

  {contact.github.trim() !== "" && (
    <a
      href={contact.github}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
    >
      <FaGithub size={18} />
      GitHub
    </a>
  )}

  {contact.linkedin.trim() !== "" && (
  <a
    href={
      contact.linkedin.startsWith("http")
        ? contact.linkedin
        : `https://${contact.linkedin}`
    }
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl transition"
  >
    <FaLinkedin size={18} />
    LinkedIn
  </a>
)}

  {contact.resume.trim() !== "" && (
    <a
      href={contact.resume}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition"
    >
      <FileText size={18} />
      Download Resume
    </a>
  )}

</div>

  </div>

</div>
        </div>

      </div>
    </section>
  );
}

export default Contact;