import EditableText from "../../components/Editable/EditableText";
import { usePortfolio } from "../../context/PortfolioContext";
import { Download, Mail, Link } from "lucide-react";
import { useAdmin } from "../../context/AdminContext";
function Hero() {
  const { draft, updateSection } = usePortfolio();
const { isAdmin } = useAdmin();

  const home = draft.home;

  const updateHome = (field, value) => {
    updateSection("home", {
      ...home,
      [field]: value,
    });
  };
  const updateButton = (field, value) => {
  updateSection("home", {
    ...home,
    buttons: {
      ...home.buttons,
      [field]: value,
    },
  });
};

  return (
    <section
  id="home"
  className="relative min-h-screen flex items-center overflow-hidden py-28"
>
  {/* Background Glow */}
<div className="absolute inset-0 -z-10 overflow-hidden">

  <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />

  <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[170px]" />

</div>
<div className="max-w-7xl mx-auto w-full px-6 lg:px-12">

 <div className="grid lg:grid-cols-2 gap-20 xl:gap-28 items-center">

    {/* LEFT */}

    <div>

      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-cyan-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/10">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
        {home.availability}
      </span>

      <div className="mt-8">

        <EditableText
          value={home.greeting}
          onChange={(value) => updateHome("greeting", value)}
          className="text-xl md:text-2xl text-slate-400 font-medium tracking-wide"
        />

      </div>

      <div className="mt-5 space-y-4">

        <EditableText
          value={home.firstName}
          onChange={(value) => updateHome("firstName", value)}
          className="block text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-white"
        />

        <EditableText
          value={home.lastName}
          onChange={(value) => updateHome("lastName", value)}
          className="block text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
        />

      </div>

      <div className="mt-8">

        <EditableText
          value={home.roles[0]}
          onChange={(value) =>
            updateHome("roles", [
              value,
              home.roles[1],
              home.roles[2],
            ])
          }
          className="text-2xl md:text-3xl font-bold text-white tracking-tight"
        />

      </div>

      <div className="mt-8 max-w-xl">

        <EditableText
          multiline
          value={home.description}
          onChange={(value) => updateHome("description", value)}
          className="text-lg md:text-xl leading-8 text-slate-400"
        />

      </div>
         {isAdmin && (
  <div className="mt-8 max-w-xl">
    <label className="block mb-2 text-cyan-400 font-semibold">
      Resume Drive Link
    </label>

    <input
      type="text"
      value={home.buttons.resumeLink}
      onChange={(e) => updateButton("resumeLink", e.target.value)}
      placeholder="Paste Google Drive Resume Link"
      className="w-full rounded-xl border border-cyan-400/30 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
    />
  </div>
)}
<div className="mt-12 flex flex-wrap items-center gap-5">

       <a
  href={home.buttons.resumeLink}
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-cyan-500/40"
>
  <Download size={20} />
  {home.buttons.resumeText}
</a>

        <button
  onClick={() =>
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="inline-flex items-center gap-3 rounded-xl border border-cyan-400/40 px-8 py-4 font-semibold text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10"
>
  <Mail size={20} />
  Contact Me
</button>

      </div>

      

    </div>

          {/* RIGHT */}

          {/* RIGHT */}

<div className="flex justify-center lg:justify-end">

  <div className="relative group">

    {/* Outer Glow */}

   <div className="absolute -inset-12 rounded-full bg-cyan-400/10 blur-[150px] transition-all duration-500 group-hover:bg-cyan-400/20"></div>

    {/* Animated Ring */}

   <div className="absolute inset-0 rounded-full border border-cyan-400/20"></div>

    {/* Image */}

    <img
      src={home.profileImage}
      alt="Profile"
      className="
relative
w-80
h-80
md:w-[410px]
md:h-[410px]
object-cover
rounded-full
border-[4px]
border-cyan-400/70
shadow-[0_0_80px_rgba(34,211,238,0.18)]
transition-all
duration-500
group-hover:scale-[1.03]
"
    />

  </div>

</div>
        </div>

      </div>
    </section>
  );
}

export default Hero;