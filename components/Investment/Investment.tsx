import Image from "next/image";
import React from "react";

export default function Investment({ brand, money, per }: any) {
  return (
    <div className=" flex items-center justify-between">
      <Image src={`/${brand}.png`} width={30} height={35} alt={brand} />
      <h3 className="capitalize font-bold w-16">{brand}</h3>
      <div className="text-gray-600 text-right">
        <p>7 Nov,2022</p>
        <p className="text-sm">9:13AM</p>
      </div>
      <div>
        <p className="font-bold">${money}</p>
        <p
          className={
            per > 0 ? "text-green-500 text-sm" : "text-red-500 text-sm"
          }
        >
          {per > 0 ? per : -per}%
        </p>
      </div>
    </div>
  );
}
