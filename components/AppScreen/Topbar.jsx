import Link from "next/link";
import Image from "next/image";
import Bell from "../../public/img/icons/Communication/Bell.svg";
import BellAlt from "../../public/img/icons/Communication/Bell_Notification.svg";
import Avatar from "../../public/img/avatar.svg";

function Topbar() {
  return (
    <div className="w-full h-32 absolute top-0 right-0 flex justify-end items-center py-5 px-14 space-x-5 z-20">
      <Link href="#">
        <a className="w-12 h-12 rounded-full grid place-items-center duration-150 hover:scale-105 active:scale-95">
          <Image
            src={Bell}
            alt="Notifications"
            width={32}
            height={32}
            className="select-none pointer-events-none"
            priority
          />
        </a>
      </Link>
      <Link href="#">
        <a className="w-16 h-16 rounded-full border-4 border-white grid place-items-center duration-150 hover:scale-105 active:scale-95">
          <Image
            src={Avatar}
            alt="Profile"
            width={48}
            height={48}
            className="select-none pointer-events-none rounded-full"
            priority
          />
        </a>
      </Link>
    </div>
  );
}

export default Topbar;
