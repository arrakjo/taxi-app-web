import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/img/logo.svg";
import Home from "../../public/img/icons/Navigation/House_01-1.svg";
import HomeAlt from "../../public/img/icons/Navigation/House_01-2.svg";
import Pin from "../../public/img/icons/Navigation/Map_Pin-2.svg";
import PinAlt from "../../public/img/icons/Navigation/Map_Pin-1.svg";
import User from "../../public/img/icons/User/User_02.svg";
import UserAlt from "../../public/img/icons/User/User_02-1.svg";
import Settings from "../../public/img/icons/Interface/Settings.svg";
import SettingsAlt from "../../public/img/icons/Interface/Settings-1.svg";

function Navbar() {
  return (
    <div className="absolute top-0 left-0 h-screen w-32 py-10 flex flex-col bg-white shadow-xl z-30">
      <Image
        src={Logo}
        alt="Logo"
        width={48}
        height={60}
        className="select-none pointer-events-none"
        priority
      />
      <div className="w-36 py-10 flex flex-col items-end space-y-3">
        <Link href="#">
          <a className="w-24 h-14 bg-white shadow-lg rounded-lg grid place-items-center duration-150 hover:scale-105 active:scale-95">
            <Image
              src={HomeAlt}
              alt="Home"
              width={32}
              height={32}
              className="select-none pointer-events-none"
              priority
            />
          </a>
        </Link>
        <Link href="#">
          <a className="w-24 h-14 grid place-items-center">
            <Image
              src={Pin}
              alt="Saved"
              width={32}
              height={32}
              className="select-none pointer-events-none"
              priority
            />
          </a>
        </Link>
        <Link href="#">
          <a className="w-24 h-14 grid place-items-center">
            <Image
              src={User}
              alt="User"
              width={32}
              height={32}
              className="select-none pointer-events-none"
              priority
            />
          </a>
        </Link>
        <Link href="#">
          <a className="w-24 h-14 grid place-items-center">
            <Image
              src={Settings}
              alt="Settings"
              width={32}
              height={32}
              className="select-none pointer-events-none"
              priority
            />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
