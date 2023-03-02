import React from 'react';
import { IconType } from 'react-icons/lib';

type SocialBoxProps = {
  platformName: string;
  username: string;
  link?: string;
  Icon: IconType;
};

export const SocialBox: React.FC<SocialBoxProps> = ({ platformName, username, link, Icon }) => {
  return (
    <a href={link ? link : undefined} target="_blank" rel="noopener noreferrer">
      <div className="flex w-80 items-center rounded-2xl bg-stone-700 p-3 text-white">
        <div className=" flex items-center text-4xl">{<Icon />}</div>
        <div className="px-2">
          <h3 className=" text-xl">{platformName}</h3>
          <span className="text-sm font-thin">{username}</span>
        </div>
      </div>
    </a>
  );
};
