import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="flex items-center gap-5 mt-8">
      <a
        href="https://github.com/srirammulukuntla11"
        target="_blank"
        rel="noreferrer"
        className="text-gray-400 hover:text-cyan-400 transition text-3xl"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/sriram011"
        target="_blank"
        rel="noreferrer"
        className="text-gray-400 hover:text-cyan-400 transition text-3xl"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:srirammulukuntla@gmail.com"
        className="text-gray-400 hover:text-cyan-400 transition text-3xl"
      >
        <FaEnvelope />
      </a>
    </div>
  );
}

export default SocialLinks;