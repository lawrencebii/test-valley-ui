import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faArrowAltCircleDown,
  faSearch,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
function NavBar() {
  return (
    <div className="flex flex-row w-full justify-between items-center bg-white mb-5 mt-5 mx-auto">
      <div className="flex items-center">
        <h3 className="font-bold text-c-green text-2xl mr-4 ">Test Valley</h3>
        <FontAwesomeIcon
          icon={faBars}
          color="#4ddeb5"
          className="font-normal mr-2 hidden md:block"
        />
        {/* <h3 className="font-bold text-c-green text-2xl ">Sign</h3> */}
      </div>
      <input
        type="text"
        placeholder="Search"
        className="border-2 border-gray-300 rounded-md px-2 py-1 margin-auto block md:visible"
      />
      <div className="block md:hidden">
        <FontAwesomeIcon icon={faBell} className="font-normal mr-2" />
        <FontAwesomeIcon icon={faSearch} className="font-normal mr-2" />
      </div>
      <h3 className="block md:visible">로그인 / 회원가입</h3>
    </div>
  );
}

export default NavBar;
