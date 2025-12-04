export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      className="w-full max-w-md border-2 border-primary-light/50 focus:ring-3 focus:ring-primary-light focus:outline-none focus:caret-primary  rounded-xl px-4 py-2 lg:max-h-10"
      placeholder="Search users..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
