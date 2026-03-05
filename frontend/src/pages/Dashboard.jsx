import StatCard from "../components/StatCard";
import BarChartCard from "../components/BarChartCard";
import PieChartCard from "../components/PieChartCard";
import LineChartCard from "../components/LineChartCard";
import ScamList from "../components/ScamList";
import {data} from "../data/statsData"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-8">

      <h1 className="text-3xl font-bold text-center mb-2">
        Scam Trend <span className="text-pink-500">Analytics</span>
      </h1>

      <p className="text-center text-gray-400 mb-8">
        Real-time fraud intelligence for awareness and protection
      </p>

      <div className="grid md:grid-cols-4 gap-6 mb-10">
            {
                data.map((item,index)=>(
                    <StatCard key={index} title={item.title} value={item.value}/>
                ))
            }
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <BarChartCard />
        <PieChartCard />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <LineChartCard />
        <ScamList />
      </div>
    </div>
  );
}