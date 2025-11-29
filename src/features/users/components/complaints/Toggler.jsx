function Toggler({ content, setContent }) {
  return (
    <div className="flex items-center gap-3 rounded-3xl border border-primary-light/50 shadow font-semibold w-fit p-1 px-2 my-8 text-sm cursor-pointer">
      <p
        className={
          content === "new"
            ? "bg-gradient-red rounded-full px-2 py-1 text-white"
            : ""
        }
        onClick={() => setContent("new")}
      >
        Submit New
      </p>
      <p
        className={
          content === "complaints"
            ? "bg-gradient-red rounded-full px-2 py-1 text-white"
            : ""
        }
        onClick={() => setContent("complaints")}
      >
        My Complaints
      </p>
      <p
        className={
          content === "suggestions"
            ? "bg-gradient-red rounded-full px-2 py-1 text-white"
            : ""
        }
        onClick={() => setContent("suggestions")}
      >
        My Suggestions
      </p>
    </div>
  );
}

export default Toggler;
