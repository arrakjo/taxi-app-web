import React from "react";
import Navbar from "./Navbar";
import OrderCard from "./OrderCard";
import Topbar from "./Topbar";

function WebApp() {
  return (
    <div className="w-full h-screen pl-40 pr-14 pt-32 bg-whitesmoke">
      <div className="flex flex-col w-1/3 px-10">
        <OrderCard />
      </div>
      <div className="grid place-items-center w-2/3"></div>
    </div>
  );
}

export default WebApp;
