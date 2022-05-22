import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full h-20 flex justify-center items-end mb-5">
      <div className="flex md:hidden w-1/2 justify-start space-x-4 underline">
        <Link href="#">
          <a className="font-medium text-sm duration-150 active:scale-95">
            Passenger
          </a>
        </Link>
        <Link href="#">
          <a className="font-medium text-sm duration-150 active:scale-95">
            Driver
          </a>
        </Link>
      </div>
      <p className="text-sm opacity-90 font-medium">&copy; Ridi 2022</p>
    </footer>
  );
}

export default Footer;
