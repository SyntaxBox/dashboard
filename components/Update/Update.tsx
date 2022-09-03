import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React from "react";

export default function Update() {
  const { asPath } = useRouter();
  if (asPath !== "/") {
    return null;
  }
  return (
    <div className="hidden lg:flex mt-12 items-center bg-white dark:bg-kaniDk rounded-2xl p-2 flex-col">
      <FontAwesomeIcon
        className="w-12 my-3 text-purple-900"
        icon={faClockRotateLeft}
      />
      <h3 className="font-bold my-3">Update available</h3>
      <span>
        <p className="text-gray-500 text-sm">Security update</p>
        <p className="text-gray-500 text-sm">General updates</p>
      </span>
      <button
        onClick={() => window.location.reload()}
        className="font-semibold bg-purple-900 my-3 rounded-xl p-2 text-white"
      >
        Update Now
      </button>
    </div>
  );
}
