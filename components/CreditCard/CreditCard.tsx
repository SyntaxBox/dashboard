import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";

export default function CreditCard({ coin, type, money, color }) {
  return (
    <Tilt>
      <div
        className={` flex flex-col justify-between cursor-pointer p-4 h-[200px] w-[350px] rounded-2xl bg-${color} `}
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-3 text-white items-center">
            <div className="border-2 text- w-[40px] h-[40px] flex items-center justify-center rounded-lg">
              <Image src={`/${coin}.png`} width={30} height={30} alt={coin} />
            </div>
            {coin}
          </div>
          <div>
            <Image
              src={`/${type}.png`}
              width={50}
              height={type === "master" ? 30 : 20}
              alt={type}
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-3xl text-white">${money}</h1>
          <Image src="/card.png" width={80} height={50} alt="card" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white text-md">Card holder</p>
            <p className="text-white text-sm">john deo</p>
          </div>
          <div className="flex gap-6">
            <div>
              <p className="text-white text-md">EXP</p>
              <p className="text-white text-sm">08/26</p>
            </div>
            <div>
              <p className="text-white text-md">CVV</p>
              <p className="text-white text-sm">123</p>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
}
