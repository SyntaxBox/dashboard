import React from "react";
import Pay from "../Pay/Pay";

export default function FastPayment() {
  return (
    <section className="flex gap-8 md:flex-row flex-col">
      <h3 className="font-bold text-3xl">
        Fast <br /> payment
      </h3>
      <div className="flex flex-wrap gap-3">
        <Pay color="red-500" price={162} name="Training" />
        <Pay color="purple-500" price={162} name="Internet" />
        <Pay color="green-500" price={162} name="Gas" />
        <Pay color="blue-500" price={162} name="Movies" />
        <Pay color="pink-500" price={162} name="Education" />
        <Pay color="green-500" price={162} name="Electricity" />
        <Pay color="purple-500" price={162} name="Food" />
        <Pay color="blue-500" price={162} name="Water" />
      </div>
    </section>
  );
}
