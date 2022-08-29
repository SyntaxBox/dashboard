import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function List({ icon, text, id, current, click }) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (id === current) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [current]);

  const handleClick = () => {
    click(id);
  };
  return (
    <li
      onClick={handleClick}
      className={`${
        active &&
        "border-l-4 border-red-500 text-red-400 font-bold bg-white dark:bg-kaniDk"
      } cursor-pointer p-4 transition-none my-1 h-14 dark:hover:bg-kaniDk rounded-sm text-gray-600 flex hover:bg-white items-center`}
    >
      <FontAwesomeIcon icon={icon} className="w-6 mr-3" /> {text}
    </li>
  );
}
