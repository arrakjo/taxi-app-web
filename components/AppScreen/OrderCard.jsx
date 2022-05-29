import Image from "next/image";
import Pin from "../../public/img/icons/Navigation/Map_Pin.svg";
import Navigation from "../../public/img/icons/Navigation/Navigation.svg";

function OrderCard() {
  return (
    <div className="w-96 h-[50vh] flex flex-col items-center bg-white shadow-lg rounded-2xl">
      <div className="w-5/6 px-6 py-1 mt-5 flex flex-col shadow-xl shadow-[#E9E9E9] rounded-xl">
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
            placeholder="Viru Väljak 4, 10111, Tallinn"
            className="w-full pl-8 py-4 outline-none text-sm"
          />
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
