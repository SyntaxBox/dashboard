import React from "react";
import Transaction from "../Transaction/Transaction";
import {
  faBurger,
  faCartShopping,
  faDumbbell,
  faGamepad,
  faMusic,
  faPrescriptionBottleMedical,
} from "@fortawesome/free-solid-svg-icons";
export default function Recent() {
  return (
    <section className="w-1/2 mlg:w-full px-6 mlg:p-2 py-6 bg-white dark:bg-kaniDk  rounded-lg flex flex-col gap-6">
      <h3 className="text-2xl mb-2 font-bold">Recent Transactions</h3>
      <div className="flex flex-col gap-2">
        <Transaction icon={faMusic} color="pink" title="Music" money={20.3} />
        <Transaction
          icon={faCartShopping}
          color="pink"
          title="Shopping"
          money={20.3}
        />
        <Transaction
          icon={faBurger}
          color="green"
          title="Restaurant"
          money={20.3}
        />
        <Transaction
          icon={faGamepad}
          color="purple"
          title="Games"
          money={20.3}
        />
        <Transaction
          icon={faDumbbell}
          color="purple"
          title="fitness"
          money={20.3}
        />
        <Transaction
          icon={faPrescriptionBottleMedical}
          color="pink"
          title="Pharmacy"
          money={20.3}
        />
      </div>
    </section>
  );
}
