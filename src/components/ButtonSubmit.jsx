function Button({ children }) {
  return (
    <button
      type="submit"
      className="bg-gradient-red w-full px-4 py-2 my-4 rounded-xl text-light font-heading cursor-pointer"
    >
      {children}
    </button>
  );
}

export default Button;
