import {scams} from "../data/scamListData"

export default function ScamList() {
  

  return (
    <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
      <h3 className="mb-4 text-gray-300">Top Scam Types</h3>

      {scams.map((scam, i) => (
        <div
          key={i}
          className="flex justify-between py-2 border-b border-gray-800"
        >
          <span>{scam.name}</span>

          <span
            className={`text-xs px-2 py-1 rounded ${
              scam.risk === "High"
                ? "bg-red-500/20 text-red-400"
                : "bg-yellow-500/20 text-yellow-400"
            }`}
          >
            {scam.risk}
          </span>
        </div>
      ))}
    </div>
  );
}