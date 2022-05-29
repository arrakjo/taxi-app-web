import { useState } from "react";
import Image from "next/image";
import Pin from "../../public/img/icons/Navigation/Map_Pin.svg";
import Navigation from "../../public/img/icons/Navigation/Navigation.svg";
import Home from "../../public/img/icons/Navigation/House_01.svg";
import Work from "../../public/img/icons/Interface/Suitcase.svg";
import Previous from "../../public/img/icons/Interface/Radio.svg";
import PreviousRide from "./PreviousRide";

// Data of the previous rides completed
const previousData = [
  {
    id: 1,
    address: "Sõle 40a, 10317 Tallinn",
  },
  {
    id: 2,
    address: "Lastekodu 46, 10113 Tallinn",
  },
  {
    id: 3,
    address: "Ravi tee 1, Haabneeme, 74001 Harju maakond",
  },
  {
    id: 4,
    address: "Ringi tee 1, Jüri, 75301 Harju maakond",
  },
];

// Data of home address
const homeData = {
  id: 1,
  address: "Viru Väljak 4, 10111 Tallinn",
};

// Data of work address
const workData = {
  id: 1,
  address: "Škoda, Pirni 1, 10614 Tallinn",
};

function OrderCard() {
  const [destination, setDestination] = useState("");

  const handleHomeAdress = () => {
    setDestination(homeData.address);
  };
  const handleWorkAdress = () => {
    setDestination(workData.address);
  };

  return (
    <div className="w-96 pb-4 flex flex-col items-center bg-white shadow-lg rounded-2xl">
      <div className="w-5/6 px-6 py-1 mt-5 flex flex-col shadow-xl shadow-lightgray rounded-xl">
        <div className="w-full relative flex justify-center items-center">
          <label htmlFor="pickup" className="absolute left-0 pt-2">
            <Image
              src={Pin}
              alt="Pickup"
              width={20}
              height={20}
              className="select-none pointer-events-none"
              priority
            />
          </label>
          <input
            type="text"
            name="pickup"
            id="pickup"
            placeholder="Tallinn Lennart Meri Airport"
            className="w-full pl-8 py-4 outline-none text-sm"
          />
        </div>
        <div className="w-full h-[1px] bg-[#ececec]"></div>
        <div className="w-full relative flex justify-center items-center">
          <label htmlFor="destination" className="absolute left-0 pt-2">
            <Image
              src={Navigation}
              alt="Destination"
              width={20}
              height={20}
              className="select-none pointer-events-none"
              priority
            />
          </label>
          <input
            type="text"
            name="destination"
            id="destination"
            placeholder="Enter your destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full pl-8 py-4 outline-none text-sm"
          />
        </div>
      </div>
      <div className="w-5/6 py-3 mt-5 flex flex-col space-y-5">
        <div className="flex border-b border-lightgray pb-3 cursor-pointer duration-200 hover:rounded-xl hover:shadow-lg shadow-lightgray p-2">
          <div className="w-10 h-10 grid place-items-center bg-white shadow-md shadow-lightgray rounded-full">
            <Image
              src={Home}
              alt="Home"
              width={20}
              height={20}
              className="select-none pointer-events-none"
              priority
            />
          </div>
          <div
            onClick={handleHomeAdress}
            className="flex flex-col pl-4 space-y-1 select-none"
          >
            <p className="text-sm font-semibold">Home</p>
            <p className="text-sm text-gray">{homeData.address}</p>
          </div>
        </div>
        <div className="flex border-b border-lightgray pb-3 cursor-pointer duration-200 hover:rounded-xl hover:shadow-lg shadow-lightgray p-2">
          <div className="w-10 h-10 grid place-items-center bg-white shadow-md shadow-lightgray rounded-full">
            <Image
              src={Work}
              alt="Work"
              width={20}
              height={20}
              className="select-none pointer-events-none"
              priority
            />
          </div>
          <div
            onClick={handleWorkAdress}
            className="flex flex-col pl-4 space-y-1 select-none"
          >
            <p className="text-sm font-semibold">Work</p>
            <p className="text-sm text-gray">{workData.address}</p>
          </div>
        </div>
      </div>
      {/* Map the previous 3 rides data and render them on the screen
        when the user clicks on the previous ride, populate the destination input field with the previous ride address */}

      {previousData.slice(0, 4).map((data) => (
        <PreviousRide
          state={() => setDestination(data.address)}
          key={data.id}
          location={data.address}
        />
      ))}
    </div>
  );
}

export default OrderCard;
