import React from 'react';
import { Layout } from '../Layout/Layout';
import me from '../assets/me.png';
import GitHubCalendar from 'react-github-calendar';
import { AiFillCamera } from 'react-icons/ai';
import { ImAirplane, ImPointRight } from 'react-icons/im';
import { SiNintendoswitch } from 'react-icons/si';
import { GiForkKnifeSpoon } from 'react-icons/gi';

export const About: React.FC = () => {
  return (
    <Layout>
      <div className="px-8 pt-10">
        <div className="px-4 py-6 sm:px-0">
          <h1
            className="mb-20 mt-5 text-center text-7xl font-bold text-white"
            style={{
              backgroundImage: 'linear-gradient(to right, #adadad, #2e2e2e)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About me
          </h1>
          <div className="flex w-full text-xl text-[#dcdcdc]">
            <div className="w-2/3 ">
              <p className="mb-4">
                Hi! I'm George Alexiou from Athens, Greece. I currently live in London, UK working as a Full-Stack
                Software Engineer. I am a Computer Science MEng graduate from the University of Southampton.
              </p>
              <p className="mb-4">Apart from coding, some other activities that I love to do!</p>
              <ul className="list-inside list-disc px-10">
                <li className="flex items-center">
                  <AiFillCamera className="mr-3" /> Photography
                </li>
                <li className="flex items-center">
                  <SiNintendoswitch className="mr-3" /> Video Games
                </li>
                <li className="flex items-center">
                  <ImAirplane className="mr-3" /> Travelling
                </li>
                <li className="flex items-center">
                  <GiForkKnifeSpoon className="mr-3" /> Cooking
                </li>
              </ul>
            </div>
            <div className="flex w-1/3 justify-center">
              <img src={me} className="w-96 rounded-full" alt="George Alexiou" />
            </div>
          </div>
        </div>
        <div className="text-center text-[#dcdcdc]">
          <h2 className="mb-10 text-4xl font-bold">My Github Contributions</h2>
          <div className="inline-block">
            <GitHubCalendar username="georgealexiou" blockSize={15} blockMargin={5} color="#6ac9e9" fontSize={16} />
          </div>
        </div>
      </div>
    </Layout>
  );
};
