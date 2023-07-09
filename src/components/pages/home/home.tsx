import { NavLink } from "react-router-dom";
import { DoctorPatient } from "../../../assets";

export const Home = () => {
  return (
    <main className="flex items-center bg-white rounded-2xl justify-center">
      <section className="text-primary">
        <h1 className="font-extrabold text-6xl">Cava Health</h1>
        <h3 className="text-center text-2xl">Your plug to health care</h3>
        <div className="text-center pt-10">
          <NavLink
            className="bg-primary hover:bg-secondary text-lg text-white font-bold rounded-xl px-14 py-3 "
            to="/user"
          >
            Get Started
          </NavLink>
        </div>
      </section>
      <section>
        <img
          src={DoctorPatient}
          height={"100%"}
          alt="doctor and patient illustration"
        />
      </section>
    </main>
  );
};
