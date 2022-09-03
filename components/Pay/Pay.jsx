import React from "react";

export default function Pay({ color, price, name }) {
  return (
    <div className="flex justify-between items-center gap-4 dark:bg-kaniDk h-10 cursor-pointer bg-white p-2 px-4 rounded-md">
      <span className={`bg-${color} w-2 h-2 rounded-full`}></span>
      <p className="text-lg">{name}</p>
      <p className="font-bold">${price}</p>
    </div>
  );
}
