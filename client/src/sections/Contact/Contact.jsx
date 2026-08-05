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
      className="relative overflow-hidden py-32 px-6 lg:px-10 bg-[#08101f]"
    >
      {/* Background Glow */}

<div className="absolute inset-0 -z-10 overflow-hidden">

  <div className="absolute top-10 left-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />

  <div className="absolute bottom-10 right-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[150px]" />

</div>
      <div className="max-w-5xl mx-auto">

        

        <div className="space-y-8">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

  {/* LEFT SIDE */}

  <div>

   <EditableText
  value={contact.title}
  onChange={(value) => update("title", value)}
  className="text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] text-white"
/>

    <div className="mt-6">
  <EditableText
  multiline
  value={contact.subtitle}
  onChange={(value) => update("subtitle", value)}
  className="mt-8 text-lg md:text-xl leading-8 tracking-[0.01em] text-slate-300"
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

    <div className="
rounded-[24px]
border
border-white/10
bg-gradient-to-br
from-slate-900/80
via-slate-900/70
to-slate-800/70
p-6
backdrop-blur-xl
transition-all
duration-500
hover:-translate-y-1
hover:border-cyan-400/30
hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
">

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

    <div className="
rounded-[24px]
border
border-white/10
bg-gradient-to-br
from-slate-900/80
via-slate-900/70
to-slate-800/70
p-6
backdrop-blur-xl
transition-all
duration-500
hover:-translate-y-1
hover:border-cyan-400/30
hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
">

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

    <div className="
rounded-[24px]
border
border-white/10
bg-gradient-to-br
from-slate-900/80
via-slate-900/70
to-slate-800/70
p-6
backdrop-blur-xl
transition-all
duration-500
hover:-translate-y-1
hover:border-cyan-400/30
hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
">

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
      className="
inline-flex
items-center
gap-2
rounded-xl
border
border-white/10
bg-slate-800/80
px-6
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
    className="
inline-flex
items-center
gap-2
rounded-xl
bg-blue-600
px-6
py-3
font-semibold
text-white
transition-all
duration-300
hover:-translate-y-1
hover:bg-blue-500
"
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