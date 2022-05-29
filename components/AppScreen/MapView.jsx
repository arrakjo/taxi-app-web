import Image from "next/image";
import Mapbox from "../../public/img/mapbox.png";
import Pin from "../../public/img/icons/Navigation/Map_Pin-1.svg";

function MapView() {
  return (
    <div className="relative w-full max-w-7xl rounded-2xl p-4 pb-3 bg-white">
      <Image
        src={Mapbox}
        alt="Map"
        width={1920}
        height={1080}
        className="select-none pointer-events-none rounded-xl z-10"
        priority
      />
      <div className="absolute z-20 w-10 h-10 top-[48%] left-[48%]">
        <Image
          src={Pin}
          alt="Pin"
          width={32}
          height={32}
          className="select-none pointer-events-none"
          priority
        />
      </div>
    </div>
  );
}

export default MapView;
