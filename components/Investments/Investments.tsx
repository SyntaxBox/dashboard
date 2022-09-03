import React from "react";
import Investment from "../Investment/Investment";

export default function Investments() {
  return (
    <section className="w-1/2 bg-white dark:bg-kaniDk px-4 mlg:w-full mlg:p-2 py-6 rounded-lg flex flex-col gap-6">
      <h3 className="text-2xl mb-2 font-bold">Investments</h3>
      <Investment brand="tesla" money={20.236} per={8.2} />
      <Investment brand="uniliver" money={29.325} per={18.9} />
      <Investment brand="monster" money={12.352} per={4.2} />
      <Investment brand="mcDonalds" money={85.236} per={82.2} />
    </section>
  );
}
