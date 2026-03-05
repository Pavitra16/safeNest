const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1a1a1a] border border-gray-700 rounded-lg p-3 shadow-lg">
        <p className="text-white font-semibold mb-1">{label}</p>

        {payload.map((item, index) => (
          <p
            key={index}
            className="text-sm"
            style={{ color: item.color }}
          >
            {item.name}: {item.value}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

export default CustomTooltip;