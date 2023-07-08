import { NavLink } from "react-router-dom";
import { DoctorPatient } from "../../assets";

export const Home = () => {
  return (
    <main className="flex items-center justify-center">
      <section className="text-primary">
        <h1 className="font-extrabold text-8xl">Cava Health</h1>
        <h3 className="text-center text-2xl">Your plug to health care</h3>
        <div className="text-center pt-10">
          <NavLink
            className="bg-primary hover:bg-secondary text-lg text-white font-bold rounded-xl px-14 py-3 "
            to="/register"
          >
            Get Started
          </NavLink>
        </div>
      </section>
      <section>
        <img
          src={DoctorPatient}
          width={"85%"}
          alt="doctor and patient illustration"
        />
      </section>
    </main>
  );
};
