import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { socials } from "../socialLinks";

export const SocialBanner: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 z-10 w-full flex justify-center items-center">
      <div className=" text-[#525252] flex space-x-20 pb-8 text-3xl">
        <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href={socials.github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};
