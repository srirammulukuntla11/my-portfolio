import EditableText from "../../components/Editable/EditableText";
import { usePortfolio } from "../../context/PortfolioContext";

function About() {
  const { draft, updateSection } = usePortfolio();

  const about = draft.about;

  const updateAbout = (field, value) => {
    updateSection("about", {
      ...about,
      [field]: value,
    });
  };

  return (
    <section
      id="about"
      className="py-28 px-6 lg:px-10 bg-[#0b1120]"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}

        <div className="mb-14">

          <EditableText
            value={about.title}
            onChange={(value) => updateAbout("title", value)}
            className="text-4xl md:text-5xl font-bold text-white"
          />

          <div className="w-24 h-1 bg-cyan-400 rounded-full mt-5"></div>

        </div>

        {/* About Paragraph */}

        <EditableText
          multiline
          value={about.description}
          onChange={(value) =>
            updateAbout("description", value)
          }
          className="
            text-lg
            md:text-xl
            text-slate-300
            leading-10
            max-w-4xl
          "
        />

      </div>
    </section>
  );
}

export default About;