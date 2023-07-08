import { FC } from "react";
import { OptionalChildProp } from "../../types";
import { Linker, Nav } from "..";
import { Outlet } from "react-router-dom";

export const AppLayout: FC<OptionalChildProp> = ({ children }) => {
  return (
    <>
      <Linker />
      <Nav>{children || <Outlet />}</Nav>
    </>
  );
};
