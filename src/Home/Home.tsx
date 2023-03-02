import { Layout } from '../Layout/Layout';
import Typewriter from 'typewriter-effect';
import { SocialBanner } from '../globals/SocialBanner/SocialBanner';
import React from 'react';

export const Home: React.FC = () => {
  return (
    <Layout>
      <div className="absolute flex h-screen w-screen items-center justify-center overflow-hidden">
        <span
          className="font-mono text-xyzMobile font-bold sm:text-xyz"
          style={{
            backgroundImage: 'linear-gradient(to right, #111111, #525252, #111111)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          XYZ
        </span>
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <h3 className="mb-4 justify-self-center text-center text-2xl text-white">Hey! ✌️ I'm</h3>
            <span className="text-4xl font-bold text-white md:text-6xl lg:text-8xl xl:text-9xl">George Alexiou</span>

            <div className="z-10 pt-14 text-center text-2xl text-white">
              <Typewriter
                options={{
                  strings: ['<> Full-Stack Software Engineer </>', '<> Computer Science MEng Graduate </>'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 90,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <SocialBanner />
    </Layout>
  );
};
