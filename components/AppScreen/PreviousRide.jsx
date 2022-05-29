import Image from "next/image";
import Previous from "../../public/img/icons/Interface/Radio.svg";

function PreviousRide({ location, state }) {
  return (
    <div
      onClick={state}
      className="w-5/6 px-2 flex flex-col cursor-pointer select-none"
    >
      <div className="flex items-center">
        <div className="w-10 h-10 grid place-items-center">
          <Image
            src={Previous}
            alt="Previous"
            width={14}
            height={14}
            className="select-none pointer-events-none"
            priority
          />
        </div>
        <p className="text-sm text-gray ml-4 max-w-[232px] truncate">
          {location}
        </p>
      </div>
    </div>
  );
}

export default PreviousRide;
