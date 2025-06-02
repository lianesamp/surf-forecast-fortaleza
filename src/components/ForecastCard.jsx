import React from "react";
import { degreesToCardinal } from "../utils/convertDirection";

const ForecastCard = ({
  time,
  waveDirection,
  windWaveDirection,
  swellHeight,
  swellPeriod,
}) => {
  const borderColorClass = swellPeriod >= 10 ? "border-green-400" : "border-red-400";
  const periodTextClass = swellPeriod >= 10 ? "text-green-600 font-semibold" : "text-red-600 font-semibold";

  return (
    <div
      className={`bg-gradient-to-br from-blue-50 to-white border-4 ${borderColorClass} rounded-xl shadow-lg p-6 max-w-sm mx-auto transform hover:scale-105 transition-transform duration-300 ease-in-out`}
    >
      <h2 className="text-xl font-bold mb-3 text-blue-700">
        {new Date(time).toLocaleString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </h2>

      <div className="space-y-2 text-gray-800">
        <p>
          <span className="font-semibold text-blue-600">Wave:</span>{" "}
          {waveDirection}° ({degreesToCardinal(waveDirection)})
        </p>

        <p>
          <span className="font-semibold text-blue-600">Wind/Waves:</span>{" "}
          {windWaveDirection}° ({degreesToCardinal(windWaveDirection)})
        </p>

        <p>
          <span className="font-semibold text-blue-600">Swell Height:</span>{" "}
          {swellHeight?.toFixed(2)} m
        </p>
        
        <p>
          <span className="font-semibold text-blue-600">Swell Period:</span>{" "}
          <span className={periodTextClass}>{swellPeriod} s</span>
        </p>
      </div>

    </div>
  );
};

export default ForecastCard;
