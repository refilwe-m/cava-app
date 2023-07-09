import { FC } from "react";
import { ChildProp } from "../../../types";

export const Nav: FC<ChildProp> = ({ children }) => {
  return (
    <nav className="w-full py-4 px-16 h-screen bg-app-background bg-cover">
      {children}
    </nav>
  );
};
