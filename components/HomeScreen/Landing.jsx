import Image from "next/image";
import Travel from "../../public/img/travel.png";
import IconButton from "../elements/IconButton";
import AppleIcon from "../../public/img/icons/apple.svg";
import GoogleIcon from "../../public/img/icons/playstore.svg";

function Landing() {
  return (
    <div className="flex w-full py-8 min-h-[75vh] justify-center items-center">
      <div className="flex w-full max-w-7xl justify-between items-center">
        <div className="w-2/5">
          <h1 className="text-5xl font-semibold my-5 max-w-md">
            Find a ride fast, and at the right price
          </h1>
          <p className="text-gray my-8 max-w-xs">
            With Ridi you know the rate you are paying before confirming the
            order.
          </p>
          <div className="mt-16 flex w-full space-x-8">
            <IconButton name="Apple Store" icon={AppleIcon} />
            <IconButton name="Google Play" icon={GoogleIcon} />
          </div>
        </div>
        <div className="w-3/5 relative">
          <Image src={Travel} alt="Travel" className="pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
