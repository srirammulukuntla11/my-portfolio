import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useAdmin } from "../../context/AdminContext";
import { usePortfolio } from "../../context/PortfolioContext";

function Navbar() {
  const { isAdmin, login, logout } = useAdmin();
  const { saveChanges, cancelChanges } = usePortfolio();

  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar Shadow
      setScrolled(window.scrollY > 20);

      // Active Section
      const sections = document.querySelectorAll("section[id]");

      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinkClass = (section) =>
    `transition duration-300 hover:text-cyan-400 ${
      activeSection === section
        ? "text-cyan-400"
        : "text-gray-300"
    }`;

  const handleLogin = () => {
    const success = login(password);

    if (success) {
      setShowLogin(false);
      setPassword("");
    } else {
      alert("Incorrect Password");
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/95 border-slate-700 shadow-xl shadow-cyan-500/10"
            : "bg-slate-950/90 border-slate-800"
        }`}
      >
       <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-6 py-4">

          <h1 className="text-xl md:text-2xl font-bold text-cyan-400 whitespace-nowrap">
            Sriram Mulukuntla
          </h1>

          <div className="hidden xl:flex flex-1 justify-center items-center gap-5 text-[15px]">
                        <a
              href="#home"
              className={navLinkClass("home")}
            >
              Home
            </a>

            <a
              href="#about"
              className={navLinkClass("about")}
            >
              About
            </a>

            <a
              href="#education"
              className={navLinkClass("education")}
            >
              Education
            </a>

            <a
              href="#skills"
              className={navLinkClass("skills")}
            >
              Skills
            </a>

            <a
              href="#projects"
              className={navLinkClass("projects")}
            >
              Projects
            </a>

            <a
              href="#certifications"
              className={navLinkClass("certifications")}
            >
              Certificates
            </a>

            <a
              href="#coding-profiles"
              className={navLinkClass("coding-profiles")}
            >
              Coding
            </a>

            <a
              href="#experience"
              className={navLinkClass("experience")}
            >
              Experience
            </a>

            <a
              href="#contact"
              className={navLinkClass("contact")}
            >
              Contact
            </a>

          </div>

          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}

<button
  onClick={() => setMobileMenu(!mobileMenu)}
 className="lg:hidden p-2 text-cyan-400"
>
  {mobileMenu ? <X size={28} /> : <Menu size={28} />}
</button>

          {!isAdmin ? (
  <button
    onClick={() => setShowLogin(true)}
    className="hidden lg:block px-4 py-2 border border-cyan-400 rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
  >
    Admin Login
  </button>
) : (
  <div className="hidden lg:flex items-center gap-2 flex-shrink-0">

    <button
      onClick={saveChanges}
      className="px-3 py-2 text-sm bg-green-500 rounded-lg hover:bg-green-600 transition whitespace-nowrap"
    >
      💾 Save
    </button>

    <button
      onClick={cancelChanges}
      className="px-3 py-2 text-sm bg-yellow-500 rounded-lg hover:bg-yellow-600 transition whitespace-nowrap"
    >
      Cancel
    </button>

    <button
      onClick={logout}
      className="px-3 py-2 text-sm bg-red-500 rounded-lg hover:bg-red-600 transition whitespace-nowrap"
    >
      Logout
    </button>

  </div>
)}

          </div>

        </div>
{/* Mobile Menu */}

{mobileMenu && (
  <div
  className={`
lg:hidden
absolute
top-full
left-0
w-full
overflow-hidden
bg-slate-950
border-t
border-slate-800
shadow-xl
transition-all
duration-300
${
  mobileMenu
    ? "max-h-[700px] opacity-100"
    : "max-h-0 opacity-0"
}
`}
>

    <div className="flex flex-col px-6 py-6 space-y-5">

      <a href="#home" onClick={() => setMobileMenu(false)} className={navLinkClass("home")}>Home</a>

      <a href="#about" onClick={() => setMobileMenu(false)} className={navLinkClass("about")}>About</a>

      <a href="#education" onClick={() => setMobileMenu(false)} className={navLinkClass("education")}>Education</a>

      <a href="#skills" onClick={() => setMobileMenu(false)} className={navLinkClass("skills")}>Skills</a>

      <a href="#projects" onClick={() => setMobileMenu(false)} className={navLinkClass("projects")}>Projects</a>

      <a href="#certifications" onClick={() => setMobileMenu(false)} className={navLinkClass("certifications")}>Certificates</a>

      <a href="#coding-profiles" onClick={() => setMobileMenu(false)} className={navLinkClass("coding-profiles")}>Coding</a>

      <a href="#experience" onClick={() => setMobileMenu(false)} className={navLinkClass("experience")}>Experience</a>

      <a href="#contact" onClick={() => setMobileMenu(false)} className={navLinkClass("contact")}>Contact</a>
     <hr className="border-slate-800 my-2" />

{!isAdmin ? (
  <button
    onClick={() => {
      setMobileMenu(false);
      setShowLogin(true);
    }}
    className="
w-full
rounded-xl
border
border-cyan-400
px-4
py-3
font-semibold
text-cyan-400
transition-all
duration-300
hover:bg-cyan-400
hover:text-slate-950
"
  >
    Admin Login
  </button>
) : (
  <div className="flex flex-col gap-3">

    <button
      onClick={() => {
        saveChanges();
        setMobileMenu(false);
      }}
      className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 transition font-semibold"
    >
      💾 Save Changes
    </button>

    <button
      onClick={() => {
        cancelChanges();
        setMobileMenu(false);
      }}
      className="w-full py-3 rounded-xl bg-yellow-500 hover:bg-yellow-600 transition font-semibold"
    >
      Cancel Changes
    </button>

    <button
      onClick={() => {
        logout();
        setMobileMenu(false);
      }}
      className="w-full py-3 rounded-xl bg-red-500 hover:bg-red-600 transition font-semibold"
    >
      Logout
    </button>

  </div>
)}
    </div>

  </div>
)}
      </nav>
            {showLogin && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="bg-slate-900 p-6 rounded-xl w-80 border border-slate-700">

            <h2 className="text-xl font-semibold text-white mb-4">
              Admin Login
            </h2>

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleLogin();
                }
              }}
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400 text-white"
            />

            <div className="flex gap-3 mt-5">

              <button
                onClick={() => {
                  setShowLogin(false);
                  setPassword("");
                }}
                className="flex-1 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleLogin}
                className="flex-1 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition font-semibold"
              >
                Login
              </button>

            </div>

          </div>

        </div>
      )}

    </>
  );
}

export default Navbar;