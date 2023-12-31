import { FC } from "react";
import { TrendsProps } from "./types";
import { Trend, TrendProps } from "../..";
import { map } from "lodash";

export const Trends: FC<TrendsProps> = ({ trends }) => {
  return (
    <section className="border border-primary drop-shadow-2xl rounded-xl lg:ml-24 px-2 py-1">
      <h1 className="text-2xl font-extrabold pb-5">Currently Trending</h1>
      <div className="flex flex-col gap-2 ">
        {map(trends, (currTrend: TrendProps) => (
          <Trend
            key={currTrend.trend}
            trend={currTrend.trend}
            numEnquirers={currTrend.numEnquirers}
          />
        ))}
      </div>
    </section>
  );
};
