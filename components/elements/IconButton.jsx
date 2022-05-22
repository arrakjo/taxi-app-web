import Image from "next/image";

function IconButton({ name, icon, link }) {
  return (
    <button
      className="bg-secondary px-5 md:px-8 py-3 m-3 sm:m-0 flex justify-center items-center rounded-full text-white duration-150 hover:scale-105 active:scale-95 select-none"
      onClick={!link ? null : (location.href = link)}
    >
      {!icon ? null : (
        <div className="mr-2 flex justify-center items-center">
          <Image src={icon} alt="icon" width={32} height={32} priority />
        </div>
      )}
      {name ? name : "null"}
    </button>
  );
}

export default IconButton;
