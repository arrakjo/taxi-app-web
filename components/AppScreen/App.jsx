import React from "react";
import MapView from "./MapView";
import Navbar from "./Navbar";
import OrderCard from "./OrderCard";
import PaymentCard from "./PaymentCard";
import Topbar from "./Topbar";

function WebApp() {
  return (
    <div className="flex items-start w-full h-screen pl-40 pr-14 pt-32 bg-whitesmoke">
      <div className="flex flex-col w-1/3 px-10 space-y-8">
        <OrderCard />
        <PaymentCard />
      </div>
      <div className="mr-2">
        <MapView />
      </div>
    </div>
  );
}

export default WebApp;
