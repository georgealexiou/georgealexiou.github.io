import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { socials } from '../socialLinks';
import React from 'react';

export const SocialBanner: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 z-10 flex w-full items-center justify-center">
      <div className=" flex space-x-20 pb-8 text-3xl text-[#777777]">
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
