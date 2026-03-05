
export default function StatCard({title,value}) {
  return (
    <div className="bg-[#111] border border-gray-800 p-6 rounded-xl hover:scale-105 transition">
      <p className="text-gray-400 text-sm">{title}</p>
      <h2 className="text-2xl font-bold text-pink-500 mt-2">{value}</h2>
    </div>
  );
}