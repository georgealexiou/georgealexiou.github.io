import { ReactElement } from "react";
import { AppBar } from "./AppBar/AppBar";

type LayoutProps = {
  children?: ReactElement[] | ReactElement;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-[#1C1C1C]">
      <AppBar />
      <div> {children}</div>
    </div>
  );
};
