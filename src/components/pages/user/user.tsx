import { TextField, Trends } from "../..";
import { Status } from "../../atoms/status/status";

export const User = () => {
  const data = {
    trends: [
      {
        trend: "#Fertility",
        numEnquirers: 3546,
      },
      {
        trend: "Contraceptive Methods",
        numEnquirers: 2354,
      },
      {
        trend: "#Menstruation",
        numEnquirers: 3546,
      },
      {
        trend: "#Hormones",
        numEnquirers: 3546,
      },
    ],
  };

  return (
    <main className="grid gap-6 w-full">
      <section className="flex gap-2">
        <section className="">
          <img className="rounded-full" src="https://picsum.photos/90" alt="" />
        </section>
        <TextField />
      </section>
      <section className="grid grid-cols-3">
        <Trends trends={data?.trends} />
        <section className="col-span-2"></section>
      </section>
    </main>
  );
};
