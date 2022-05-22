import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/img/logo.svg";
import Button from "../elements/Button";

function Navbar() {
  return (
    <header className="flex w-full py-8 justify-center items-center px-5">
      <div className="flex w-full max-w-7xl justify-between items-center">
        <Link href="/">
          <div className="flex justify-between items-center cursor-pointer select-none">
            <Image src={Logo} alt="Logo" width={48} height={60} priority />
            <div className="duration-150 hover:-rotate-12 active:rotate-0 ease-in-out">
              <a className="text-3xl font-bold ml-2 text-secondary">Ridi</a>
            </div>
          </div>
        </Link>
        <div className="hidden md:flex w-1/2 justify-end space-x-10 px-10">
          <Link href="#">
            <a className="font-medium duration-150 active:scale-95">
              Passenger
            </a>
          </Link>
          <Link href="#">
            <a className="font-medium duration-150 active:scale-95">Driver</a>
          </Link>
        </div>
        <Button name="Sign up" />
      </div>
    </header>
  );
}

export default Navbar;
