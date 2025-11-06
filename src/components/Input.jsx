function Input({ label, name, type, register, options = {}, error }) {
  return (
    <div className="flex flex-col  gap-1 py-1 ">
      <label htmlFor={name} className="font-heading text-primary">
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register(name, options)}
        className=" border border-primary-dark rounded-lg h-8 p-2 focus:outline-primary"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

export default Input;
