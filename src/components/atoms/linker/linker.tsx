import { NavLink, useLocation } from "react-router-dom";

export const Linker = () => {
  const location = useLocation();
  const isRoot = () => {
    return location.pathname == "/";
  };
  return (
    <header className="bg-primary hover:text-[#e7e170] text-white w-full h-16 flex items-center justify-between px-4">
      <NavLink className="flex flex-col-reverse justify-center" to="/">
        {({ isActive }) => (
          <div>
            <span className="pb-2 font-extrabold text-[#f7ee54]">CAVA</span>
            <div className={(isActive && "is-active") || ""} />
          </div>
        )}
      </NavLink>
      {isRoot() && (
        <NavLink className="flex flex-col-reverse justify-center" to="/login">
          {({ isActive }) => (
            <div>
              <span className="pb-2">Login</span>
              <div className={(isActive && "is-active") || ""} />
            </div>
          )}
        </NavLink>
      )}
    </header>
  );
};
