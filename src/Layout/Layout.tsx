import { ReactElement } from "react";
import { AppBar } from "./AppBar/AppBar";
import React from "react";

type LayoutProps = {
  children?: ReactElement[] | ReactElement;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#1C1C1C] min-h-screen min-w-screen">
      <div className="scrollbar">
        <AppBar />
        <div> {children}</div>
      </div>
    </div>
  );
};
