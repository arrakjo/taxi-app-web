function Button({ name, link }) {
  return (
    <button
      className="bg-primary px-8 py-3 rounded-full text-white duration-150 hover:scale-105 active:scale-95 select-none"
      onClick={!link ? null : () => (window.location.href = link)}
    >
      {name ? name : "null"}
    </button>
  );
}

export default Button;
