function Toggler({ content, setContent }) {
  return (
    <div className="flex flex-wrap items-center gap-0.5 md:gap-3 rounded-3xl border border-primary-light/50 shadow font-semibold w-fit md:px-2 my-8 text-xs md:text-sm cursor-pointer ">
      <p
        className={
          content === "new"
            ? "bg-gradient-red rounded-full md:px-2 py-1 text-white whitespace-nowrap"
            : "whitespace-nowrap"
        }
        onClick={() => setContent("new")}
      >
        Submit New
      </p>
      <p
        className={
          content === "complaints"
            ? "bg-gradient-red rounded-full md:px-2 py-1 text-white whitespace-nowrap"
            : "whitespace-nowrap"
        }
        onClick={() => setContent("complaints")}
      >
        My Complaints
      </p>
      <p
        className={
          content === "suggestions"
            ? "bg-gradient-red rounded-full md:px-2 py-1 text-white whitespace-nowrap"
            : "whitespace-nowrap"
        }
        onClick={() => setContent("suggestions")}
      >
        My Suggestions
      </p>
    </div>
  );
}

export default Toggler;
