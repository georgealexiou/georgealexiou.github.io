import React from 'react';
import { Layout } from '../Layout/Layout';
import me from '../assets/me.png';
import GitHubCalendar from 'react-github-calendar';
import { AiFillCamera } from 'react-icons/ai';
import { ImAirplane } from 'react-icons/im';
import { SiNintendoswitch } from 'react-icons/si';
import { GiForkKnifeSpoon } from 'react-icons/gi';

export const About: React.FC = () => {
  return (
    <Layout>
      <div className="px-4 pt-10 md:px-20">
        <div className="py-6 sm:px-0">
          <h1 className="mb-10 mt-5 text-center text-5xl font-bold text-white md:text-7xl">About me</h1>
          <div className="flex w-full flex-col rounded-3xl bg-neutral-900 p-6 text-xl text-[#dcdcdc] shadow-black drop-shadow-xl sm:flex-row md:p-10">
            <div className="sm:w-2/3 sm:pr-10">
              <p className="mb-4">
                Hey! I'm George Alexiou from Athens, Greece. I currently live in London, UK working as a Full-Stack
                Software Engineer. I am a Computer Science MEng graduate from the University of Southampton.
              </p>
              <p className="mb-4">Apart from coding, some other activities that I love to do!</p>
              <ul className="list-inside list-disc px-4 md:px-10">
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
            <div className="flex justify-center sm:w-1/3">
              <img src={me} className="w-48 rounded-full md:w-72" alt="George Alexiou" />
            </div>
          </div>
        </div>
        <div className="text-center text-[#dcdcdc]">
          <h2 className="mb-8 text-3xl font-bold md:mb-10 md:text-4xl">My Github Contributions</h2>
          <div className="inline-block">
            <GitHubCalendar username="georgealexiou" blockSize={15} blockMargin={5} color="#6ac9e9" fontSize={16} />
          </div>
        </div>
      </div>
    </Layout>
  );
};
