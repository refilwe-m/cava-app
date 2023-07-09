import { CiLock } from "react-icons/ci";

export const Status = ({ status }: { status: string }) => {
  return (
    <section className="rounded text-xs px-2 flex items-center gap-1 py-0">
      <CiLock />
      <span className="font-semibold">{status}</span>
    </section>
  );
};
