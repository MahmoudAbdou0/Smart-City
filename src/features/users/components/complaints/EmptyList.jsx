function EmptyList({ msg }) {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-gray-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 mb-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p className="font-medium text-lg">No {msg} yet</p>
      <span className="text-sm text-gray-400">
        You will see {msg} once they are submitted.
      </span>
    </div>
  );
}

export default EmptyList;
