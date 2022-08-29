import React from "react";

export default function Stats({ title, money, per, compare }) {
  return (
    <div className="scale-75 origin-left">
      <p className="font-bold text-2xl">{title}</p>
      <p className="font-semibold text-3xl">${money}</p>
      <p className={`  ${per > 0 ? "text-green-600" : "text-red-600"}`}>
        {per > 0 ? `+${per}` : `${per}`}%
      </p>
      <p className="text-gray-600">
        Compared to <span className="font-bold">{compare}</span> last month
      </p>
    </div>
  );
}
