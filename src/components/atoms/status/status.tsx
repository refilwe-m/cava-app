import { CiLock } from "react-icons/ci";

export const Status = ({ status }: { status: string }) => {
  return (
    <section className="rounded-full bg-secondary py-1.5 text-white hover:bg-gray-100 text-xs px-2 flex items-center gap-1">
      <CiLock />
      <span className="font-semibold">{status}</span>
    </section>
  );
};
