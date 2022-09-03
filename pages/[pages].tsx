import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React from "react";

export default function pages() {
  const router = useRouter();
  const { pages } = router.query;
  return (
    <div className="mt-24 relative w-48 h-48 mx-auto flex items-center justify-center">
      <FontAwesomeIcon
        className="anim-gear text-9xl text-gray-600"
        icon={faGear}
      />
      <FontAwesomeIcon
        className="small-gear text-3xl text-gray-600 "
        icon={faGear}
      />
      <FontAwesomeIcon
        className="rot-gear text-3xl text-gray-600 "
        icon={faGear}
      />
      <div>
        <p className="text-gray-600 mt-48 min-w-[200px] sm:min-w-[350px] text-center">
          Add your custom <span className="capitalize font-bold">{pages}</span>{" "}
          options
        </p>
      </div>
    </div>
  );
}
