import { Layout } from "../Layout/Layout";
import Typewriter from "typewriter-effect";
import { SocialBanner } from "../globals/SocialBanner/SocialBanner";
import React from "react";

export const Home: React.FC = () => {
  return (
    <Layout>
      <div className="absolute h-screen w-screen flex items-center justify-center overflow-hidden">
        <span
          className="text-xyz font-bold font-mono"
          style={{
            backgroundImage:
              "linear-gradient(to right, #111111, #525252, #111111)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          XYZ
        </span>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl text-white text-center justify-self-center mb-4">
              Hey! ✌️ I'm
            </h3>
            <span className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-white">
              George Alexiou
            </span>

            <div className="text-white text-2xl text-center z-10 pt-14">
              <Typewriter
                options={{
                  strings: [
                    "<> Full-Stack Software Engineer </>",
                    "<> Computer Science MEng Graduate </>",
                  ],
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
