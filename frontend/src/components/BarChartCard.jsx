import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import CustomTooltip from "./CustomTooltip";
import {data} from "../data/barChartData"


export default function BarChartCard() {
  return (
    <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
      <h3 className="mb-4 text-gray-300">Monthly Scan Volume</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#aaa" />
          <YAxis stroke="#aaa" />

          <Tooltip content={<CustomTooltip />} />

          <Bar dataKey="jobs" fill="#ff2d95" />
          <Bar dataKey="courses" fill="#8b5cf6" />
          <Bar dataKey="websites" fill="#facc15" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}