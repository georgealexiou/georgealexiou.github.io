import React from 'react';
import { Layout } from '../Layout/Layout';
import me from '../assets/me.png';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaMailchimp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { SocialBox } from '../globals/SocialBox/SocialBox';
import { socials } from '../globals/socialLinks';
import './Contact.styles.css';

export const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center px-5 pt-10 sm:px-20">
        <div className="py-6">
          <h1 className="text-center text-7xl font-bold text-white">Contact me</h1>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <SocialBox platformName={'Mail'} username={'george@alexiou.xyz'} link={''} Icon={FiMail} />
          <SocialBox
            platformName={'Instagram'}
            username={'@george.alexiou'}
            link={socials.instagram}
            Icon={FaInstagram}
          />
          <SocialBox platformName={'Twitter'} username={'@georgealexiou_'} link={socials.twitter} Icon={FaTwitter} />
          <SocialBox platformName={'GitHub'} username={'@georgealexiou'} link={socials.github} Icon={FaGithub} />
          <SocialBox platformName={'Linkedin'} username={'George Alexiou'} link={socials.linkedin} Icon={FaLinkedin} />
        </div>
      </div>
    </Layout>
  );
};
