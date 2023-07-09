import { FAQ, TextField, Trends, Status } from "../..";

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
    <main className="flex flex-col w-full bg-white rounded-xl drop-shadow-2xl h-fill p-8">
      <section className="flex gap-2">
        <section className="">
          <img className="rounded-full" src="https://picsum.photos/90" alt="" />
        </section>
        <TextField />
      </section>
      <section className="grid grid-cols-3 gap-4 py-4">
        <Trends trends={data?.trends} />
        <section className="col-span-2">
          <FAQ />
        </section>
      </section>
    </main>
  );
};
