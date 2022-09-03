import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faCcVisa, faCcMastercard } from "@fortawesome/free-brands-svg-icons";

export default function Transaction({ icon, color, title, money }: any) {
  const colors = {
    green: {
      bg: "bg-green-100",
      color: "text-green-500",
    },
    pink: {
      bg: "bg-pink-100",
      color: "text-pink-500",
    },
    purple: {
      bg: "bg-purple-100",
      color: "text-purple-500",
    },
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          <div
            className={`p-2 w-11 h-11 rounded-md flex items-center justify-center
            ${color === "pink" && colors.pink.bg}
            ${color === "purple" && colors.purple.bg}
            ${color === "green" && colors.green.bg}`}
          >
            <FontAwesomeIcon
              icon={icon}
              className={`w-6 ${color === "pink" && colors.pink.color}
            ${color === "purple" && colors.purple.color}
            ${color === "green" && colors.green.color}`}
            />
          </div>
          <div className="text-gray-600">
            <p className="text-semibold">{title}</p>
            <p>05.12.2022</p>
          </div>
        </div>
        <div className="flex gap-1">
          <FontAwesomeIcon
            icon={color === "purple" ? faCcMastercard : faCcVisa}
            className={`w-12 ${color === "pink" && colors.pink.color}
            ${color === "purple" && colors.purple.color}
            ${color === "green" && colors.green.color}`}
          />
        </div>
        <p className="font-bold text-xl">${money}</p>
      </div>
    </div>
  );
}
