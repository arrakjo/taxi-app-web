import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/img/logo.svg";
import ChevronLeft from "../../public/img/icons/ChevronLeft.svg";

function Register() {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="flex flex-col relative justify-center items-center border border-[#ECECEC] shadow-xl shadow-[#ECECEC] rounded-xl p-8">
        <div className="w-24 h-24 grid mb-16 place-items-center rounded-full shadow-2xl">
          <Image
            src={Logo}
            alt="Logo"
            width={48}
            height={60}
            priority
            className="pointer-events-none"
          />
        </div>
        <div className="w-full">
          <h1 className="font-medium text-secondary">
            Welcome to <span className="font-bold">Ridi</span>
          </h1>
          <p className="text-sm text-gray">Register to order a ride now</p>
        </div>
        <div className="w-full py-8">
          <form className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm text-secondary font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="email@example.com"
              className="w-72 border-b border-gray py-2 outline-none mb-6"
            />
            <label htmlFor="pw" className="text-sm text-secondary font-medium">
              Password
            </label>
            <input
              type="password"
              id="pw"
              placeholder="*****"
              className="w-72 border-b border-gray py-2 outline-none"
            />
            <div className="w-full py-5 flex justify-center items-center">
              <label htmlFor="checkbox" className="text-sm select-none">
                <input type="checkbox" id="checkbox" className="mr-1" /> I agree
                to the{" "}
                <a href="#" className="text-primary">
                  Terms of Service
                </a>
              </label>
            </div>
            <button className="bg-primary px-8 py-3 rounded-full text-white duration-150 hover:scale-105 active:scale-95">
              Register
            </button>
          </form>
          <div className="w-full flex space-x-1 justify-center pt-6">
            <p className="text-sm text-secondary">Already have an account? </p>
            <Link href="/login">
              <a className="text-sm text-primary underline font-medium">
                Log in here
              </a>
            </Link>
          </div>
        </div>
        <button
          className="absolute top-5 left-5 w-12 h-12 grid place-items-center rounded-full shadow-md"
          onClick={() => (window.location.href = "/")}
        >
          <Image
            src={ChevronLeft}
            alt="Back"
            width={32}
            height={32}
            className="opacity-80"
            priority
          />
        </button>
      </div>
    </div>
  );
}

export default Register;
