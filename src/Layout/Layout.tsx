import { ReactElement } from 'react';
import { AppBar } from './AppBar/AppBar';
import React from 'react';

type LayoutProps = {
  children?: ReactElement[] | ReactElement;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-w-screen min-h-screen bg-[#1C1C1C]">
      <div className="scrollbar">
        <AppBar />
        <div> {children}</div>
      </div>
    </div>
  );
};
