import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import CustomTooltip from "./CustomTooltip";
import {data} from "../data/lineChartData"


export default function LineChartCard() {
  return (
    <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
      <h3 className="mb-4 text-gray-300">Weekly Risk Distribution</h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#aaa" />
          <YAxis stroke="#aaa" />

          <Tooltip content={<CustomTooltip />} />

          <Line type="monotone" dataKey="safe" stroke="#22c55e" strokeWidth={3} />
          <Line type="monotone" dataKey="suspicious" stroke="#facc15" strokeWidth={3} />
          <Line type="monotone" dataKey="highRisk" stroke="#ef4444" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}