import { PieChart, Pie, Cell, Tooltip } from "recharts";
import CustomTooltip from "./CustomTooltip";
import {data} from "../data/pieChartData"


const COLORS = ["#ff2d95", "#8b5cf6", "#facc15", "#666"];

export default function PieChartCard() {
  return (
    <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
      <h3 className="mb-4 text-gray-300">Fraud Categories</h3>

      <PieChart width={300} height={250}>
        <Pie data={data} dataKey="value" outerRadius={100}>
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </div>
  );
}