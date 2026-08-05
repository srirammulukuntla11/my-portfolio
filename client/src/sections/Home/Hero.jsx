import EditableText from "../../components/Editable/EditableText";
import { usePortfolio } from "../../context/PortfolioContext";

function Hero() {
  const { draft, updateSection } = usePortfolio();

  const home = draft.home;

  const updateHome = (field, value) => {
    updateSection("home", {
      ...home,
      [field]: value,
    });
  };

  return (
    <section
  id="home"
  className="min-h-screen flex items-center py-32"
>
<div className="max-w-7xl mx-auto w-full px-6 lg:px-12">

  <div className="grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT */}

    <div>

      <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-medium tracking-wide shadow-lg">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
        {home.availability}
      </span>

      <div className="mt-8">

        <EditableText
          value={home.greeting}
          onChange={(value) => updateHome("greeting", value)}
          className="text-xl md:text-2xl text-slate-300 font-medium"
        />

      </div>

      <div className="mt-4 space-y-2">

        <EditableText
          value={home.firstName}
          onChange={(value) => updateHome("firstName", value)}
          className="block text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-white"
        />

        <EditableText
          value={home.lastName}
          onChange={(value) => updateHome("lastName", value)}
          className="block text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-cyan-400"
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
          className="text-2xl md:text-3xl font-semibold text-slate-200"
        />

      </div>

      <div className="mt-8 max-w-2xl">

        <EditableText
          multiline
          value={home.description}
          onChange={(value) => updateHome("description", value)}
          className="text-lg text-slate-400 leading-9"
        />

      </div>

      <div className="flex flex-wrap gap-5 mt-10">

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 font-semibold shadow-lg shadow-cyan-500/30 hover:scale-105"
        >
          📄 Download Resume
        </a>

        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-8 py-4 rounded-2xl border border-cyan-400 text-cyan-300 hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
        >
          📩 Contact Me
        </button>

      </div>

      

    </div>

          {/* RIGHT */}

          {/* RIGHT */}

<div className="flex justify-center lg:justify-end">

  <div className="relative group">

    {/* Outer Glow */}

    <div className="absolute -inset-8 rounded-full bg-cyan-500/20 blur-3xl group-hover:bg-cyan-400/30 transition-all duration-500"></div>

    {/* Animated Ring */}

    <div className="absolute inset-0 rounded-full border-2 border-cyan-400/40 animate-pulse"></div>

    {/* Image */}

    <img
      src={home.profileImage}
      alt="Profile"
      className="
        relative
        w-80
        h-80
        md:w-[430px]
        md:h-[430px]
        object-cover
        rounded-full
        border-[6px]
        border-cyan-400
        shadow-[0_0_60px_rgba(34,211,238,0.35)]
        transition-all
        duration-500
        group-hover:scale-105
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