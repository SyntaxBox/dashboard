import React, { useContext, useState } from "react";
import {
  faGear,
  faThLarge,
  faExchange,
  faWallet,
  faMoneyCheckDollar,
  faChartLine,
  faPersonCircleQuestion,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import List from "../List/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Context } from "../../context/Provider";
import Update from "../Update/Update";
import Link from "next/link";

export default function HNav() {
  const [current, setCurrent] = useState(0);
  const [hide, setHide] = useContext(Context);
  const handleClick = (id) => {
    setCurrent(id);
  };
  return (
    <nav
      className={`${
        hide ? "translate-x-0" : "translate-x-[-300px] lg:translate-x-0"
      } z-10 lg:bg-transparent lg:relative lg:mt-4 lg:shadow-none pl-6 shadow-lg dark:bg-black dark:shadow-gray-800  shadow-gray-400 w-64 fixed bg-white h-screen top-0`}
    >
      <ul>
        <li className="h-16 lg:hidden" onClick={() => setHide(false)}>
          <FontAwesomeIcon
            icon={faXmark}
            className="w-4 cursor-pointer text-gray-600 absolute right-6 top-6"
          />
        </li>
        <Link href="/">
          <a>
            <List
              click={handleClick}
              id={0}
              current={current}
              icon={faThLarge}
              text="Dashboard"
            />
          </a>
        </Link>
        <Link href="/exchange">
          <a>
            <List
              click={handleClick}
              id={1}
              current={current}
              icon={faExchange}
              text="Exchange"
            />
          </a>
        </Link>
        <Link href="/wallet">
          <a>
            <List
              click={handleClick}
              id={2}
              current={current}
              icon={faWallet}
              text="Wallet"
            />
          </a>
        </Link>
        <Link href="/transactions">
          <a>
            <List
              click={handleClick}
              id={3}
              current={current}
              icon={faMoneyCheckDollar}
              text="Transactions"
            />
          </a>
        </Link>
        <Link href="/analytics">
          <a>
            <List
              click={handleClick}
              id={4}
              current={current}
              icon={faChartLine}
              text="Analytics"
            />
          </a>
        </Link>
        <Link href="/messages">
          <a>
            <List
              click={handleClick}
              id={5}
              current={current}
              icon={faBell}
              text="Messages"
            />
          </a>
        </Link>
        <Link href="/help-center">
          <a>
            <List
              click={handleClick}
              id={6}
              current={current}
              icon={faPersonCircleQuestion}
              text="Help center"
            />
          </a>
        </Link>
        <Link href="/settings">
          <a>
            <List
              click={handleClick}
              id={7}
              current={current}
              icon={faGear}
              text="Settings"
            />
          </a>
        </Link>
      </ul>
      <Update />
    </nav>
  );
}
