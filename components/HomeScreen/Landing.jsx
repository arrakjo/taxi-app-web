import Image from "next/image";
import Travel from "../../public/img/travel.png";
import IconButton from "../elements/IconButton";
import AppleIcon from "../../public/img/icons/apple.svg";
import GoogleIcon from "../../public/img/icons/playstore.svg";

function Landing() {
  return (
    <div className="flex w-full py-8 min-h-[75vh] justify-center items-center px-5">
      <div className="flex flex-wrap w-full max-w-7xl justify-between items-center">
        <div className="w-full lg:w-2/5 px-5">
          <h1 className="text-4xl md:text-5xl font-semibold my-5 max-w-md">
            Find a ride fast, and at the right price
          </h1>
          <p className="text-gray my-8 max-w-xs">
            With Ridi you know the rate you are paying before confirming the
            order.
          </p>
          <div className="mt-8 md:mt-16 flex flex-wrap w-full sm:space-x-6">
            <IconButton name="Apple Store" icon={AppleIcon} />
            <IconButton name="Google Play" icon={GoogleIcon} />
          </div>
        </div>
        <div className="w-full lg:w-3/5 mt-6 sm:mt-0 relative">
          <Image
            src={Travel}
            alt="Travel"
            className="pointer-events-none"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
