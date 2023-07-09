import { FC } from "react";
import { TrendsProps } from "./types";
import { Trend, TrendProps } from "../..";
import { map } from "lodash";

export const Trends: FC<TrendsProps> = ({ trends }) => {
  return (
    <section className="bg-white drop-shadow-2xl rounded-xl px-2 py-1">
      <h1 className="text-2xl font-extrabold pb-5">Trends for You</h1>
      <div className="flex flex-col gap-2 ">
        {map(trends, (currTrend: TrendProps) => (
          <Trend
            trend={currTrend.trend}
            numEnquirers={currTrend.numEnquirers}
          />
        ))}
      </div>
    </section>
  );
};
